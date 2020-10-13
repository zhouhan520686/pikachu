const string=`
.skin * {box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before,*::after{box-sizing: border-box;}
.skin {
    position: relative;
    background-color: #ffe600;
    min-height: 50vh;  /*高度占满全屏*/
}
.nose {
    border: 10px solid #000;
    border-color: #000 transparent transparent;
    border-bottom: none;
    width: 0;
    height: 0;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }

}
.nose:hover{
    transform-origin:50% 100% ;/* 最右以最中心为基础,上下以最下*/
    animation: wave 300ms infinite linear;
}
.yuan {
   position: absolute; 
   width: 20px;
   height: 6px;
   top: -16px;
   left: -10px;
   border-radius: 10px 10px 0 0 ; 
   background-color: #000;
}
.eye {
    position: absolute;
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background-color: #000;
    border-radius: 50%;
}
.eye::before{
   content: '';
   display: block;
   border: 3px solid #000; 
   width: 25px;
   height: 25px;
   background: #fff;
   border-radius: 50%;
   position: relative;
   left: 8px;
   top: 1px;
}
.eye.left {
    transform: translateX(-100px);
}
.eye.right {
    transform: translateX(100px);
}
.mouth {
    position: relative;
    width: 200px;
    height: 200px;
    left: 50%;
    top: 170px;
    margin-left: -100px;
    
}
.mouth.up{
  position: absolute;
  top: -20px;
  
}
.mouth .up .lip{
    position: absolute;
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    left: 50%;
    margin-left: -50px;
    top: -25px;
    z-index: 2;
    background-color: #ffe600;
    
}
.mouth .up .lip.left{
    border-radius: 0 0 0px 50px;
    border-right-color: transparent;
    transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0px;
    border-left-color: transparent;
    transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip::before{
    position: absolute;
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    bottom: 0;
    background-color: #ffe600;;
}
.mouth .up .lip.right::before{
    left: -6px;
}
.mouth .up .lip.left::before{
    right: -6px;
}
.mouth .down {
    height: 144px;
    position: absolute;
    top: 0px;
    width: 100%;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 3px solid #000;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background-color: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
    position: absolute;
    background-color:#ff485f;
    width: 200px;
    height: 224px;
    bottom: -110px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}
.face {
    position: absolute;
    left: 50%;
    border: 3px solid #000;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
    border-radius: 50%;
    background-color: red;
}
.face>img{
    position: absolute;
    top: 50%;
    left: 50%;
}
.face.left {
    transform: translateX(-180px);
    
}
.face.left>img{
    transform: rotateY(180deg);
    transform-origin: 0 0;
}
.face.right {
    transform: translateX(180px);
    
}
`
export default string