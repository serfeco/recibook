"use strict";(self.webpackChunkReciBook=self.webpackChunkReciBook||[]).push([[549],{8549:(y,m,s)=>{s.r(m),s.d(m,{EscandallosModule:()=>A});var u=s(6895),i=s(433),h=s(529),c=s(9965),e=s(8256),g=s(7594),p=s(4811);const b=["botonModificarEscandallo"],_=function(n){return["../verEscandallo",n]},Z=function(n){return["modificarEscandallo",n]};function C(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",6)(1,"div",7),e._UZ(2,"div",8),e.TgZ(3,"div",9),e._UZ(4,"img",10),e.qZA(),e.TgZ(5,"div",11)(6,"h4",12),e._uU(7),e.qZA(),e.TgZ(8,"p",13),e._uU(9),e._UZ(10,"br"),e._uU(11),e.qZA()(),e.TgZ(12,"div",14)(13,"button",15),e._uU(14,"Ver"),e.qZA(),e._uU(15," \xa0\xa0 "),e.TgZ(16,"button",16,17),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.irAModificar())}),e._uU(18,"Modificar"),e.qZA(),e._uU(19," \xa0\xa0 "),e.TgZ(20,"button",18),e.NdJ("click",function(){const l=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.borrarEscandallo(l.idEscandallo))}),e._uU(21,"Borrar"),e.qZA()()()()}if(2&n){const t=r.$implicit;e.xp6(7),e.Oqu(t.nombre),e.xp6(2),e.hij("Para ",t.numRaciones," persona/s"),e.xp6(2),e.hij(" Coste: ",t.coste," "),e.xp6(2),e.Q6J("routerLink",e.VKq(5,_,t.idEscandallo)),e.xp6(3),e.Q6J("routerLink",e.VKq(7,Z,t.idEscandallo))}}let E=(()=>{class n{ngOnInit(){this.listarEscandallos()}constructor(t,o,a,l){this.service=t,this.sesion=o,this.fb=a,this.router=l,this.escandallos=[]}listarEscandallos(){null!=this.sesion.usuario?this.service.listarEscandallos(this.sesion.usuario?.email).subscribe(t=>{t?(console.log(t),this.escandallos=t):this.router.navigate([""])}):this.router.navigate([""])}borrarEscandallo(t){this.service.borrarEscandallo(t).subscribe(o=>{this.escandallos.length>1?this.listarEscandallos():this.escandallos=[]})}irAModificar(){window.scrollTo({top:0,behavior:"smooth"})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.m),e.Y36(p.v),e.Y36(i.qu),e.Y36(c.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-escandallos"]],viewQuery:function(t,o){if(1&t&&e.Gf(b,5),2&t){let a;e.iGM(a=e.CRH())&&(o.botonModificarEscandallo=a.first)}},decls:10,vars:1,consts:[[1,"container","min-vh-100"],[1,"title","ms-3","mt-5","text-center","mb-5"],[1,"text-center","justify-content-center","mt-5"],["routerLink","crearEscandallo",1,"btn","btn-outline-primary"],[1,"row","pt-5","m-auto"],["class","col-md-6 col-lg-4 pb-3 mb-2",4,"ngFor","ngForOf"],[1,"col-md-6","col-lg-4","pb-3","mb-2"],[1,"card","card-custom","bg-white","border-white","border-0"],[1,"card-custom-img",2,"background-image","url('http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg')"],[1,"card-custom-avatar"],["src","../../assets/icons8-configuraci\xf3n-de-la-tienda-100.png","alt","img-local",1,"img-fluid"],[1,"card-body",2,"overflow-y","auto"],[1,"card-title"],[1,"card-text"],[1,"card-footer",2,"background","inherit","border-color","inherit","justify-items","center"],[1,"btn","btn-outline-primary","mb-3",3,"routerLink"],[1,"btn","btn-outline-dark","mb-3",3,"routerLink","click"],["botonModificarEscandallo",""],[1,"btn","btn-warning","mb-3",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h1",1),e._uU(2,"Mis Escandallos"),e.qZA(),e.TgZ(3,"div",2)(4,"button",3)(5,"h5"),e._uU(6,"Crear Escandallo +"),e.qZA()()(),e._UZ(7,"router-outlet"),e.TgZ(8,"div",4),e.YNc(9,C,22,9,"div",5),e.qZA()()),2&t&&(e.xp6(9),e.Q6J("ngForOf",o.escandallos))},dependencies:[u.sg,c.lC,c.rH],styles:['.card-custom[_ngcontent-%COMP%]{overflow:hidden;min-height:400px;box-shadow:0 0 15px #0a0a0a4d}.card-custom-img[_ngcontent-%COMP%]{height:200px;min-height:200px;background-repeat:no-repeat;background-size:cover;background-position:center;border-color:inherit}.card-custom-img[_ngcontent-%COMP%]:after{position:absolute;content:"";top:161px;left:0;width:0;height:0;border-style:solid;border-top-width:40px;border-right-width:0;border-bottom-width:0;border-left-width:545px;border-left-width:calc(575px - 5vw);border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:inherit}.card-custom-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;box-shadow:0 0 15px #0a0a0a4d;position:absolute;top:100px;left:1.25rem;width:100px;height:100px}']}),n})();var f=s(3623);function x(n,r){if(1&n&&(e.TgZ(0,"option",31),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t.idIngrediente),e.xp6(1),e.hij(" ",t.nombreIngrediente," ")}}function v(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"th",32),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"button",33),e.NdJ("click",function(){const l=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.borrarEscandalloIngrediente(l.ingrediente.nombreIngrediente))}),e._uU(13,"Borrar"),e.qZA()()()}if(2&n){const t=r.$implicit;e.xp6(2),e.Oqu(t.ingrediente.nombreIngrediente),e.xp6(2),e.Oqu(t.cantidad),e.xp6(2),e.Oqu(t.udMedida),e.xp6(2),e.Oqu(t.precioKg),e.xp6(2),e.Oqu(t.precioRacion)}}function I(n,r){if(1&n&&(e.TgZ(0,"option",31),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t.idIngrediente),e.xp6(1),e.hij(" ",t.nombreIngrediente," ")}}function M(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"th",32),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"button",33),e.NdJ("click",function(){const l=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.borrarEscandalloIngrediente(l.ingrediente.nombreIngrediente))}),e._uU(13,"Borrar"),e.qZA()()()}if(2&n){const t=r.$implicit;e.xp6(2),e.Oqu(t.ingrediente.nombreIngrediente),e.xp6(2),e.Oqu(t.cantidad),e.xp6(2),e.Oqu(t.udMedida),e.xp6(2),e.Oqu(t.precioKg),e.xp6(2),e.Oqu(t.precioRacion)}}const U=[{path:"",component:E,children:[{path:"modificarEscandallo/:idEscandallo",component:(()=>{class n{constructor(t,o,a,l,d,O){this.serviceIngrediente=t,this.router=o,this.service=a,this.sesion=l,this.fb=d,this.rutaActiva=O,this.msgError="",this.idEscandallo=0,this.listaEscandalloIngrediente=[],this.escandalloIngrediente={cantidad:0,precioKg:0,precioRacion:0,udMedida:"",ingrediente:void 0},this.escandallo={nombre:"",numRaciones:0,coste:0,usuario:null,escandalloIngrediente:[]},this.formModificarEscandallo=this.fb.group({nombre:["",i.kI.required],numRaciones:[""],coste:[""]}),this.formCrearEscandalloIngrediente=this.fb.group({cantidad:[""],precioKg:[""],precioRacion:[""],udMedida:[""],ingrediente:[""]}),this.ingredientes=[]}ngOnInit(){this.idEscandallo=parseInt(this.rutaActiva.snapshot.params.idEscandallo),this.service.verEscandallo(this.idEscandallo).subscribe(t=>{null==t||(this.escandallo=t,this.formModificarEscandallo.controls.coste.setValue(this.escandallo.coste),this.formModificarEscandallo.controls.nombre.setValue(this.escandallo.nombre),this.formModificarEscandallo.controls.numRaciones.setValue(this.escandallo.numRaciones),this.listaEscandalloIngrediente=t.escandalloIngrediente)})}modificarEscandallo(){this.escandallo={idEscandallo:this.idEscandallo,nombre:this.formModificarEscandallo.controls.nombre.value,numRaciones:this.formModificarEscandallo.controls.numRaciones.value,coste:this.formModificarEscandallo.controls.coste.value,usuario:this.sesion.usuario,escandalloIngrediente:this.listaEscandalloIngrediente},this.service.modificarEscandallo(this.escandallo).subscribe(t=>{console.log(t)}),this.router.navigateByUrl("")}crearEscandalloIngrediente(){this.serviceIngrediente.seleccionarIngrediente(this.formCrearEscandalloIngrediente.controls.ingrediente.value).subscribe(t=>{this.escandalloIngrediente={ingrediente:t,cantidad:this.formCrearEscandalloIngrediente.controls.cantidad.value,udMedida:this.formCrearEscandalloIngrediente.controls.udMedida.value,precioKg:this.formCrearEscandalloIngrediente.controls.precioKg.value,precioRacion:this.formCrearEscandalloIngrediente.controls.precioRacion.value},this.listaEscandalloIngrediente.push(this.escandalloIngrediente),this.formCrearEscandalloIngrediente.controls.cantidad.setValue(""),this.formCrearEscandalloIngrediente.controls.udMedida.setValue(""),this.formCrearEscandalloIngrediente.controls.precioKg.setValue(""),this.formCrearEscandalloIngrediente.controls.precioRacion.setValue("")}),console.log(this.listaEscandalloIngrediente)}borrarEscandalloIngrediente(t){this.listaEscandalloIngrediente=this.listaEscandalloIngrediente.filter(o=>o.ingrediente?.nombreIngrediente!==t)}listarIngredientes(t){setTimeout(()=>{console.log(t.target.value),this.serviceIngrediente.buscarIngrediente(t.target.value).subscribe(o=>{this.ingredientes=o})},800)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.B),e.Y36(c.F0),e.Y36(g.m),e.Y36(p.v),e.Y36(i.qu),e.Y36(c.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-update-escandallos"]],decls:61,vars:4,consts:[[1,"get-in-touch"],[1,"title"],["needs-validation","",1,"contact-form","row",3,"formGroup","ngSubmit"],[1,"form-field","col-lg-6"],["id","nombre","formControlName","nombre","type","text","required","",1,"input-text","js-input"],["for","nombre",1,"label"],["id","numRaciones","formControlName","numRaciones","type","number","required","",1,"input-text","js-input"],["for","numRaciones",1,"label"],[1,"dropdown-content","d-block"],["needs-validation","",1,"d-flex",3,"formGroup"],[1,"mt-3","form-field","col-lg-4","p-2"],["type","text","placeholder","Buscar","id","buscador",1,"input-text","js_input",3,"keyup"],["name","lista","formControlName","ingrediente","id","lista",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],[1,"mt-3","form-field","col-lg-2","p-3"],["type","number","id","cantidad","formControlName","cantidad",1,"input-text","js_input"],["for","cantidad",1,"",2,"font-size","18px"],["type","text","placeholder","gr, kg, l, cl, ml","id","udMedida","formControlName","udMedida",1,"input-text","js_input"],["for","udMedida",1,"",2,"font-size","18px"],["type","number","id","precioKg","formControlName","precioKg",1,"input-text","js_input"],["for","precioKg",1,"",2,"font-size","18px"],["type","number","id","precioRacion","formControlName","precioRacion",1,"input-text","js_input"],["for","precioRacion",1,"",2,"font-size","18px"],[1,"btn","btn-dark","mt-3","form-field","p-3",3,"click"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["id","coste","formControlName","coste","type","number",1,"input-text","js-input"],["for","coste",1,"",2,"font-size","18px"],[1,"form-field","col-lg-12"],["type","submit",1,"submit-btn"],[3,"value"],["scope","row"],[1,"btn","btn-warning",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Modifica tu Escandallo"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return o.modificarEscandallo()}),e.TgZ(4,"div",3),e._UZ(5,"input",4),e.TgZ(6,"label",5),e._uU(7,"Nombre"),e.qZA()(),e.TgZ(8,"div",3),e._UZ(9,"input",6),e.TgZ(10,"label",7),e._uU(11,"N\xfamero de Raciones"),e.qZA()(),e.TgZ(12,"div",8)(13,"form",9)(14,"div",10)(15,"input",11),e.NdJ("keyup",function(l){return o.listarIngredientes(l)}),e.qZA(),e.TgZ(16,"select",12)(17,"option"),e._uU(18,"Ingredientes disponibles:"),e.qZA(),e.YNc(19,x,2,2,"option",13),e.qZA()(),e.TgZ(20,"div",14),e._UZ(21,"input",15),e.TgZ(22,"label",16),e._uU(23,"Cantidad"),e.qZA()(),e.TgZ(24,"div",14),e._UZ(25,"input",17),e.TgZ(26,"label",18),e._uU(27,"Unidad de Medida"),e.qZA()(),e.TgZ(28,"div",14),e._UZ(29,"input",19),e.TgZ(30,"label",20),e._uU(31,"Precio Kg"),e.qZA()(),e.TgZ(32,"div",14),e._UZ(33,"input",21),e.TgZ(34,"label",22),e._uU(35,"Precio Raci\xf3n"),e.qZA()(),e.TgZ(36,"div")(37,"button",23),e.NdJ("click",function(){return o.crearEscandalloIngrediente()}),e._uU(38,"Agregar Ingrediente"),e.qZA()()(),e.TgZ(39,"table",24)(40,"thead")(41,"tr")(42,"th",25),e._uU(43,"Ingrediente"),e.qZA(),e.TgZ(44,"th",25),e._uU(45,"Cantidad"),e.qZA(),e.TgZ(46,"th",25),e._uU(47,"Unidad de medida"),e.qZA(),e.TgZ(48,"th",25),e._uU(49,"Precio Kg"),e.qZA(),e.TgZ(50,"th",25),e._uU(51,"Precio Raci\xf3n"),e.qZA()()(),e.TgZ(52,"tbody"),e.YNc(53,v,14,5,"tr",26),e.qZA()()(),e.TgZ(54,"div",3),e._UZ(55,"input",27),e.TgZ(56,"label",28),e._uU(57,"Coste total"),e.qZA()(),e.TgZ(58,"div",29)(59,"button",30),e._uU(60,"Modificar Escandallo"),e.qZA()()()()),2&t&&(e.xp6(3),e.Q6J("formGroup",o.formModificarEscandallo),e.xp6(10),e.Q6J("formGroup",o.formCrearEscandalloIngrediente),e.xp6(6),e.Q6J("ngForOf",o.ingredientes),e.xp6(34),e.Q6J("ngForOf",o.listaEscandalloIngrediente))},dependencies:[u.sg,i._Y,i.YN,i.Kr,i.Fj,i.wV,i.EJ,i.JJ,i.JL,i.Q7,i.sg,i.u],styles:[".get-in-touch[_ngcontent-%COMP%]{max-width:800px;margin:50px auto;position:relative}.get-in-touch[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;text-transform:uppercase;letter-spacing:3px;font-size:1.5em;line-height:48px;padding-bottom:10px;color:#319ecd}.contact-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{position:relative;margin:20px 0}.contact-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]{display:block;width:100%;height:36px;border-width:0 0 2px 0;border-color:#3873d2;font-size:18px;line-height:26px;font-weight:400}.contact-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]:focus{outline:none}.contact-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]:focus + .label[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   .input-text.not-empty[_ngcontent-%COMP%] + .label[_ngcontent-%COMP%]{transform:translateY(-24px)}.contact-form[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:absolute;left:20px;bottom:25px;font-size:18px;line-height:26px;font-weight:400;color:#000;cursor:text;transition:transform .2s ease-in-out}.contact-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{display:inline-block;background-color:#000;background-image:linear-gradient(125deg,#d9e97d,#2f82c5);color:#fff;text-transform:uppercase;letter-spacing:2px;font-size:16px;padding:8px 16px;border:none;width:300px;cursor:pointer;border-radius:10px}"]}),n})()},{path:"crearEscandallo",component:(()=>{class n{ngOnInit(){this.serviceIngrediente.listaIngredientes().subscribe(t=>{})}constructor(t,o,a,l,d){this.serviceIngrediente=t,this.router=o,this.service=a,this.sesion=l,this.fb=d,this.escandallo={nombre:"",numRaciones:0,coste:0,usuario:null,escandalloIngrediente:[]},this.listaEscandalloIngrediente=[],this.escandalloIngrediente={id:0,cantidad:0,precioKg:0,precioRacion:0,udMedida:"",escandallo:void 0,ingrediente:void 0},this.formCrearEscandallo=this.fb.group({nombre:["",i.kI.required],numRaciones:[""],coste:[""]}),this.formCrearEscandalloIngrediente=this.fb.group({cantidad:[""],precioKg:[""],precioRacion:[""],udMedida:[""],ingrediente:[""]}),this.ingredientes=[]}crearEscandallo(){this.escandallo={nombre:this.formCrearEscandallo.controls.nombre.value,numRaciones:this.formCrearEscandallo.controls.numRaciones.value,coste:this.formCrearEscandallo.controls.coste.value,usuario:this.sesion.usuario,escandalloIngrediente:this.listaEscandalloIngrediente},this.service.crearEscandallo(this.escandallo).subscribe(t=>{console.log(t)}),this.router.navigateByUrl("")}crearEscandalloIngrediente(){this.serviceIngrediente.seleccionarIngrediente(this.formCrearEscandalloIngrediente.controls.ingrediente.value).subscribe(t=>{this.escandalloIngrediente={ingrediente:t,cantidad:this.formCrearEscandalloIngrediente.controls.cantidad.value,udMedida:this.formCrearEscandalloIngrediente.controls.udMedida.value,precioKg:this.formCrearEscandalloIngrediente.controls.precioKg.value,precioRacion:this.formCrearEscandalloIngrediente.controls.precioRacion.value},this.listaEscandalloIngrediente.push(this.escandalloIngrediente),this.formCrearEscandalloIngrediente.controls.ingrediente.setValue(""),this.formCrearEscandalloIngrediente.controls.cantidad.setValue(""),this.formCrearEscandalloIngrediente.controls.udMedida.setValue(""),this.formCrearEscandalloIngrediente.controls.precioKg.setValue(""),this.formCrearEscandalloIngrediente.controls.precioRacion.setValue("")}),console.log(this.listaEscandalloIngrediente)}borrarEscandalloIngrediente(t){this.listaEscandalloIngrediente=this.listaEscandalloIngrediente.filter(o=>o.ingrediente?.nombreIngrediente!==t)}listarIngredientes(t){setTimeout(()=>{console.log(t.target.value),this.serviceIngrediente.buscarIngrediente(t.target.value).subscribe(o=>{this.ingredientes=o})},800)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.B),e.Y36(c.F0),e.Y36(g.m),e.Y36(p.v),e.Y36(i.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-create-escandallo"]],decls:61,vars:4,consts:[[1,"get-in-touch"],[1,"title"],["needs-validation","",1,"contact-form","row",3,"formGroup","ngSubmit"],[1,"form-field","col-lg-6"],["id","nombre","formControlName","nombre","type","text","required","",1,"input-text","js-input"],["for","nombre",1,"label"],["id","numRaciones","formControlName","numRaciones","type","number","required","",1,"input-text","js-input"],["for","numRaciones",1,"label"],[1,"dropdown-content","d-block"],["needs-validation","",1,"d-flex",3,"formGroup"],[1,"mt-3","form-field","col-lg-4","p-2"],["type","text","placeholder","Buscar","id","buscador",1,"input-text","js_input",3,"keyup"],["name","lista","formControlName","ingrediente","id","lista",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],[1,"mt-3","form-field","col-lg-2","p-3"],["type","number","id","cantidad","formControlName","cantidad",1,"input-text","js_input"],["for","cantidad",1,"",2,"font-size","18px"],["type","text","placeholder","gr, kg, l, cl, ml","id","udMedida","formControlName","udMedida",1,"input-text","js_input"],["for","udMedida",1,"",2,"font-size","18px"],["type","number","id","precioKg","formControlName","precioKg",1,"input-text","js_input"],["for","precioKg",1,"",2,"font-size","18px"],["type","number","id","precioRacion","formControlName","precioRacion",1,"input-text","js_input"],["for","precioRacion",1,"",2,"font-size","18px"],[1,"btn","btn-dark","mt-3","form-field","p-3",3,"click"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["id","coste","formControlName","coste","type","number",1,"input-text","js-input"],["for","coste",1,"",2,"font-size","18px"],[1,"form-field","col-lg-12"],["type","submit",1,"submit-btn"],[3,"value"],["scope","row"],[1,"btn","btn-warning",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Crea tu Escandallo"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return o.crearEscandallo()}),e.TgZ(4,"div",3),e._UZ(5,"input",4),e.TgZ(6,"label",5),e._uU(7,"Nombre"),e.qZA()(),e.TgZ(8,"div",3),e._UZ(9,"input",6),e.TgZ(10,"label",7),e._uU(11,"N\xfamero de Raciones"),e.qZA()(),e.TgZ(12,"div",8)(13,"form",9)(14,"div",10)(15,"input",11),e.NdJ("keyup",function(l){return o.listarIngredientes(l)}),e.qZA(),e.TgZ(16,"select",12)(17,"option"),e._uU(18,"Ingredientes disponibles:"),e.qZA(),e.YNc(19,I,2,2,"option",13),e.qZA()(),e.TgZ(20,"div",14),e._UZ(21,"input",15),e.TgZ(22,"label",16),e._uU(23,"Cantidad"),e.qZA()(),e.TgZ(24,"div",14),e._UZ(25,"input",17),e.TgZ(26,"label",18),e._uU(27,"Unidad de Medida"),e.qZA()(),e.TgZ(28,"div",14),e._UZ(29,"input",19),e.TgZ(30,"label",20),e._uU(31,"Precio Kg"),e.qZA()(),e.TgZ(32,"div",14),e._UZ(33,"input",21),e.TgZ(34,"label",22),e._uU(35,"Precio Raci\xf3n"),e.qZA()(),e.TgZ(36,"div")(37,"button",23),e.NdJ("click",function(){return o.crearEscandalloIngrediente()}),e._uU(38,"Agregar Ingrediente"),e.qZA()()(),e.TgZ(39,"table",24)(40,"thead")(41,"tr")(42,"th",25),e._uU(43,"Ingrediente"),e.qZA(),e.TgZ(44,"th",25),e._uU(45,"Cantidad"),e.qZA(),e.TgZ(46,"th",25),e._uU(47,"Unidad de medida"),e.qZA(),e.TgZ(48,"th",25),e._uU(49,"Precio Kg"),e.qZA(),e.TgZ(50,"th",25),e._uU(51,"Precio Raci\xf3n"),e.qZA()()(),e.TgZ(52,"tbody"),e.YNc(53,M,14,5,"tr",26),e.qZA()()(),e.TgZ(54,"div",3),e._UZ(55,"input",27),e.TgZ(56,"label",28),e._uU(57,"Coste total"),e.qZA()(),e.TgZ(58,"div",29)(59,"button",30),e._uU(60,"Registrar Escandallo"),e.qZA()()()()),2&t&&(e.xp6(3),e.Q6J("formGroup",o.formCrearEscandallo),e.xp6(10),e.Q6J("formGroup",o.formCrearEscandalloIngrediente),e.xp6(6),e.Q6J("ngForOf",o.ingredientes),e.xp6(34),e.Q6J("ngForOf",o.listaEscandalloIngrediente))},dependencies:[u.sg,i._Y,i.YN,i.Kr,i.Fj,i.wV,i.EJ,i.JJ,i.JL,i.Q7,i.sg,i.u],styles:[".get-in-touch[_ngcontent-%COMP%]{max-width:800px;margin:50px auto;position:relative}.get-in-touch[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;text-transform:uppercase;letter-spacing:3px;font-size:1.5em;line-height:48px;padding-bottom:10px;color:#319ecd}.contact-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{position:relative;margin:20px 0}.contact-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]{display:block;width:100%;height:36px;border-width:0 0 2px 0;border-color:#3873d2;font-size:18px;line-height:26px;font-weight:400}.contact-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]:focus{outline:none}.contact-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]:focus + .label[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   .input-text.not-empty[_ngcontent-%COMP%] + .label[_ngcontent-%COMP%]{transform:translateY(-24px)}.contact-form[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:absolute;left:20px;bottom:25px;font-size:18px;line-height:26px;font-weight:400;color:#000;cursor:text;transition:transform .2s ease-in-out}.contact-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{display:inline-block;background-color:#000;background-image:linear-gradient(125deg,#d9e97d,#2f82c5);color:#fff;text-transform:uppercase;letter-spacing:2px;font-size:16px;padding:8px 16px;border:none;width:300px;cursor:pointer;border-radius:10px}"]}),n})()},{path:"**",redirectTo:""}]}];let q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,c.Bz.forChild(U),c.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,i.UX,h.JF,q,c.Bz]}),n})()}}]);