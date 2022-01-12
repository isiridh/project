import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.scss']
})
export class UnityComponent implements OnInit {
  gameInstance:any
  isExpressive=false
  constructor( private router:Router) {
    
   }
  
  async ngOnInit() {
      var buildUrl = "assets/web_unityBuild/Build";
      var loaderUrl=buildUrl + "/web_unityBuild.loader.js";
      var config = {
        dataUrl: buildUrl + "/web_unityBuild.data.unityweb",
        frameworkUrl: buildUrl + "/web_unityBuild.framework.js.unityweb",
        codeUrl: buildUrl + "/web_unityBuild.wasm.unityweb",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "IBM",
        productName: "MFStarterKit for Unity",
        productVersion: "0.1",
        devicePixelRatio: 0,
        showBanner:  this.unityShowBanner
      };
      let container = document.querySelector("#unity-container") || new Element();
        var canvas :HTMLElement = document.querySelector("#unity-canvas") || new HTMLElement();
        var loadingBar :HTMLElement= document.querySelector("#unity-loading-bar") || new HTMLElement();
        var progressBarFull :HTMLElement = document.querySelector("#unity-progress-bar-full") || new HTMLElement();
        var fullscreenButton :HTMLElement= document.querySelector("#unity-fullscreen-button") || new HTMLElement();
        var warningBanner :HTMLElement = document.querySelector("#unity-warning") || new HTMLElement();
    
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
          container.className = "unity-mobile";
          // Avoid draining fillrate performance on mobile devices,
          // and default/override low DPI mode on mobile browsers.
          config.devicePixelRatio = 1;
          this.unityShowBanner('WebGL builds are not supported on mobile devices.');
        } else {
          canvas.style.width= "600px";
          canvas.style.height = "600px";
        }
        loadingBar.style.display = "block";
  
        createUnityInstance(canvas, config, (progress) => {
          progressBarFull.style.width = 100 * progress + "%";
        }).then((unityInstance) => {
          loadingBar.style.display = "none";
          this.gameInstance=unityInstance
          fullscreenButton.onclick = () => {
            unityInstance.SetFullscreen(1);
          };
        }).catch((message) => {
          alert(message);
        });
    }
     changeDirection(dir){
       alert('cube will change direction')
     //  this.gameInstance.SendMessage('Decider Object', 'ChangeRotationDirection', 'anticlockwise')
      this.gameInstance.SendMessage('Decider Object','ChangeRotationDirection',dir)
      }
     unityShowBanner(arg0: string) {
        throw new Error('Function not implemented.');
      }
      
  }
  
