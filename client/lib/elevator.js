Template.body.onRendered(function(){
    var Elevator=function(n){"use strict";function o(n,o,e,i){return n/=i/2,1>n?e/2*n*n+o:(n--,-e/2*(n*(n-2)-1)+o)}function e(n,o){for(var e in o){var i=void 0===n[e]&&"function"!=typeof e;i&&(n[e]=o[e])}return n}function i(n){f||(f=n);var e=n-f,t=o(e,v,-v,s);window.scrollTo(0,t),s>e?m=requestAnimationFrame(i):u()}function t(){f=null,v=null,w=!1}function u(){t(),a&&(a.pause(),a.currentTime=0),c&&c.play()}function l(){w&&(cancelAnimationFrame(m),t(),a&&(a.pause(),a.currentTime=0),window.scrollTo(0,0))}function r(n){n.addEventListener("click",T.elevate,!1)}function d(n){A=document.body;var o={duration:void 0,mainAudio:!1,endAudio:!1,preloadAudio:!0,loopAudio:!0};n=e(n,o),n.element&&r(n.element),n.duration&&(p=!0,s=n.duration),window.addEventListener("blur",l,!1),window.Audio&&(n.mainAudio&&(a=new Audio(n.mainAudio),a.setAttribute("preload",n.preloadAudio),a.setAttribute("loop",n.loopAudio)),n.endAudio&&(c=new Audio(n.endAudio),c.setAttribute("preload","true")))}var a,c,A=null,m=null,s=null,p=!1,f=null,v=null,w=!1,T=this;this.elevate=function(){w||(w=!0,v=document.documentElement.scrollTop||A.scrollTop,p||(s=1.5*v),requestAnimationFrame(i),a&&a.play())},d(n)};

    elevator = new Elevator({
        element: document.querySelector('#toTop'),
        duration: 1000 // milliseconds
    });

    $('.tooltipped').tooltip({delay: 50});
});