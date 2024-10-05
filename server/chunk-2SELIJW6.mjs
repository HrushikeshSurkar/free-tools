import './polyfills.server.mjs';
import{$ as fe,A as k,B as ne,C as E,D,E as P,F as ie,G as h,H as oe,I as re,J as M,K as ae,L as se,Q as ce,T as le,V as pe,W as z,X as de,Y as O,Z as ge,_ as me,a as Y,b as j,c as Q,ca as ue,d as C,e as X,f as J,g as f,ga as _e,h as u,i as q,ia as V,j as A,ja as he,k as T,l as _,m as b,n as y,o as K,p as d,q as $,r as ee,s as c,t as a,u as w,v as I,w as te,x as g,y as m,z as W}from"./chunk-H3C6OZEV.mjs";import{h as F}from"./chunk-5XUXGTUW.mjs";var B=class t{title="free-tools";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-root"]],standalone:!0,features:[M],decls:1,vars:0,template:function(e,n){e&1&&w(0,"router-outlet")},dependencies:[_e]})};var N=class t{imageSource=new Y(null);currentImage=this.imageSource.asObservable();changeImage(i){this.imageSource.next(i)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ne=["canvas"],Se=["imageElement"],ke=(t,i,e,n)=>({"top.px":t,"left.px":i,"width.px":e,"height.px":n});function Ee(t,i){if(t&1&&(c(0,"div",12)(1,"h3"),h(2,"Cropped Image Preview"),a(),w(3,"img",13),a()),t&2){let e=m(2);_(3),d("src",e.croppedImage,T)}}function Fe(t,i){if(t&1){let e=I();c(0,"div",4)(1,"h2"),h(2,"Edit Image"),a(),c(3,"div",5)(4,"button",6),g("click",function(){f(e);let o=m();return u(o.clearCanvas())}),h(5,"Reset"),a(),c(6,"button",7),g("click",function(){f(e);let o=m();return u(o.cropImage())}),h(7,"Done"),a(),c(8,"button",6),g("click",function(){f(e);let o=m();return u(o.backButton())}),h(9,"Back"),a()(),c(10,"div",8),w(11,"img",9,1)(13,"canvas",null,2)(15,"div",10),a(),y(16,Ee,4,1,"div",11),a()}if(t&2){let e=m();_(6),d("disabled",!e.croppedImage),_(5),d("src",e.image,T),_(4),d("ngStyle",ae(4,ke,e.cropBox.y,e.cropBox.x,e.cropBox.width,e.cropBox.height)),_(),d("ngIf",e.croppedImage)}}function je(t,i){if(t&1){let e=I();c(0,"p"),h(1,"No image selected for editing. Please go back to the drop zone to select an image."),a(),c(2,"button",14),g("click",function(){f(e);let o=m();return u(o.backButton())}),h(3,"Back"),a()}}var Z=class t{constructor(i,e){this.imageService=i;this.router=e}image=null;croppedImage=null;cropBox={x:50,y:50,width:200,height:150};canvas;imageElement;ngOnInit(){this.imageService.currentImage.subscribe(i=>{this.image=i,this.image&&this.drawImage()})}ngAfterViewInit(){}drawImage(){let i=this.imageElement.nativeElement,e=this.canvas.nativeElement.getContext("2d");if(!e){console.error("Canvas context not available");return}i.onload=()=>{this.canvas.nativeElement.width=i.width,this.canvas.nativeElement.height=i.height,e.drawImage(i,0,0),this.drawCropBox(e)},i.src=this.image}drawCropBox(i){i.strokeStyle="red",i.lineWidth=2,i.strokeRect(this.cropBox.x,this.cropBox.y,this.cropBox.width,this.cropBox.height)}cropImage(){let i=this.canvas.nativeElement.getContext("2d");if(!i){console.error("Canvas context not available for cropping");return}let e=i.getImageData(this.cropBox.x,this.cropBox.y,this.cropBox.width,this.cropBox.height),n=document.createElement("canvas");n.width=this.cropBox.width,n.height=this.cropBox.height;let o=n.getContext("2d");if(!o){console.error("Cropped canvas context not available");return}o.putImageData(e,0,0),this.croppedImage=n.toDataURL()}clearCanvas(){let i=this.canvas.nativeElement.getContext("2d");i&&(i.clearRect(0,0,this.canvas.nativeElement.width,this.canvas.nativeElement.height),this.drawImage()),this.croppedImage=null}backButton(){this.router.navigate(["image-input"])}static \u0275fac=function(e){return new(e||t)(b(N),b(V))};static \u0275cmp=C({type:t,selectors:[["app-img-editor"]],viewQuery:function(e,n){if(e&1&&(E(Ne,5),E(Se,5)),e&2){let o;D(o=P())&&(n.canvas=o.first),D(o=P())&&(n.imageElement=o.first)}},standalone:!0,features:[M],decls:3,vars:2,consts:[["noImage",""],["imageElement",""],["canvas",""],["class","image-editor",4,"ngIf","ngIfElse"],[1,"image-editor"],[1,"tools-section"],[3,"click"],[3,"click","disabled"],[1,"image-editing-section"],["alt","Selected Image",2,"display","none",3,"src"],[1,"crop-box",3,"ngStyle"],["class","cropped-image-preview",4,"ngIf"],[1,"cropped-image-preview"],["alt","Cropped Image",2,"max-width","100%","height","auto",3,"src"],["type","button",1,"button-style",3,"click"]],template:function(e,n){if(e&1&&y(0,Fe,17,9,"div",3)(1,je,4,0,"ng-template",null,0,se),e&2){let o=ie(2);d("ngIf",n.image)("ngIfElse",o)}},dependencies:[O,z,de],styles:[".button-style[_ngcontent-%COMP%], .image-editor[_ngcontent-%COMP%]   .tools-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#adff2f;border:none;padding:10px;font-size:20px;border-radius:10px;box-shadow:1px 1px 1px #15162733;margin:20px;cursor:pointer}.button-style[_ngcontent-%COMP%]:hover, .image-editor[_ngcontent-%COMP%]   .tools-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#2b4503;color:#fff}.image-editor[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.image-editor[_ngcontent-%COMP%]   .tools-section[_ngcontent-%COMP%]{display:flex;justify-content:center}.image-editor[_ngcontent-%COMP%]   .tools-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:10px}.image-editor[_ngcontent-%COMP%]   .image-editing-section[_ngcontent-%COMP%]{padding:3% 16%;border:1px solid black;width:20rem;margin:50px auto;display:flex;justify-content:center;position:relative}.image-editor[_ngcontent-%COMP%]   .image-editing-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40%;display:none}.image-editor[_ngcontent-%COMP%]   .image-editing-section[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%;height:auto;border:1px solid black}.image-editor[_ngcontent-%COMP%]   .image-editing-section[_ngcontent-%COMP%]   .crop-box[_ngcontent-%COMP%]{position:absolute;border:2px dashed red;pointer-events:none}.image-editor[_ngcontent-%COMP%]   .cropped-image-preview[_ngcontent-%COMP%]{text-align:center;margin-top:20px}"]})};var Te=[[["ngx-dropzone-label"]]],Ve=["ngx-dropzone-label"];function Be(t,i){if(t&1){let e=I();c(0,"ngx-dropzone-remove-badge",1),g("click",function(o){f(e);let r=m();return u(r._remove(o))}),a()}}var Re=["fileInput"],Ze=[[["ngx-dropzone-preview"]],"*",[["ngx-dropzone-label"]]],Le=["ngx-dropzone-preview","*","ngx-dropzone-label"];function He(t,i){t&1&&k(0,2,["*ngIf","!_hasPreviews"])}var ye=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=J({type:t,selectors:[["ngx-dropzone-label"]]}),t})();function S(t){return t!=null&&`${t}`!="false"}function Ae(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):null}var We=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=C({type:t,selectors:[["ngx-dropzone-remove-badge"]],decls:3,vars:0,consts:[["x1","0","y1","0","x2","10","y2","10"],["x1","0","y1","10","x2","10","y2","0"]],template:function(e,n){e&1&&(q(),c(0,"svg"),w(1,"line",0)(2,"line",1),a())},styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}[_nghost-%COMP%]:hover{background:#aeaeae}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%] > svg[_ngcontent-%COMP%] > line[_ngcontent-%COMP%]{stroke-width:2px;stroke:#fff}"]}),t})(),U=function(t){return t[t.BACKSPACE=8]="BACKSPACE",t[t.DELETE=46]="DELETE",t}(U||{}),G=(()=>{class t{constructor(e){this.sanitizer=e,this._removable=!1,this.removed=new A,this.tabIndex=0}set file(e){this._file=e}get file(){return this._file}get removable(){return this._removable}set removable(e){this._removable=S(e)}keyEvent(e){switch(e.keyCode){case U.BACKSPACE:case U.DELETE:this.remove();break;default:break}}get hostStyle(){return this.sanitizer.bypassSecurityTrustStyle(`
			display: flex;
			height: 140px;
			min-height: 140px;
			min-width: 180px;
			max-width: 180px;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			margin: 10px;
			border-radius: 5px;
			position: relative;
		`)}_remove(e){e.stopPropagation(),this.remove()}remove(){this._removable&&this.removed.next(this.file)}readFile(){return F(this,null,function*(){return new Promise((e,n)=>{let o=new FileReader;if(o.onload=r=>{e(r.target.result)},o.onerror=r=>{console.error(`FileReader failed on file ${this.file.name}.`),n(r)},!this.file)return n("No file to read. Please provide a file using the [file] Input property.");o.readAsDataURL(this.file)})})}}return t.\u0275fac=function(e){return new(e||t)(b(me))},t.\u0275cmp=C({type:t,selectors:[["ngx-dropzone-preview"]],hostVars:3,hostBindings:function(e,n){e&1&&g("keyup",function(r){return n.keyEvent(r)}),e&2&&(te("tabindex",n.tabIndex),ee(n.hostStyle))},inputs:{file:"file",removable:"removable"},outputs:{removed:"removed"},ngContentSelectors:Ve,decls:2,vars:1,consts:[[3,"click",4,"ngIf"],[3,"click"]],template:function(e,n){e&1&&(W(Te),k(0),y(1,Be,1,0,"ngx-dropzone-remove-badge",0)),e&2&&(_(),d("ngIf",n.removable))},dependencies:[We,z],styles:["[_nghost-%COMP%]{background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}[_nghost-%COMP%]:hover, [_nghost-%COMP%]:focus{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}[_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word}"]}),t})(),be=(()=>{class t{parseFileList(e,n,o,r){let l=[],p=[];for(let v=0;v<e.length;v++){let x=e.item(v);if(!this.isAccepted(x,n)){this.rejectFile(p,x,"type");continue}if(o&&x.size>o){this.rejectFile(p,x,"size");continue}if(!r&&l.length>=1){this.rejectFile(p,x,"no_multiple");continue}l.push(x)}return{addedFiles:l,rejectedFiles:p}}isAccepted(e,n){if(n==="*")return!0;let o=n.split(",").map(s=>s.toLowerCase().trim()),r=e.type.toLowerCase(),l=e.name.toLowerCase();return!!o.find(s=>s.endsWith("/*")?r.split("/")[0]===s.split("/")[0]:s.startsWith(".")?l.endsWith(s):s==r)}rejectFile(e,n,o){let r=n;r.reason=o,e.push(r)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=j({token:t,factory:t.\u0275fac}),t})(),Ie=(()=>{class t{constructor(e){this.service=e,this.change=new A,this.accept="*",this._disabled=!1,this._multiple=!0,this._maxFileSize=void 0,this._expandable=!1,this._disableClick=!1,this._processDirectoryDrop=!1,this._isHovered=!1}get _hasPreviews(){return!!this._previewChildren.length}get disabled(){return this._disabled}set disabled(e){this._disabled=S(e),this._isHovered&&(this._isHovered=!1)}get multiple(){return this._multiple}set multiple(e){this._multiple=S(e)}get maxFileSize(){return this._maxFileSize}set maxFileSize(e){this._maxFileSize=Ae(e)}get expandable(){return this._expandable}set expandable(e){this._expandable=S(e)}get disableClick(){return this._disableClick}set disableClick(e){this._disableClick=S(e)}get processDirectoryDrop(){return this._processDirectoryDrop}set processDirectoryDrop(e){this._processDirectoryDrop=S(e)}_onClick(){this.disableClick||this.showFileSelector()}_onDragOver(e){this.disabled||(this.preventDefault(e),this._isHovered=!0)}_onDragLeave(){this._isHovered=!1}_onDrop(e){if(!this.disabled)if(this.preventDefault(e),this._isHovered=!1,!this.processDirectoryDrop||!DataTransferItem.prototype.webkitGetAsEntry)this.handleFileDrop(e.dataTransfer.files);else{let n=e.dataTransfer.items;if(n.length>0){let o=[],r=[];for(let p=0;p<n.length;p++){let s=n[p].webkitGetAsEntry();s.isFile?o.push(e.dataTransfer.files[p]):s.isDirectory&&r.push(s)}let l=new DataTransfer;if(o.forEach(p=>{l.items.add(p)}),!r.length&&l.items.length&&this.handleFileDrop(l.files),r.length){let p=[];for(let s of r)p.push(this.extractFilesFromDirectory(s));Promise.all(p).then(s=>{s.reduce((v,x)=>[...v,...x]).forEach(v=>{l.items.add(v)}),this.handleFileDrop(l.files)})}}}}extractFilesFromDirectory(e){function n(o){return F(this,null,function*(){try{return yield new Promise((r,l)=>o.file(r,l))}catch(r){console.log("Error converting a fileEntry to a File: ",r)}})}return new Promise((o,r)=>{let l=[],p=e.createReader(),s=()=>{p.readEntries(v=>F(this,null,function*(){if(!v.length)o(l);else{let x=v.filter(H=>H.isFile);for(let H of x){let Me=yield n(H);l.push(Me)}s()}}))};s()})}showFileSelector(){this.disabled||this._fileInput.nativeElement.click()}_onFilesSelected(e){let n=e.target.files;this.handleFileDrop(n),this._fileInput.nativeElement.value="",this.preventDefault(e)}handleFileDrop(e){let n=this.service.parseFileList(e,this.accept,this.maxFileSize,this.multiple);this.change.next({addedFiles:n.addedFiles,rejectedFiles:n.rejectedFiles,source:this})}preventDefault(e){e.preventDefault(),e.stopPropagation()}}return t.\u0275fac=function(e){return new(e||t)(b(be,2))},t.\u0275cmp=C({type:t,selectors:[["ngx-dropzone"],["","ngx-dropzone",""]],contentQueries:function(e,n,o){if(e&1&&ne(o,G,5),e&2){let r;D(r=P())&&(n._previewChildren=r)}},viewQuery:function(e,n){if(e&1&&E(Re,7),e&2){let o;D(o=P())&&(n._fileInput=o.first)}},hostVars:8,hostBindings:function(e,n){e&1&&g("click",function(){return n._onClick()})("dragover",function(r){return n._onDragOver(r)})("dragleave",function(){return n._onDragLeave()})("drop",function(r){return n._onDrop(r)}),e&2&&$("ngx-dz-disabled",n.disabled)("expandable",n.expandable)("unclickable",n.disableClick)("ngx-dz-hovered",n._isHovered)},inputs:{accept:"accept",disabled:"disabled",multiple:"multiple",maxFileSize:"maxFileSize",expandable:"expandable",disableClick:"disableClick",processDirectoryDrop:"processDirectoryDrop",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedBy:[0,"aria-describedby","ariaDescribedBy"]},outputs:{change:"change"},features:[re([be])],ngContentSelectors:Le,decls:5,vars:8,consts:[["fileInput",""],["type","file",3,"change","id","multiple","accept","disabled"],[4,"ngIf"]],template:function(e,n){if(e&1){let o=I();W(Ze),c(0,"input",1,0),g("change",function(l){return f(o),u(n._onFilesSelected(l))}),a(),y(2,He,1,0,"ng-content",2),k(3),k(4,1)}e&2&&(d("id",n.id)("multiple",n.multiple)("accept",n.accept)("disabled",n.disabled),K("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedBy),_(2),d("ngIf",!n._hasPreviews))},dependencies:[z],styles:["[_nghost-%COMP%]{display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}.ngx-dz-hovered[_nghost-%COMP%]{border-style:solid}.ngx-dz-disabled[_nghost-%COMP%]{opacity:.5;cursor:no-drop;pointer-events:none}.expandable[_nghost-%COMP%]{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}.unclickable[_nghost-%COMP%]{cursor:default}[_nghost-%COMP%]     ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus +   ngx-dropzone-label{outline:1px dotted #000;outline:-webkit-focus-ring-color auto 5px}"]}),t})();var we=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=X({type:t}),t.\u0275inj=Q({imports:[[O]]}),t})();function Ge(t,i){if(t&1){let e=I();c(0,"ngx-dropzone-preview",6),g("removed",function(){let o=f(e).$implicit,r=m(2);return u(r.onRemove(o))}),c(1,"ngx-dropzone-label"),h(2),a()()}if(t&2){let e=i.$implicit;d("removable",!0),_(2),oe("",e.name," (",e.type,")")}}function Ye(t,i){if(t&1){let e=I();c(0,"div",1)(1,"ngx-dropzone",2),g("change",function(o){f(e);let r=m();return u(r.onSelect(o))}),c(2,"ngx-dropzone-label"),h(3,"Drop files here or click to select files..."),a(),y(4,Ge,3,3,"ngx-dropzone-preview",3),a(),c(5,"div",4)(6,"button",5),g("click",function(){f(e);let o=m();return u(o.navigateToEditor())}),h(7,"Edit Image"),a()()()}if(t&2){let e=m();_(4),d("ngForOf",e.files)}}var L=class t{constructor(i,e){this.imageService=i;this.router=e}toggleEditor=!1;selectedImageSrc;files=[];onSelect(i){if(this.files.push(...i.addedFiles),i.addedFiles[0]){let e=new FileReader;e.onload=()=>{this.selectedImageSrc=e.result,this.imageService.changeImage(this.selectedImageSrc)},e.readAsDataURL(i.addedFiles[0])}}onRemove(i){this.files.splice(this.files.indexOf(i),1),this.files.length===0&&this.imageService.changeImage(null)}navigateToEditor(){if(!this.selectedImageSrc){alert("Please select an image first");return}this.router.navigate(["image-editor"])}static \u0275fac=function(e){return new(e||t)(b(N),b(V))};static \u0275cmp=C({type:t,selectors:[["app-drop-zone"]],standalone:!0,features:[M],decls:1,vars:1,consts:[["class","drop-zone-wrap",4,"ngIf"],[1,"drop-zone-wrap"],[2,"justify-content","center",3,"change"],[3,"removable","removed",4,"ngFor","ngForOf"],[1,"button-wrap"],[3,"click"],[3,"removed","removable"]],template:function(e,n){e&1&&y(0,Ye,8,1,"div",0),e&2&&d("ngIf",!n.toggleEditor)},dependencies:[we,Ie,ye,G,O,pe,z],styles:[".drop-zone-wrap[_ngcontent-%COMP%]{padding:10% 20%}.drop-zone-wrap[_ngcontent-%COMP%]   .button-wrap[_ngcontent-%COMP%]{display:flex;justify-content:center}.drop-zone-wrap[_ngcontent-%COMP%]   .button-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#adff2f;border:none;padding:10px;font-size:20px;border-radius:10px;box-shadow:5px 5px 10px #0003;margin-top:20px;cursor:pointer}.drop-zone-wrap[_ngcontent-%COMP%]   .button-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#2b4503;color:#fff}"]})};var ze=[{path:"",redirectTo:"image-input",pathMatch:"full"},{path:"image-input",component:L},{path:"image-editor",component:Z}];var De={providers:[ce({eventCoalescing:!0}),he(ze),fe()]};var Qe={providers:[ue()]},Pe=le(De,Qe);var Xe=()=>ge(B,Pe),Vt=Xe;export{Vt as a};
