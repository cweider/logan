if(typeof fleegix=="undefined"){var fleegix={}}if(typeof $=="undefined"){$=function(A){return document.getElementById(A)}}var $elem=function(A,E){var C=E||{};var B=document.createElement(A);for(var D in C){B[D]=C[D]}return B};var $text=function(A){return document.createTextNode(A)};fleegix.bind=function(B,A){return function(){B.apply(A,arguments)}};fleegix.extend=function(A,B){return function(){A.apply(this,arguments);A.prototype.constructor.apply(this,arguments);B.apply(this,arguments);this.superClass=A;this.subClass=B}};fleegix.mixin=function(F,C,D){var B;if(typeof C=="function"){B=new C()}else{B=C}var A={};for(var E in B){if(typeof A[E]=="undefined"||baseObjj[E]!=B[E]){if(D&&typeof B[E]=="object"&&B[E]!==null&&!B[E] instanceof Array){fleegix.mixin(F[E],B[E],D)}else{F[E]=B[E]}}}return F};fleegix.clone=function(C){if(typeof C=="object"){var A;if(typeof C.constructor=="function"){A=new C.constructor()}else{A={}}for(var B in C){if(typeof C[B]=="object"&&C[B]!==null){A[B]=fleegix.clone(C[B])}else{A[B]=C[B]}}}else{A=C}return A};if(typeof navigator!="undefined"){fleegix.ua=new function(){var C=navigator.userAgent;var A=function(F,G){var E=G.exec(F);if(E&&E.length>1){E=E[1].substr(0,1);if(!isNaN(E)){return parseInt(E)}else{return null}}return null};this.isWebKit=C.indexOf("AppleWebKit")>-1;this.isKHTML=C.indexOf("KHTML")>-1;this.isGecko=C.indexOf("Gecko")>-1&&!this.isWebKit&&!this.isKHTML;this.isOpera=C.indexOf("Opera")>-1;this.isChrome=C.indexOf("Chrome")>-1;this.isSafari=C.indexOf("Safari")>-1&&!this.isChrome;this.isFF=C.indexOf("Firefox")>-1||C.indexOf("Iceweasel")>-1||C.indexOf("IceCat")>-1;this.isFirefox=this.isFF;this.isIE=C.indexOf("MSIE ")>-1&&!this.isOpera;this.isIPhone=C.indexOf("iPhone")>-1;this.isMobile=this.isIPhone||C.indexOf("Opera Mini")>-1;this.isMac=C.indexOf("Mac")>-1;this.isUnix=C.indexOf("Linux")>-1||C.indexOf("BSD")>-1||C.indexOf("SunOS")>-1;this.isLinux=C.indexOf("Linux")>-1;this.isWindows=C.indexOf("Windows")>-1||C.indexOf("Win");this.majorVersion=null;var B={FF:/Firefox\/([0-9\.]*)/,Safari:/Version\/([0-9\.]*) /,IE:/MSIE ([0-9\.]*);/,Opera:/Opera\/([0-9\.]*) /,Chrome:/Chrome\/([0-9\.]*)/};for(var D in B){if(this["is"+D]){this.majorVersion=A(C,B[D])}}for(var D in this){fleegix[D]=this[D]}}}fleegix.xhr=new function(){this.maxXhrs=5;this.lastReqId=0;this.debug=false;this.defaultTimeoutSeconds=300;this.useDefaultErrHandlerForSync=true;var N={TXT:"text",XML:"xml",OBJ:"object",JSON:"json"};this.formats=N;this.contentTypes={"application/json":N.JSON,"text/json":N.JSON,"application/xml":N.XML,"text/xml":N.XML};this.get=function(){var Y={};var T=null;var V=Array.prototype.slice.apply(arguments);if(typeof V[0]=="function"){Y.async=true;T=V.shift()}else{Y.async=false}var U=V.shift();if(typeof V[0]=="object"){var W=V.shift();for(var X in W){Y[X]=W[X]}}else{Y.format=V.shift()||"text"}Y.success=T;Y.url=U;return this.doReq(Y)};this.doGet=function(){return this.get.apply(this,arguments)};this.post=function(){var Z={};var T=null;var V=Array.prototype.slice.apply(arguments);if(typeof V[0]=="function"){Z.async=true;T=V.shift()}else{Z.async=false}var U=V.shift();var X=V.shift();if(typeof V[0]=="object"){var W=V.shift();for(var Y in W){Z[Y]=W[Y]}}else{Z.format=V.shift()||"text"}Z.success=T;Z.url=U;Z.data=X;Z.method="POST";return this.doReq(Z)};this.doPost=function(){return this.post.apply(this,arguments)};this.doReq=function(T){return this.send(T)};this.send=function(X){var U=X||{};var T=new fleegix.xhr.Request();var W=null;if(U.contentType&&this.contentTypes[U.contentType]){U.format=this.contentTypes[U.contentType]}for(var V in U){if(U.hasOwnProperty(V)){T[V]=U[V]}}T.method=T.method.toUpperCase();T.id=this.lastReqId;this.lastReqId++;if(T.async){if(K.length){W=K.shift()}else{if(G.length<this.maxXhrs){W=D()}}if(W!==null){F(T,W)}else{if(T.uber){J.unshift(T)}else{J.push(T)}}return T.id}else{return F(T)}};this.abort=function(V){var U=E[V];var T=G[U.xhrId];if(T){T.onreadystatechange=function(){};T.abort();U.aborted=true;P(U);return true}else{return false}};this.isReqSuccessful=function(U){var T=U.status;if(!T){return false}if(document.all&&T==1223){T=204}if((T>199&&T<300)||T==304){return true}else{return false}};var L=this;var R=null;var M;var G=[];var J=[];var K=[];var E={};var O=[];var C=null;var I=null;var A=null;var D=function(W){var V=["Msxml2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","Microsoft.XMLHTTP"];var T=null;if(window.XMLHttpRequest){T=new XMLHttpRequest()}else{if(window.ActiveXObject){if(R){T=new ActiveXObject(R)}else{for(var U=0;U<V.length;U++){try{T=new ActiveXObject(V[U]);R=V[U];break}catch(Y){}}}}}if(T){if(W){return T}else{G.push(T);var X=G.length-1;return X}}else{throw new Error("Could not create XMLHttpRequest object.")}};var F=function(b,c){var Y=null;var Z=null;var T="";var W=null;if(b.async){Y=c;Z=G[Y];E[b.id]=b;O.unshift(b);b.xhrId=Y}else{if(!C){C=D(true)}Z=C;I=b}if(b.preventCache){var U=new Date().getTime();T=b.url.indexOf("?")>-1?b.url+"&preventCache="+U:b.url+"?preventCache="+U}else{T=b.url}if(document.all){Z.abort()}if(b.username&&b.password){Z.open(b.method,T,b.async,b.username,b.password)}else{Z.open(b.method,T,b.async)}if(b.mimeType&&navigator.userAgent.indexOf("MSIE")==-1){Z.overrideMimeType(b.mimeType)}var V=b.headers;for(var X in V){if(V.hasOwnProperty(X)){Z.setRequestHeader(X,V[X])}}if(b.method=="POST"||b.method=="PUT"){b.data=b.data||b.dataPayload;if(!b.data){b.data=""}if(typeof b.headers["Content-Type"]=="undefined"){Z.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}}Z.send(b.data);if(A===null){A=setTimeout(B,10)}if(!b.async){var a=S(Z,b);I=null;if(O.length){A=setTimeout(B,10)}else{A=null}return a}};var B=function(){var T=O;var Y=new Date().getTime();if(I!==null){return }else{for(var V=0;V<T.length;V++){var W=T[V];var U=G[W.xhrId];var X=((Y-W.startTime)>(W.timeoutSeconds*1000));switch(true){case (W.aborted||!U.readyState):O.splice(V,1);break;case X:O.splice(V,1);Q(W);break;case (U.readyState==4):O.splice(V,1);S.call(L,U,W);break}}}clearTimeout(A);if(O.length){A=setTimeout(B,10)}else{A=null}};var S=function(T,U){var W;switch(U.format){case N.JSON:if(typeof JSON!="undefined"){W=JSON.parse(T.responseText)}else{if(typeof fleegix.json=="undefined"){throw new Error("Need fleegix.json module to parse JSON.")}else{W=fleegix.json.parse(W)}}break;case N.XML:if(U.xmlDocFromResponseText&&typeof fleegix.xml!="undefined"){W=fleegix.xml.createDoc(T.responseText)}else{W=T.responseXML}break;case N.OBJ:W=T;break;case N.TXT:default:W=T.responseText;break}if(U.all){U.all(W,U.id)}else{try{switch(true){case L.isReqSuccessful(T):if(U.async){if(!U.success){throw new Error("No response handler defined for this request")}else{window.setTimeout(function(){U.success(W,U.id)},0)}}else{return W}break;case (T.status===0):if(L.debug){throw new Error("XMLHttpRequest HTTP status is zero.")}break;case (T.status==M):if(L.debug){throw new Error("XMLHttpRequest HTTP status not set.")}break;default:if(!U.async&&!L.useDefaultErrHandlerForSync){return W}else{if(U.error){U.error(W,U.id)}else{H(T)}}break}}catch(V){throw V}}if(U.async){P(U)}return true};var Q=function(T){if(L.abort.apply(L,[T.id])){if(typeof T.timeout=="function"){T.timeout()}else{alert("XMLHttpRequest to "+T.url+" timed out.")}}};var P=function(U){delete E[U.id];if(J.length){var T=J.shift();T.startTime=new Date().getTime();F(T,U.xhrId)}else{K.push(U.xhrId)}};var H=function(U){var T;try{T=window.open("","errorWin");T.document.body.innerHTML=U.responseText}catch(V){alert("An error occurred, but the error message cannot be displayed because of your browser's pop-up blocker.\nPlease allow pop-ups from this Web site.")}}};fleegix.xhr.Request=function(){this.id=0;this.xhrId=null;this.url=null;this.status=null;this.statusText="";this.method="GET";this.async=true;this.data=null;this.readyState=null;this.responseText=null;this.responseXML=null;this.success=null;this.error=null;this.all=null;this.timeout=null;this.contentType=null;this.format=fleegix.xhr.formats.TXT;this.xmlDocFromResponseText=false;this.mimeType=null;this.username="";this.password="";this.headers=[];this.preventCache=false;this.startTime=new Date().getTime();this.timeoutSeconds=fleegix.xhr.defaultTimeoutSeconds;this.uber=false;this.aborted=false};fleegix.xhr.Request.prototype.setRequestHeader=function(B,A){this.headers.push(B+": "+A)};fleegix.url=new function(){var E=this;var D="\\?|;";var C=new RegExp(D);var B=new RegExp("("+D+")");var A=function(L,M,F,I){var K=B.exec(M);var H;var G;var N;var J;var O="";if(K&&K.length>0){H=K[0]}if(H){G=E.getBase(M);N=E.getQS(M)}else{N=M}J=E.qsToObject(N,{arrayizeMulti:true});if(L=="set"){J[F]=I}else{delete J[F]}if(G){O=G+H}O+=E.objectToQS(J);return O};this.qsToObject=function(N,H){var F=H||{};var M={};var O=F.arrayizeMulti||false;if(N){var L=N.split("&");for(var K=0;K<L.length;K++){var J=L[K].split("=");var G=J[0];var I=decodeURIComponent(J[1]);if(typeof M[G]!="undefined"&&O){if(typeof M[G]=="string"){M[G]=[M[G]]}M[G].push(I)}else{M[G]=I}}}return M};this.objectToQS=function(K,G){var F=G||{};var N="";var M=F.stripTags?/<[^>]*>/g:null;for(var H in K){var R="";var P=K[H];if(P!=undefined){if(P.length&&typeof P!="string"){var Q="";if(F.collapseMulti){Q=",";N+=H+"="}else{Q="&"}for(var I=0;I<P.length;I++){R=F.stripTags?P[I].replace(M,""):P[I];R=(!F.collapseMulti)?H+"="+encodeURIComponent(R):encodeURIComponent(R);N+=R+Q}N=N.substr(0,N.length-1)}else{R=F.stripTags?P.replace(M,""):P;N+=H+"="+encodeURIComponent(R)}N+="&"}else{if(F.includeEmpty){N+=H+"=&"}}}if(F.deCamelizeParams){if(!fleegix.string){throw new Error("deCamelize option depends on fleegix.string module.")}var L=N.split("&");var O;N="";for(var J=0;J<L.length;J++){O=L[J].split("=");if(O[0]){N+=fleegix.string.deCamelize(O[0])+"="+O[1]+"&"}}}N=N.substr(0,N.length-1);return N};this.objectToQs=this.objectToQS;this.getQSParam=function(L,F,K){var J=null;var I=C.test(L)?E.getQS(L):L;var H=K||{};if(I){var G=E.qsToObject(I,H);J=G[F]}return J};this.getQsParam=this.getQSParam;this.setQSParam=function(H,F,G){return A("set",H,F,G)};this.setQsParam=this.setQSParam;this.removeQSParam=function(G,F){return A("remove",G,F,null)};this.removeQsParam=this.removeQSParam;this.getQS=function(F){return F.split(C)[1]};this.getQs=this.getQS;this.getBase=function(F){return F.split(C)[0]};this.getFileExtension=function(H){var F=null;var G=H.split(".");if(G.length>1){F=G[G.length-1]}return F}};fleegix.uri=new function(){this.getParamHash=fleegix.url.qsToObject;this.getParam=function(A,C){var B=C||fleegix.url.getQS(document.location.href);return fleegix.url.getQSParam(B,A)};this.setParam=function(A,D,C){var B=C||fleegix.url.getQS(document.location.href);return fleegix.url.setQSParam(B,A,D)};this.getQuery=fleegix.url.getQS;this.getBase=fleegix.url.getBase};fleegix.string=new function(){var D=/^\s+/;var A=/\s+$/;var C=/^\s+|\s+$/g;var B={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"};var F=function(G){return function(J){s=J;var H,K;for(var I in B){H=G=="to"?I:B[I];K=G=="to"?B[I]:I;s=s.replace(new RegExp(H,"gm"),K)}return s}};var E=function(G){return function(I){var H="";for(var J in B){H+=G=="to"?J:B[J];H+="|"}H=H.substr(0,H.length-1);H=new RegExp(H,"gm");return H.test(I)}};this.escapeXML=F("to");this.unescapeXML=F("from");this.needsEscape=E("to");this.needsUnescape=E("from");this.toArray=function(I){var G=[];for(var H=0;H<I.length;H++){G[H]=I.substr(H,1)}return G};this.reverse=function(G){return this.toArray(G).reverse().join("")};this.ltrim=function(I,H){var G=H?new RegExp("^"+H+"+"):D;return I.replace(G,"")};this.rtrim=function(I,H){var G=H?new RegExp(H+"+$"):A;return I.replace(G,"")};this.trim=function(I,H){var G=H?new RegExp("^"+H+"+|"+H+"+$","g"):C;return I.replace(G,"")};this.lpad=function(J,I,H){var G=J;while(G.length<H){G=I+G}return G};this.rpad=function(J,I,H){var G=J;while(G.length<H){G=G+I}return G};this.toLowerCaseWithUnderscores=function(G){return G.replace(/([A-Z]+)/g,"_$1").toLowerCase().replace(/^_/,"")};this.deCamelize=function(G){return this.toLowerCaseWithUnderscores(G)};this.toCamelCase=function(G){return G.replace(/_[a-z]{1}/g,function(H){return H.replace("_","").toUpperCase()})};this.camelize=function(G){return this.toCamelCase(G)};this.capitalize=function(G){return G.substr(0,1).toUpperCase()+G.substr(1)}};fleegix.json=new function(){var _cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var _escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var _meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\"":"\\\"","\\":"\\\\"};var _quote=function(str){_escapable.lastIndex=0;return _escapable.test(str)?"\""+str.replace(_escapable,function(a){var c=_meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+"\"":"\""+str+"\""};this.serialize=function(obj){var str="";switch(typeof obj){case"object":switch(true){case obj===null:return"null";break;case obj instanceof Array:for(var i=0;i<obj.length;i++){if(str){str+=","}str+=fleegix.json.serialize(obj[i])}return"["+str+"]";break;case (fleegix.isFF&&obj instanceof DOMException):str+="\""+obj.toString()+"\"";break;case typeof obj.toString!="undefined":for(var i in obj){if(str){str+=","}str+="\""+i+"\":";if(typeof obj[i]=="undefined"){str+="\"undefined\""}else{str+=fleegix.json.serialize(obj[i])}}return"{"+str+"}";break}return str;case"unknown":case"undefined":case"function":return"\"undefined\"";case"string":str+=_quote(obj);return str;default:return String(obj)}};this.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}_cx.lastIndex=0;if(_cx.test(text)){text=text.replace(_cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON not parseable.")}};fleegix.fx=new function(){function B(G,D,H){var F={};var M=0;var I=0;if(D.blindType=="clip"){M=H=="down"?0:G.offsetHeight;I=H=="down"?G.offsetHeight:0;M=[0,G.offsetWidth,M,0];I=[0,G.offsetWidth,I,0];F.props={clip:[M,I]}}else{if(H=="down"){if(D.endHeight){I=D.endHeight}else{G.style.height="";var J=document.createElement("div");J.position="absolute";J.style.top="-9999999999px";J.style.left="-9999999999px";var K=G.parentNode;var C=K.removeChild(G);J.appendChild(C);document.body.appendChild(J);I=C.offsetHeight;G=J.removeChild(C);var L=document.body.removeChild(J);G.style.height="0px";K.appendChild(G)}M=0}else{M=G.offsetHeight;I=0}F.props={height:[M,I]}}for(var E in D){F[E]=D[E]}F.trans="lightEaseIn";return new fleegix.fx.Effecter(G,F)}function A(F,E,C){var D=C=="in"?0:100;var H=C=="in"?100:0;var I={props:{opacity:[D,H]},trans:"lightEaseIn"};for(var G in E){I[G]=E[G]}return new fleegix.fx.Effecter(F,I)}this.fadeOut=function(E,D){return A(E,D,"out");E.style.visibility="hidden";var C=this.setCssProp(E,"opacity",100)};this.fadeIn=function(E,D){var C=this.setCssProp(E,"opacity",0);E.style.visibility="visible";return A(E,D,"in")};this.blindUp=function(D,C){var E=C||{};E.blindType=E.blindType||"height";return B(D,E,"up")};this.blindDown=function(D,C){var E=C||{};E.blindType=E.blindType||"height";return B(D,E,"down")};this.setCSSProp=function(D,E,C){if(E=="opacity"){if(document.all){D.style.filter="alpha(opacity="+C+")"}else{var F=C/100;D.style.opacity=F}}else{if(E=="clip"||E.toLowerCase().indexOf("color")>-1){D.style[E]=C}else{D.style[E]=document.all?parseInt(C,10)+"px":C+"px"}}return true};this.setCssProp=this.setCSSProp;this.hexPat=/^[#]{0,1}([\w]{1,2})([\w]{1,2})([\w]{1,2})$/;this.hex2rgb=function(G){var C=[];var F=G.match(this.hexPat);if(F){for(var D=1;D<F.length;D++){var E=F[D];E=E.length==1?E+E:E;C.push(parseInt(E,16))}return C}else{throw ("\""+G+"\" not a valid hex value.")}}};fleegix.fx.Effecter=function(B,A){var C=this;this.props=A.props;this.trans=A.trans||"lightEaseIn";this.duration=A.duration||500;this.fps=30;this.startTime=new Date().getTime();this.timeSpent=0;this.doBeforeStart=A.doBeforeStart||null;this.doAfterFinish=A.doAfterFinish||null;this.autoStart=A.autoStart===false?false:true;if(typeof this.transitions[this.trans]!="function"){throw ("\""+this.trans+"\" is not a valid transition.")}this.start=function(){C.id=setInterval(function(){C.doStep.apply(C,[B])},Math.round(1000/C.fps));if(typeof A.doBeforeStart=="function"){C.doBeforeStart()}};if(this.autoStart){this.start()}return this};fleegix.fx.Effecter.prototype.doStep=function(C){var B=new Date().getTime();var D=this.props;if(B<(this.startTime+this.duration)){this.timeSpent=B-this.startTime;for(var A in D){fleegix.fx.setCSSProp(C,A,this.calcCurrVal(A))}}else{for(var A in D){if(A=="clip"){fleegix.fx.setCSSProp(C,A,"rect("+D[A][1].join("px,")+"px)")}else{fleegix.fx.setCSSProp(C,A,D[A][1])}}clearInterval(this.id);if(typeof this.doAfterFinish=="function"){this.doAfterFinish()}}};fleegix.fx.Effecter.prototype.calcCurrVal=function(G){var A=this.props[G][0];var F=this.props[G][1];var I=this.transitions[this.trans];var B;var D;var J;var H;var E;if(G.toLowerCase().indexOf("color")>-1){B=fleegix.fx.hex2rgb(A);D=fleegix.fx.hex2rgb(F);J=[];for(var C=0;C<B.length;C++){H=B[C];E=D[C];J.push(parseInt(I(this.timeSpent,H,(E-H),this.duration),10))}return"rgb("+J.join()+")"}else{if(G=="clip"){B=A;D=F;J=[];for(var C=0;C<B.length;C++){H=B[C];E=D[C];J.push(parseInt(I(this.timeSpent,H,(E-H),this.duration),10))}return"rect("+J.join("px,")+"px)"}else{return I(this.timeSpent,A,(F-A),this.duration)}}};fleegix.fx.Effecter.prototype.transitions={linear:function(B,A,D,C){return D*(B/C)+A},lightEaseIn:function(B,A,D,C){return D*(B/=C)*B+A},lightEaseOut:function(B,A,D,C){return -D*(B/=C)*(B-2)+A},lightEaseInOut:function(B,A,D,C){if((B/=C/2)<1){return D/2*B*B+A}return -D/2*((--B)*(B-2)-1)+A},heavyEaseIn:function(B,A,D,C){return D*(B/=C)*B*B+A},heavyEaseOut:function(B,A,D,C){return D*((B=B/C-1)*B*B+1)+A},heavyEaseInOut:function(B,A,D,C){if((B/=C/2)<1){return D/2*B*B*B+A}return D/2*((B-=2)*B*B+2)+A}};fleegix.form={};fleegix.form.serialize=function(C,B){var A=fleegix.form.toObject(C,B);if(typeof fleegix.url=="undefined"){throw new Error("fleegix.form.serialize depends on the fleegix.url module.")}var D=fleegix.url.objectToQS(A,B);return D};fleegix.form.toObject=function(K,D){var A=D||{};var J={};function H(R,Q){if(R){var P=null;if(typeof R=="string"){P=[];P.push(R)}else{P=R}P.push(Q);return P}else{return Q}}for(var I=0;I<K.elements.length;I++){var F=K.elements[I];if(F.name){var O=F.name.indexOf("[");var C=F.name.indexOf("]");var N="";var B="";var M;var E;if(A.hierarchical&&(O>0)&&(C>2)){N=F.name.substring(0,O);B=F.name.substring(O+1,C);if(typeof J[N]=="undefined"){J[N]={}}M=J[N];E=B}else{M=J;E=F.name}switch(F.type){case"text":case"hidden":case"password":case"textarea":case"select-one":M[E]=F.value;break;case"select-multiple":for(var G=0;G<F.options.length;G++){var L=F.options[G];if(L.selected){M[E]=H(M[E],L.value)}}break;case"radio":if(F.checked){M[E]=F.value}break;case"checkbox":if(F.checked){M[E]=H(M[E],F.value)}break;case"submit":case"reset":case"file":case"image":case"button":if(A.pedantic){M[E]=F.value}break}}}return J};fleegix.form.toHash=fleegix.form.toObject;fleegix.event=new function(){var B=[];var A={};this.compatibilityMode=false;this.listen=function(){var G=arguments[0];var D=arguments[1];var F=this.compatibilityMode;var E={};var H={};if(typeof arguments[2]=="function"){E.method=arguments[2];H=arguments[3]||{}}else{E.context=arguments[2];E.method=arguments[3];H=arguments[4]||{}}if(!G){throw new Error("fleegix.listen called on an object ("+G+") that does not exist.")}if(D=="onmousewheel"){if(window.addEventListener&&typeof G.onmousewheel=="undefined"){G.onmousewheel=null}}var C;if(this.compatibilityMode){if(G[D]&&G._fleegixEventListenReg){C=G._fleegixEventListenReg[D]}else{C=null}}else{C=G[D]?G[D].listenReg:null}if(!C){C={};C.orig={};C.orig.obj=G;C.orig.methName=D;if(G[D]){C.orig.methCode=G[D]}C.after=[];G[D]=function(){var L=F?G._fleegixEventListenReg[D]:G[D].listenReg;if(!L){if(G["_"+D+"_suppressErrors"]){return false}else{throw new Error("Cannot execute handlers for "+G+"  \""+D+"\". Something (likely another JavaScript library) has removed the fleegix.event.listen handler registry.")}}var I=[];for(var K=0;K<arguments.length;K++){I.push(arguments[K])}if(L.orig.methCode){L.orig.methCode.apply(L.orig.obj,I)}var M=null;if(G.attachEvent||G.nodeType||G.addEventListener){if(!I.length){try{switch(true){case !!G.ownerDocument:M=G.ownerDocument.parentWindow.event;break;case !!G.documentElement:M=G.documentElement.ownerDocument.parentWindow.event;break;case !!G.event:M=G.event;break;default:M=window.event;break}}catch(O){M=window.event}}else{M=I[0]}if(M){if(typeof M.target=="undefined"){M.target=M.srcElement}if(typeof M.srcElement=="undefined"){M.srcElement=M.target}if(M.type=="DOMMouseScroll"||M.type=="mousewheel"){if(M.wheelDelta){M.delta=M.wheelDelta/120}else{if(M.detail){M.delta=-M.detail/3}}}I[0]=M}}for(var K=0;K<L.after.length;K++){var J=L.after[K];var N=null;var P=null;if(!J.context){N=J.method;P=window}else{N=J.context[J.method];P=J.context}if(typeof N!="function"){throw (N+" is not an executable function.")}else{N.apply(P,I)}M=I[0];if(J.stopPropagation){this.stopPropagation(M)}if(J.preventDefault){this.preventDefault(M)}}};if(this.compatibilityMode){if(!G._fleegixEventListenReg){G._fleegixEventListenReg={}}G._fleegixEventListenReg[D]=C}else{G[D].listenReg=C}B.push(C);if(D=="onmousewheel"){if(window.addEventListener){G.addEventListener("DOMMouseScroll",G.onmousewheel,false)}}}C.after.push(E);if(this.compatibilityMode){if(!G._fleegixEventListenReg){G._fleegixEventListenReg={}}G._fleegixEventListenReg[D]=C}else{G[D].listenReg=C}};this.unlisten=function(){var H=arguments[0];var E=arguments[1];var D;if(this.compatibilityMode){if(H[E]&&H._fleegixEventListenReg){D=H._fleegixEventListenReg[E]}else{D=null}}else{D=H[E]?H[E].listenReg:null}var C=null;if(!D){return false}for(var F=0;F<D.after.length;F++){var G=D.after[F];if(typeof arguments[2]=="function"){if(G.method==arguments[2]){D.after.splice(F,1);break}}else{if(G.context==arguments[2]&&G.method==arguments[3]){D.after.splice(F,1);break}}}if(this.compatibilityMode){H._fleegixEventListenReg[E]=D}else{H[E].listenReg=D}};this.flush=function(){for(var C=0;C<B.length;C++){var D=B[C];removeObj=D.orig.obj;removeMethod=D.orig.methName;removeObj[removeMethod]=null}};this.subscribe=function(C,D,E){if(!D){return }if(!A[C]){A[C]={};A[C].audience=[]}else{this.unsubscribe(C,D)}A[C].audience.push([D,E])};this.unsubscribe=function(E,D){if(!D){A[E]=null}else{if(A[E]){var F=A[E].audience;for(var C=0;C<F.length;C++){if(F[C][0]==D){F.splice(C,1)}}}}};this.publish=function(F,G){if(A[F]){var H=A[F].audience;for(var D=0;D<H.length;D++){var C=H[D][0];var E=H[D][1];C[E](G)}}};this.getSrcElementByAttribute=function(D,E){var C;if(D.srcElement){C=D.srcElement}else{if(D.target){C=D.target}}if(!C||typeof C[E]=="undefined"){return null}else{while(!C[E]||C.nodeType==3){if(C.parentNode){C=C.parentNode}else{return null}}}return C};this.getSrcElementId=function(D){var C=this.getSrcElementByAttribute(D,"id")||null;return C.id||null};this.annihilate=function(C){this.stopPropagation(C);this.preventDefault(C)};this.stopPropagation=function(C){if(C.stopPropagation){C.stopPropagation()}else{C.cancelBubble=true}return C};this.preventDefault=function(C){if(C.preventDefault){C.preventDefault()}else{C.returnValue=false}return C};this.suppressHandlerErrors=function(D,C){D["_"+C+"_suppressErrors"]=true}};fleegix.dom=new function(){var A=function(B){if(document.all){if(document.documentElement&&document.documentElement["client"+B]){return document.documentElement["client"+B]}else{return document.body["client"+B]}}else{return window["inner"+B]}};this.getViewportWidth=function(){return A("Width")};this.getViewportHeight=function(){return A("Height")};this.getViewportScrollTop=function(){return window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0};this.getViewportScrollLeft=function(){window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0};this.center=function(G){var B=G.offsetWidth;var E=G.offsetHeight;var F=fleegix.dom.getViewportWidth();var H=fleegix.dom.getViewportHeight();var D=parseInt((F/2)-(B/2),10);var C=parseInt((H/2)-(E/2),10);C+=document.documentElement.scrollTop;G.style.left=D+"px";G.style.top=C+"px";return true};this.getOffset=function(D){var C=function(F){var G=0;var E=0;if(F.offsetParent){do{G+=F.offsetLeft;E+=F.offsetTop}while(F=F.offsetParent)}return{left:G,top:E}};var B=null;if(fleegix.isIE||fleegix.isMoz){B=D.getBoundingClientRect()}else{B=C(D)}return B}};fleegix.css=new function(){this.addClass=function(B,A){fleegix.css.removeClass(B,A);var C=B.className;C+=" "+A;C=fleegix.string.trim(C);B.className=C};this.removeClass=function(C,B){var D=C.className;var A="\\b"+B+"\\b";A=new RegExp(A,"g");D=D.replace(A,"");D=D.replace("  "," ");D=fleegix.string.trim(D);C.className=D};this.replaceClass=function(B,A,C){this.removeClass(B,A);this.addClass(B,C)}};fleegix.cookie=new function(){this.set=function(B,H,E){var A=E||{};var K="/";var I=0;var G=0;var F=0;var D="";var J=0;if(typeof E=="object"){K=A.path||"/";I=A.days||0;G=A.hours||0;F=A.minutes||0}else{K=E||"/"}J+=I?I*24*60*60*1000:0;J+=G?G*60*60*1000:0;J+=F?F*60*1000:0;if(J){var C=new Date();C.setTime(C.getTime()+J);D="; expires="+C.toGMTString()}else{D=""}document.cookie=B+"="+H+D+"; path="+K};this.get=function(B){var D=B+"=";var A=document.cookie.split(";");for(var C=0;C<A.length;C++){var E=A[C];while(E.charAt(0)==" "){E=E.substring(1,E.length)}if(E.indexOf(D)===0){return E.substring(D.length,E.length)}}return null};this.create=this.set;this.destroy=function(A,C){var B={};B.minutes=-1;if(C){B.path=C}this.set(A,"",B)}}