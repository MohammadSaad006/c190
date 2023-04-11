AFRAME.registerComponent('drive',{
    init:function(){
        this.driveCar()
    },
    driveCar:function(){
        multiply=10
            var cameraR=document.querySelector("#cameraIRG")
            var acc=document.querySelector("#ac")
            var bre=document.querySelector("#br")
            var wh=document.querySelector("#wheel")

            //var audio1=document.querySelector("#carAudio1")

            var camRotation=cameraR.getAttribute("rotation")
            var camPos=cameraR.getAttribute("position")
            var camMovement=cameraR.getAttribute("movement-controls")
            var camDirection= new THREE.Vector3()
                cameraR.object3D.getWorldDirection(camDirection)

            var wheelRotation=0
            console.log(camMovement.speed)
        window.addEventListener("keydown",function (e){
            
            
            if (e.code=="ArrowUp"){
                multiply+=0.5
                if (multiply<=100 ){
                    cameraR.setAttribute("movement-controls",{"speed":camMovement.speed+0.05})
                    acc.setAttribute("material","color","green")
                    acc.setAttribute("rotation","60 0 0")
                    //audio1.setAttribute("sound","autoplay","true")
                   console.log(camMovement.speed)
                }
            }

            if (e.code=="ArrowDown"){
                    bre.setAttribute("material","color","red")
                    bre.setAttribute("rotation","60 0 0")
                }

            if (e.code=="ArrowRight"){
                wheelRotation-=5
                camRotation.y-=5
                wh.setAttribute("rotation",{x:0 ,y:0 ,z:wheelRotation})
                cameraR.setAttribute("rotation",{x:0 ,y:camRotation , z:0})
            }

            if (e.code=="ArrowLeft"){
                wheelRotation+=5
                camRotation.y+=5
                wh.setAttribute("rotation",{x:0 ,y:0 ,z:wheelRotation})
                cameraR.setAttribute("rotation",{x:0 ,y:camRotation , z:0})
                console.log(camRotation.y)
            }
            
        })
        window.addEventListener("keyup",function (e){
                    if (e.code=="ArrowUp"){
                    acc.setAttribute("material","color","gray")
                    acc.setAttribute("rotation","40 0 0")
                    if (multiply>10){
                        multiply-=0.5
                        cameraR.setAttribute("movement-controls",{"speed":camMovement.speed-0.05})
                    }
                    }
                    if (e.code=="ArrowDown"){
                        bre.setAttribute("material","color","gray")
                        bre.setAttribute("rotation","40 0 0")
                    }

        })

    }
})