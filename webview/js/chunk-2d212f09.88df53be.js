(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d212f09"],{ab0b:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n={class:"row"},i={class:"col"},o=Object(a["n"])(" Выбор врача "),r=["onClick"],b={class:"col-8"},s={class:"col-3"};function j(e,t,c,j,l,O){var u=Object(a["Q"])("text-rows"),d=Object(a["Q"])("typography"),p=Object(a["Q"])("default-layout"),f=Object(a["R"])("ripple");return Object(a["H"])(),Object(a["h"])(p,null,{default:Object(a["ab"])((function(){return[e.specialities.specialities.isLoading?(Object(a["H"])(),Object(a["h"])(u,{key:0})):(Object(a["H"])(),Object(a["j"])(a["a"],{key:1},[Object(a["k"])("div",n,[Object(a["k"])("div",i,[Object(a["o"])(d,{tag:"h1",variant:"large-title-bolder"},{default:Object(a["ab"])((function(){return[o]})),_:1})])]),(Object(a["H"])(!0),Object(a["j"])(a["a"],null,Object(a["O"])(e.specialities.specialities.data,(function(t){var c=t.id,n=t.info,i=t.price,o=t.productId,j=t.specialityName;return Object(a["bb"])((Object(a["H"])(),Object(a["j"])("div",{onClick:function(t){return e.openDoctorsBySpecs({id:c,info:n,price:i,productId:o,specialityName:j})},class:Object(a["x"])("\n          row\n          justify-between\n          items-center\n          q-my-md\n          q-py-sm\n          relative-position\n        "),key:c},[Object(a["k"])("div",b,[Object(a["o"])(d,{variant:"body-1-regular"},{default:Object(a["ab"])((function(){return[Object(a["n"])(Object(a["V"])(j),1)]})),_:2},1024),Object(a["o"])(d,{color:"base-color-6",tag:"span",variant:"subheadline-regular"},{default:Object(a["ab"])((function(){return[Object(a["n"])(Object(a["V"])(n),1)]})),_:2},1024)]),Object(a["k"])("div",s,[Object(a["o"])(d,{class:"text-right",variant:"body-1-bold"},{default:Object(a["ab"])((function(){return[Object(a["n"])(Object(a["V"])(i)+" ₽ ",1)]})),_:2},1024)])],8,r)),[[f]])})),128))],64))]})),_:1})}var l=c("d4ec"),O=c("bee2"),u=c("257e"),d=c("262e"),p=c("2caf"),f=c("ade3"),y=(c("99af"),c("9ab4")),v=c("ce1f"),h=c("1a77"),k=c("3d16"),w=c("9e22"),m=c("225f"),g=c("af12"),S=function(e){Object(d["a"])(c,e);var t=Object(p["a"])(c);function c(){var e;Object(l["a"])(this,c);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return e=t.call.apply(t,[this].concat(n)),Object(f["a"])(Object(u["a"])(e),"specialities",Object(v["d"])(h["u"])),Object(f["a"])(Object(u["a"])(e),"consultationInfo",Object(v["d"])(h["f"])),e}return Object(O["a"])(c,[{key:"openDoctorsBySpecs",value:function(e){var t=this.consultationInfo.consultationInfoStore.saveSpecialityToStoreAndBrowserStorage,c=e.id,a=e.specialityName;t(e),this.$router.push({name:k["a"].DOCTORS_BY_SPECS,params:{specialityId:c,specialityName:a}})}}]),c}(v["b"]);S=Object(y["a"])([Object(v["a"])({components:{RCard:w["d"],RCardActions:w["e"],RCardSection:w["f"],RImg:m["f"],TextRows:g["j"]}})],S);var C=S,I=c("6b0d"),R=c.n(I);const _=R()(C,[["render",j]]);t["default"]=_}}]);
//# sourceMappingURL=chunk-2d212f09.88df53be.js.map