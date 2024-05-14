const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ROMEK-XD"


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918433897160";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "/**
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：1．2．8                                                   // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
*
   * @project_name : Suhail-Md
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/@SuhailTechInfo
   * @description : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.2.8
*
* 
   * Created By Suhail Tech Info.
   * © 2024 Suhail-Md.
*/



let Suhail_Md = "Suhail MD Whatsapp bot md"
 




const _0x24001d=_0xeadb;(function(_0x5a490f,_0x3c730a){const _0x5bda79=_0xeadb,_0x50fd67=_0x5a490f();while(!![]){try{const _0x3ec861=-parseInt(_0x5bda79(0x221))/0x1*(parseInt(_0x5bda79(0x1fa))/0x2)+-parseInt(_0x5bda79(0x271))/0x3+-parseInt(_0x5bda79(0x25b))/0x4+-parseInt(_0x5bda79(0x291))/0x5+parseInt(_0x5bda79(0x27c))/0x6*(-parseInt(_0x5bda79(0x278))/0x7)+parseInt(_0x5bda79(0x20b))/0x8*(parseInt(_0x5bda79(0x217))/0x9)+parseInt(_0x5bda79(0x281))/0xa;if(_0x3ec861===_0x3c730a)break;else _0x50fd67['push'](_0x50fd67['shift']());}catch(_0x1a04c5){_0x50fd67['push'](_0x50fd67['shift']());}}}(_0x54a6,0x9dd4c));const axios=require('axios'),fs=require(_0x24001d(0x2ab)),util=require(_0x24001d(0x288)),{exec}=require(_0x24001d(0x23b)),{Sticker,createSticker,StickerTypes}=require(_0x24001d(0x2af)),fetch=require(_0x24001d(0x23d)),{userdb,tiny,fancytext,smdBuffer,getBuffer,sleep,listall,getRandom,prefix,smd,generateSticker,TelegraPh,Config,tlang}=require('../lib/');let mtypes=[_0x24001d(0x2b6),_0x24001d(0x21e),_0x24001d(0x209)];function _0xeadb(_0x5de74d,_0x2c874d){const _0x54a6d3=_0x54a6();return _0xeadb=function(_0xeadba6,_0x444179){_0xeadba6=_0xeadba6-0x1e9;let _0x1e1a0f=_0x54a6d3[_0xeadba6];return _0x1e1a0f;},_0xeadb(_0x5de74d,_0x2c874d);}smd({'cmdname':_0x24001d(0x29d),'alias':['s'],'info':'Makes\x20sticker\x20of\x20replied\x20image/video.','type':_0x24001d(0x29d),'filename':__filename,'use':_0x24001d(0x257)},async _0x5f0a63=>{const _0x37d231=_0x24001d;try{let _0x4a2c9b=mtypes[_0x37d231(0x208)](_0x5f0a63[_0x37d231(0x2b3)])?_0x5f0a63:_0x5f0a63[_0x37d231(0x279)];if(_0x4a2c9b&&mtypes['includes'](_0x4a2c9b?.[_0x37d231(0x2b3)]||_0x37d231(0x27f))){let _0x313fc1=await _0x4a2c9b['download'](),_0x37d0ee={'pack':Config[_0x37d231(0x243)],'author':Config[_0x37d231(0x249)],'type':StickerTypes[_0x37d231(0x236)],'quality':0xa};return await generateSticker(_0x5f0a63,_0x313fc1,_0x37d0ee),_0x313fc1=![];}else return _0x5f0a63['reply'](_0x37d231(0x285));}catch(_0xb1d121){return await _0x5f0a63[_0x37d231(0x2c0)](_0xb1d121+'\x0a\x0acmdName:\x20sticker\x0a');}}),smd({'cmdname':_0x24001d(0x26d),'info':_0x24001d(0x276),'type':_0x24001d(0x29d),'filename':__filename,'use':'<reply\x20to\x20sticker.>'},async(_0x471740,_0x3febcd)=>{const _0x2c5eaa=_0x24001d;try{let _0xad98fb=_0x471740['reply_message'];if(!_0xad98fb||_0xad98fb?.[_0x2c5eaa(0x2b3)]!=_0x2c5eaa(0x209))return await _0x471740[_0x2c5eaa(0x219)](_0x2c5eaa(0x215));let _0x44d3dd=_0x3febcd['split']('|'),_0x47c982=_0x44d3dd[0x0]?.['trim']()!==''?_0x44d3dd[0x0]:_0x471740[_0x2c5eaa(0x230)],_0x20f704=_0x44d3dd[0x1]&&_0x44d3dd[0x1]!==''?_0x44d3dd[0x1]:_0x2c5eaa(0x2b4),_0x3ab776=await _0xad98fb[_0x2c5eaa(0x226)](),_0x3d0871={'pack':_0x47c982,'author':_0x20f704,'type':StickerTypes[_0x2c5eaa(0x236)],'quality':0xa};return await generateSticker(_0x471740,_0x3ab776,_0x3d0871),_0x3ab776=![];}catch(_0x2529d4){return await _0x471740[_0x2c5eaa(0x2c0)](_0x2529d4+_0x2c5eaa(0x250));}}),smd({'cmdname':_0x24001d(0x247),'info':_0x24001d(0x29c),'type':_0x24001d(0x29d),'filename':__filename,'use':_0x24001d(0x262)},async(_0x1544ea,_0x3444c7)=>{const _0x7032c5=_0x24001d;try{let _0x128f40=await smdBuffer('https://raganork-api.onrender.com/api/attp?text='+(_0x3444c7?_0x3444c7:_0x7032c5(0x2a8))+_0x7032c5(0x21d));return await generateSticker(_0x1544ea,_0x128f40);}catch(_0x560462){return await _0x1544ea[_0x7032c5(0x2c0)](_0x560462+'\x0a\x0acmdName:\x20attp\x0a');}}),smd({'cmdname':_0x24001d(0x274),'alias':[_0x24001d(0x20c)],'info':'Makes\x20sticker\x20of\x20replied\x20image.','type':_0x24001d(0x29d),'filename':__filename,'use':'<reply\x20to\x20image.>'},async _0x50fc92=>{const _0x50ca66=_0x24001d;try{let _0x2d0760=mtypes['includes'](_0x50fc92['mtype'])?_0x50fc92:_0x50fc92['reply_message'];if(_0x2d0760&&mtypes['includes'](_0x2d0760?.[_0x50ca66(0x2b3)]||'need_Media')){let _0x1a1951=await _0x2d0760[_0x50ca66(0x226)](),_0xb6aa00={'pack':Config[_0x50ca66(0x243)],'author':Config[_0x50ca66(0x249)],'type':StickerTypes[_0x50ca66(0x204)],'quality':0x32};return await generateSticker(_0x50fc92,_0x1a1951,_0xb6aa00),_0x1a1951=![];}else return _0x50fc92[_0x50ca66(0x219)](_0x50ca66(0x25a));}catch(_0x1c7f0b){return await _0x50fc92[_0x50ca66(0x2c0)](_0x1c7f0b+_0x50ca66(0x23e),'*_Request\x20Failed,\x20Reply\x20to\x20an\x20image\x20only!_*');}}),smd({'cmdname':'circle','alias':[_0x24001d(0x2a4),'circlesticker','cs'],'info':_0x24001d(0x238),'type':_0x24001d(0x29d),'filename':__filename,'use':'<reply\x20to\x20image.>'},async _0x52caf7=>{const _0x52d7d4=_0x24001d;try{let _0x11d586=mtypes[_0x52d7d4(0x208)](_0x52caf7['mtype'])?_0x52caf7:_0x52caf7[_0x52d7d4(0x279)];if(_0x11d586&&mtypes[_0x52d7d4(0x208)](_0x11d586?.['mtype']||_0x52d7d4(0x27f))){let _0x5adc33=await _0x11d586[_0x52d7d4(0x226)](),_0x546011={'pack':Config['packname'],'author':Config[_0x52d7d4(0x249)],'type':StickerTypes['CIRCLE'],'quality':0x32};return await generateSticker(_0x52caf7,_0x5adc33,_0x546011),_0x5adc33=![];}else return _0x52caf7[_0x52d7d4(0x219)](_0x52d7d4(0x25a));}catch(_0x165b2a){return await _0x52caf7[_0x52d7d4(0x2c0)](_0x165b2a+'\x0a\x0acmdName:\x20circle\x0a','*_Request\x20Failed,\x20Make\x20sure\x20You\x20replied\x20an\x20image_*');}}),smd({'cmdname':_0x24001d(0x25f),'alias':[_0x24001d(0x2a6),_0x24001d(0x289)],'info':_0x24001d(0x276),'type':_0x24001d(0x29d),'filename':__filename,'use':'<reply\x20to\x20image.>'},async _0x37c100=>{const _0x2b70f0=_0x24001d;try{let _0x5f32a5=mtypes[_0x2b70f0(0x208)](_0x37c100[_0x2b70f0(0x2b3)])?_0x37c100:_0x37c100[_0x2b70f0(0x279)];if(_0x5f32a5&&mtypes[_0x2b70f0(0x208)](_0x5f32a5?.[_0x2b70f0(0x2b3)]||_0x2b70f0(0x27f))){let _0x3140d1=await _0x5f32a5['download'](),_0x7f0ab0={'pack':Config[_0x2b70f0(0x243)],'author':Config['author'],'type':StickerTypes['ROUNDED'],'quality':0x32};return await generateSticker(_0x37c100,_0x3140d1,_0x7f0ab0),_0x3140d1=![];}else return _0x37c100['reply'](_0x2b70f0(0x280));}catch(_0x52baa5){return await _0x37c100['error'](_0x52baa5+_0x2b70f0(0x1f5),_0x2b70f0(0x1f4));}}),smd({'cmdname':_0x24001d(0x29e),'info':_0x24001d(0x206),'type':_0x24001d(0x22b),'filename':__filename},async _0x5c07ae=>{const _0x3d7a3a=_0x24001d;try{const _0x2b9570=await(await fetch(_0x3d7a3a(0x1f7)))?.[_0x3d7a3a(0x29a)](),_0x4cf39c=_0x2b9570?.[_0x3d7a3a(0x232)]?.['regular']||![];_0x4cf39c?await _0x5c07ae['sendUi'](_0x5c07ae[_0x3d7a3a(0x2bc)],{'caption':'*---Random\x20Wallpapers\x20Here---*'},{'quoted':_0x5c07ae},_0x3d7a3a(0x237),_0x4cf39c):await _0x5c07ae[_0x3d7a3a(0x1ff)](_0x3d7a3a(0x284));}catch(_0x27f4a6){return await _0x5c07ae[_0x3d7a3a(0x2c0)](_0x27f4a6+_0x3d7a3a(0x267));}}),smd({'pattern':_0x24001d(0x1f8),'desc':_0x24001d(0x233),'category':_0x24001d(0x29d),'filename':__filename,'use':_0x24001d(0x1f2)},async(_0x29b369,_0x406491)=>{const _0x5dbc07=_0x24001d;try{let _0x5b20bd=pmtypes[_0x5dbc07(0x208)](_0x29b369[_0x5dbc07(0x2b3)])?_0x29b369:_0x29b369['reply_message'];if(!_0x406491)return await _0x29b369[_0x5dbc07(0x219)]('*please\x20provide\x20text\x20and\x20image*');if(!_0x5b20bd||!pmtypes[_0x5dbc07(0x208)](_0x5b20bd[_0x5dbc07(0x2b3)]))return _0x29b369[_0x5dbc07(0x219)](_0x5dbc07(0x28a));let _0x2e7f21=_0x406491['split']('|')[0x0]||'',_0x18ab18=(_0x406491['split']('|')[0x1]||_0x5dbc07(0x29d))[_0x5dbc07(0x1f6)](),_0xa7ea5d=_0x2e7f21[_0x5dbc07(0x1f1)](';')[0x0]||'_',_0x508e2=_0x2e7f21[_0x5dbc07(0x1f1)](';')[0x1]||'_',_0x225e06=await _0x29b369[_0x5dbc07(0x292)][_0x5dbc07(0x2b0)](_0x5b20bd),_0x3c2ea1=await TelegraPh(_0x225e06);try{fs[_0x5dbc07(0x235)](_0x225e06);}catch(_0x792dac){}console[_0x5dbc07(0x26f)](_0x5dbc07(0x2ad),_0x406491);let _0x66682a=await getBuffer(_0x5dbc07(0x212)+_0xa7ea5d+'/'+_0x508e2+'.png?background='+_0x3c2ea1);_0x18ab18?.[_0x5dbc07(0x220)]('p')&&await _0x29b369[_0x5dbc07(0x1ff)](_0x66682a,{'caption':Config[_0x5dbc07(0x265)]},_0x5dbc07(0x237));let _0x32a752={'pack':Config[_0x5dbc07(0x243)],'author':Config[_0x5dbc07(0x249)],'type':StickerTypes['FULL'],'quality':0x46};return await generateSticker(_0x29b369,_0x66682a,_0x32a752),_0x66682a=![];}catch(_0x34e75a){_0x29b369[_0x5dbc07(0x2c0)](_0x34e75a+_0x5dbc07(0x22f)),console[_0x5dbc07(0x26f)](_0x34e75a);}}),smd({'pattern':'emix','desc':_0x24001d(0x1fb),'category':_0x24001d(0x29d),'use':'<query>','filename':__filename},async(_0x46e4d3,_0x5dee47)=>{const _0x426f69=_0x24001d;try{let _0x466701=_0x5dee47[_0x426f69(0x1f1)](',')[0x0]||![],_0x503ec0=_0x5dee47[_0x426f69(0x1f1)](',')[0x1]||![];if(!_0x5dee47||!_0x466701||!_0x503ec0)return _0x46e4d3[_0x426f69(0x219)](_0x426f69(0x22c)+prefix+_0x426f69(0x2a9));const _0xe1140e=await fetch(_0x426f69(0x1f9)+_0x466701+'_'+_0x503ec0),_0x41bce8=await _0xe1140e?.[_0x426f69(0x29a)]();if(!_0x41bce8||_0x41bce8?.[_0x426f69(0x200)]=='')return _0x46e4d3[_0x426f69(0x1ff)]('*_Can\x27t\x20create\x20mixture,\x20try\x20other\x20emojies_*');else{let _0x39bbd1=await smdBuffer(_0x41bce8[_0x426f69(0x2b9)][0x0]['url']),_0x4c55c4={'pack':Config[_0x426f69(0x243)],'author':Config[_0x426f69(0x249)],'type':StickerTypes[_0x426f69(0x236)],'quality':0x46};return await generateSticker(_0x46e4d3,_0x39bbd1,_0x4c55c4),_0x39bbd1=![];}}catch(_0x4bf070){_0x46e4d3['error'](_0x4bf070+'\x0a\x0acmdName:\x20emix');}}),smd({'pattern':_0x24001d(0x263),'desc':_0x24001d(0x28e),'alias':['q'],'category':_0x24001d(0x29d),'use':_0x24001d(0x296),'filename':__filename},async(_0xa1cfa2,_0x4ec923)=>{const _0x2ba8f9=_0x24001d;try{let _0x5a2037=_0xa1cfa2[_0x2ba8f9(0x279)]?_0xa1cfa2['reply_message']:_0xa1cfa2&&_0x4ec923?_0xa1cfa2:![],_0x8d0e84=_0xa1cfa2[_0x2ba8f9(0x279)]?_0xa1cfa2[_0x2ba8f9(0x279)][_0x2ba8f9(0x246)]:_0x4ec923;if(!_0x5a2037||!_0x8d0e84)return _0xa1cfa2[_0x2ba8f9(0x219)](_0x2ba8f9(0x2a1));let _0x3dfb6c=await _0xa1cfa2[_0x2ba8f9(0x20e)](_0x5a2037[_0x2ba8f9(0x27d)]),_0x242a85=[_0x2ba8f9(0x1ea),_0x2ba8f9(0x24b)],_0x4c5cf1=_0x4ec923==='white'?_0x242a85[0x0]:_0x4ec923===_0x2ba8f9(0x24c)?_0x242a85[0x1]:_0x242a85[Math['floor'](Math['random']()*_0x242a85[_0x2ba8f9(0x28d)])],_0x27251d=_0xa1cfa2[_0x2ba8f9(0x292)]['getName'](_0x5a2037[_0x2ba8f9(0x27d)]),_0x345fab={'type':_0x2ba8f9(0x255),'format':_0x2ba8f9(0x2bd),'backgroundColor':_0x4c5cf1,'width':0x200,'height':0x200,'scale':0x3,'messages':[{'avatar':!![],'from':{'first_name':_0x27251d,'language_code':'en','name':_0x27251d,'photo':{'url':_0x3dfb6c}},'text':_0x8d0e84,'replyMessage':{}}]},_0x51ed20=await axios[_0x2ba8f9(0x252)]('https://bot.lyo.su/quote/generate',_0x345fab);if(!_0x51ed20||_0x51ed20[_0x2ba8f9(0x23c)]!==0xc8||!_0x51ed20[_0x2ba8f9(0x29f)]||!_0x51ed20['data']['ok'])return await _0xa1cfa2[_0x2ba8f9(0x1ff)]('*_Can\x27t\x20create\x20quote\x20sticker!_*');let _0x3dabe8=Buffer[_0x2ba8f9(0x2b2)](_0x51ed20[_0x2ba8f9(0x29f)][_0x2ba8f9(0x2bf)][_0x2ba8f9(0x237)][_0x2ba8f9(0x28d)],_0x51ed20[_0x2ba8f9(0x29f)][_0x2ba8f9(0x2bf)][_0x2ba8f9(0x237)],_0x2ba8f9(0x24e));try{await _0xa1cfa2[_0x2ba8f9(0x1ff)](_0x3dabe8,{'packname':Config['packname'],'author':'Suhail-Md'},_0x2ba8f9(0x29d));}catch(_0x5763ea){console['log'](_0x2ba8f9(0x228),_0x5763ea);let _0x4dda08={'pack':Config[_0x2ba8f9(0x243)],'author':Config[_0x2ba8f9(0x249)],'type':StickerTypes[_0x2ba8f9(0x236)],'quality':0x46};return await generateSticker(_0xa1cfa2,_0x3dabe8,_0x4dda08);}}catch(_0x5094b6){return await _0xa1cfa2[_0x2ba8f9(0x2c0)](_0x5094b6+_0x2ba8f9(0x224),_0x5094b6);}}),smd({'pattern':_0x24001d(0x256),'desc':_0x24001d(0x2be),'category':'converter','use':'56\x20Suhail','filename':__filename},async(_0x230c03,_0x3b568a)=>{const _0x1a1be2=_0x24001d;try{let _0x365550=_0x1a1be2(0x2ba)+(_0x3b568a?_0x1a1be2(0x282):_0x1a1be2(0x242)+prefix+_0x1a1be2(0x24f)+prefix+_0x1a1be2(0x1e9)),_0x50c7d9=parseInt(_0x3b568a);if(isNaN(_0x50c7d9)){let _0x4ca942=_0x3b568a?_0x3b568a:_0x1a1be2(0x218);listall(_0x4ca942)['forEach']((_0x51f58f,_0x2be109)=>{_0x365550+='\x0a'+(_0x2be109+=0x1)+'\x20'+_0x51f58f+'\x0a';});try{return await _0x230c03['send'](_0x365550,{'caption':_0x365550},'',msg);}catch{return await _0x230c03[_0x1a1be2(0x219)](_0x365550);}}let _0x564034=await fancytext(''+_0x3b568a[_0x1a1be2(0x210)](0x2),_0x50c7d9);return await _0x230c03[_0x1a1be2(0x1ff)](_0x564034,{},'',_0x230c03);}catch(_0x8dd389){return await _0x230c03[_0x1a1be2(0x2c0)](_0x8dd389+_0x1a1be2(0x27b),_0x8dd389);}}),smd({'pattern':'styly','desc':_0x24001d(0x2a7),'category': "converter",'filename':__filename,'use':'<text|search.>'},async(_0xbd587f,_0x53c116)=>{const _0x1b9903=_0x24001d;try{let _0x48c907=_0x53c116[_0x1b9903(0x254)](),_0x5cfa86=_0x1b9903(0x2ba)+(_0x48c907?_0x1b9903(0x282):_0x1b9903(0x242)+prefix+_0x1b9903(0x25c)+prefix+_0x1b9903(0x2ae)),{styletext:_0x515724}=require(_0x1b9903(0x2a3)),_0x2b12c6=_0x48c907?parseInt(_0x48c907):'';_0x48c907=_0x2b12c6&&!isNaN(_0x2b12c6)?_0x48c907[_0x1b9903(0x210)](0x2):_0x48c907;let _0x3743f7=await _0x515724(_0x48c907?_0x48c907:_0x1b9903(0x218))||[];if(!_0x3743f7||!_0x3743f7[0x0])return await _0xbd587f[_0x1b9903(0x1ff)](_0x1b9903(0x229));let _0x591f72='';if(isNaN(_0x2b12c6)||_0x2b12c6>_0x3743f7[_0x1b9903(0x28d)]||_0x2b12c6<0x0||!_0x48c907){for(let _0x48f6ed=0x0;_0x48f6ed<_0x3743f7[_0x1b9903(0x28d)];_0x48f6ed++){_0x591f72+='\x0a'+_0x48f6ed+'\x20'+_0x3743f7[_0x48f6ed][_0x1b9903(0x2bf)]+'\x20'+(_0x48c907['length']>0x32?'\x0a\x0a':'');}return await _0xbd587f['send'](_0x5cfa86+_0x591f72);}return await _0xbd587f[_0x1b9903(0x1ff)](_0x3743f7[_0x2b12c6][_0x1b9903(0x2bf)],{},'',_0xbd587f);}catch(_0x5fcd01){_0xbd587f['error'](_0x5fcd01+_0x1b9903(0x260),_0x5fcd01);}}),smd({'pattern':'tiny','desc':_0x24001d(0x1f0),'category':_0x24001d(0x21b),'use':'<url>','react':'✅','filename':__filename},async(_0x85089c,_0x29ac4f)=>{const _0x3369f6=_0x24001d;try{if(!_0x29ac4f||!_0x29ac4f[_0x3369f6(0x1f6)]()[_0x3369f6(0x208)]('https'))return _0x85089c[_0x3369f6(0x219)](_0x3369f6(0x1fc));let _0xe54a62=_0x29ac4f['split']('\x20')[0x0],_0x24899a=await axios[_0x3369f6(0x1fe)](_0x3369f6(0x277)+_0xe54a62);_0x85089c['reply'](_0x3369f6(0x29b)+_0x24899a['data']);}catch(_0x39ae7e){_0x85089c[_0x3369f6(0x2c0)](_0x39ae7e+'\x0a\x0acmdName:\x20tiny',_0x39ae7e,![]);}}),smd({'pattern':'fliptext','desc':_0x24001d(0x294),'category':_0x24001d(0x21b),'use':_0x24001d(0x214),'filename':__filename},async(_0x4cfc4e,_0x4cb7aa)=>{const _0x233159=_0x24001d;try{let _0xd51ec=_0x4cb7aa?_0x4cb7aa:_0x4cfc4e[_0x233159(0x223)];if(!_0xd51ec)return _0x4cfc4e['reply'](_0x233159(0x225)+prefix+_0x233159(0x2a2));let _0x5c7a34=_0xd51ec['split']('')['reverse']()['join']('');await _0x4cfc4e[_0x233159(0x219)](_0x233159(0x283)+_0xd51ec+_0x233159(0x28f)+_0x5c7a34);}catch(_0x15d8cc){_0x4cfc4e['error'](_0x15d8cc+_0x233159(0x1ed),_0x15d8cc);}}),smd({'pattern':_0x24001d(0x27e),'desc':_0x24001d(0x286),'category':'converter','use':_0x24001d(0x214),'filename':__filename},async(_0x454093,_0x529916)=>{const _0x54dad4=_0x24001d;try{let _0x5ba9c3=_0x529916?_0x529916:_0x454093[_0x54dad4(0x223)];if(!_0x5ba9c3)return _0x454093[_0x54dad4(0x219)](_0x54dad4(0x258));let _0x330ca8=_0x5ba9c3['split']('')[_0x54dad4(0x2b1)](_0xa59150=>{const _0x51a1c6=_0x54dad4;return _0xa59150['charCodeAt'](0x0)[_0x51a1c6(0x1fd)](0x2);})[_0x54dad4(0x203)]('\x20');await _0x454093[_0x54dad4(0x219)](_0x330ca8);}catch(_0x3cb17){await _0x454093[_0x54dad4(0x2c0)](_0x3cb17+_0x54dad4(0x27a),_0x3cb17);}}),smd({'pattern':'dbinary','desc':_0x24001d(0x222),'category':_0x24001d(0x21b),'use':_0x24001d(0x214),'filename':__filename},async(_0x38e385,_0x196965)=>{const _0x451831=_0x24001d;try{let _0x1c88de=_0x196965?_0x196965:_0x38e385['reply_text'];if(!_0x1c88de)return _0x38e385[_0x451831(0x219)]('Send\x20text\x20to\x20be\x20decoded.');var _0x208340=_0x1c88de[_0x451831(0x1f1)]('\x20'),_0x206a18=[];for(i=0x0;i<_0x208340[_0x451831(0x28d)];i++){_0x206a18[_0x451831(0x201)](String['fromCharCode'](parseInt(_0x208340[i],0x2)));}await _0x38e385[_0x451831(0x219)](_0x206a18['join'](''));}catch(_0x2b0f0a){await _0x38e385[_0x451831(0x2c0)](_0x2b0f0a+_0x451831(0x269),_0x2b0f0a);}}),smd({'pattern':'qr','category':'converter','filename':__filename,'use':'<\x20text\x20>','desc':_0x24001d(0x227)},async(_0x19c21a,_0xc7f8c4)=>{const _0x2557fe=_0x24001d;try{if(!_0xc7f8c4)return _0x19c21a[_0x2557fe(0x219)]('*Provide\x20Text\x20To\x20generate\x20QR!*');let _0x494bbd=_0x2557fe(0x245)+text;await _0x19c21a['bot'][_0x2557fe(0x1ef)](_0x19c21a[_0x2557fe(0x2bc)],{'caption':_0x2557fe(0x26b)},{'quoted':_0x19c21a},_0x2557fe(0x237),_0x494bbd);}catch(_0x33377c){await _0x19c21a[_0x2557fe(0x2c0)](_0x33377c+_0x2557fe(0x22a),_0x33377c);}}),smd({'pattern':_0x24001d(0x293),'desc':_0x24001d(0x275),'category':'converter','use':_0x24001d(0x21f),'filename':__filename},async(_0x3878b3,_0x4974a3)=>{const _0x2ebe3d=_0x24001d;try{let _0x531993=_0x4974a3?_0x4974a3:_0x3878b3['reply_text'],{data:_0x3d14f3}=await axios[_0x2ebe3d(0x1fe)]('https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=Suhail-Md+Bot&author_name=Suhail_Tech_Info&content=[%7B\x22tag\x22:\x22p\x22,\x22children\x22:[\x22'+_0x531993[_0x2ebe3d(0x23f)](/ /g,'+')+_0x2ebe3d(0x2a5));return _0x3878b3['reply'](_0x2ebe3d(0x20f)+util[_0x2ebe3d(0x1ee)](_0x3d14f3[_0x2ebe3d(0x2bf)][_0x2ebe3d(0x231)])+_0x2ebe3d(0x266)+util['format'](_0x3d14f3['result'][_0x2ebe3d(0x202)]));}catch(_0x5d7e4a){await _0x3878b3[_0x2ebe3d(0x2c0)](_0x5d7e4a+_0x2ebe3d(0x241),_0x5d7e4a,![]);}});let pmtypes=[_0x24001d(0x2b6),'stickerMessage'];function _0x54a6(){const _0x3dca7e=['measureText','583743lcDchu','canvas','createWriteStream','crop','create\x20paste\x20of\x20text.','Makes\x20sticker\x20of\x20replied\x20image/video.','https://tinyurl.com/api-create.php?url=','7Xrlepd','reply_message','\x0a\x0acommand\x20:\x20ebinary','\x0a\x0acmdName:\x20fancy','4671174MRWqXG','sender','ebinary','need_Media','*_Uhh\x20Dear,\x20Reply\x20to\x20an\x20image!!_*','21152380byBoLa','```🔢Reply\x20the\x20number\x20you\x20wants\x20to\x20select```\x20\x0a\x0a','*「\x20\x20Text\x20Flipper\x20Tool\x20\x20」*\x20\x0a*IGiven\x20text\x20:*\x0a','*_Request\x20Failed,\x20Wallpaper\x20not\x20be\x20fetched!_*','*_Uhh\x20Dear,\x20Reply\x20to\x20image/video!!_*','encode\x20binary','toptt','util','roundsticker','*Uhh\x20please,\x20Reply\x20to\x20an\x20image*','tovideo','test','length','Makes\x20Sticker\x20of\x20quoted\x20text.','\x0a\x0a*Fliped\x20text\x20:*\x0a','textAlign','864550yQedyM','bot','paste','Flips\x20given\x20text.','downloader','<reply\x20to\x20any\x20message.>','\x0a\x0acmdName:\x20voice','height','audio/mpeg','json','*🛡️Your\x20Shortened\x20URL*\x0a\x0a','Makes\x20sticker\x20of\x20given\x20text.','sticker','wallpaper','data','20px\x20Arial','*_Please\x20quote/reply\x20to\x20any\x20message!!!_*','fliptext\x20Romek\x20XD!_*','../lib/scraper','circlestic','\x22]%7D]&return_content=true','roundstic','Downloads\x20wikimedia\x20images.','Please\x20provide\x20text\x20to\x20generate\x20sticker','emix\x20😅,🤔','image/jpeg','fs-extra','\x0a\x0acmdName:\x20photo\x0a','match','styly\x2019\x20Romek(For\x20specific\x20text)```\x0a\x0a','wa-sticker-formatter','downloadAndSaveMediaMessage','map','alloc','mtype','𝑹𝑶𝑴𝑬𝑲-𝑿𝑫\x20♥️','ROUNDED','imageMessage','clearRect','\x0a\x0acmdName:\x20toaudio','results','┏━━━━━━━━━━━━━━━━━━━━━━━━\x0a┃\x09*💬ROMEK-XD_FANCY_TEXT💬*\x20\x0a┗━━━━━━━━━━━━━━━━━━━━━━━━\x0a\x0a\x20','toaudio','jid','png','Makes\x20stylish/fancy\x20given\x20text','result','error','fancy\x2025\x20Suhail(For\x20specific\x20text)```\x0a\x0a','#FFFFFF','width','tomp3','\x0a\x0acommand\x20:\x20fliptext','format','sendUi','Makes\x20url\x20tiny.','split','<text>','font','*_Request\x20Failed,\x20Make\x20sure\x20You\x20replied\x20an\x20image!_*','\x0a\x0acmdName:\x20round\x0a','toLowerCase','https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc','memegen','https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=','14mYOPrH','Mixes\x20two\x20emojies.','Provide\x20me\x20a\x20link','toString','get','send','locale','push','url','join','CROPPED','tomp4','To\x20get\x20Random\x20Pics','<reply\x20to\x20any\x20gif>','includes','stickerMessage','mp4','448EbVxoY','cropsticker','*_Uhh\x20Dear,\x20provide\x20text,\x20ex\x20.ttp\x204\x20hii\x20im\x20suhail!!_*','getpp','*Paste\x20created\x20on\x20telegraph*\x0aName:-','slice','<reply\x20to\x20any\x20audio>','https://api.memegen.link/images/custom/','*_Uhh\x20Please,\x20Reply\x20to\x20audio/video_*','<query>','*Uhh\x20Please,\x20Reply\x20to\x20sticker*','voice','6453vJArhH','Romek','reply','Makes\x20photo\x20of\x20replied\x20sticker.','converter','*Damn...\x20Reply\x20To\x20An\x20Animated\x20Sticker\x20or\x20Gif\x20*','&apikey=with_love_souravkl11','videoMessage','<\x20text\x20>','startsWith','14447aDbpYH','decode\x20binary','reply_text','\x0a\x0acmdName:\x20emix','*_Example\x20:\x20','download','Sends\x20CitelsVoid\x20Qr\x20code\x20to\x20scan\x20and\x20get\x20your\x20session\x20id.','error\x20in\x20quotely\x20:\x20','*_No\x20Results\x20Found!_*','\x0a\x0acommand\x20:\x20qr','Anime\x20Pics','Example\x20:\x20','readFileSync','unlink','\x0a\x0acmdName:\x20memegen\x0a','pushName','title','urls','Write\x20text\x20on\x20quoted\x20image.','Image\x20created:','unlinkSync','FULL','image','circle\x20sticker\x20of\x20image.','mp3','sendMessage','child_process','status','node-fetch','\x0a\x0acmdName:\x20crop\x0a','replace','*_Uhh\x20Dear,\x20Reply\x20to\x20Any\x20Sticker.!!_*','\x0a\x0acommand:\x20paste\x20','```\x09\x09','packname','<reply\x20to\x20image.>','https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=','text','attp','../lib','author','*_Uhh\x20Dear,\x20Reply\x20to\x20Any\x20Video.!!_*','#000000','black','audioMessage','base64','fancy\x20Romek(For\x20all\x20text)\x0a\x09\x09','\x0a\x0acmdName:\x20take\x0a','./temp/ttp.png','post','pipe','trim','quote','fancy','<reply\x20to\x20any\x20image/video.>','*_Send\x20text\x20to\x20be\x20encoded.!_*','adds\x20bass\x20in\x20given\x20sound','*_Uhh\x20Dear,\x20Reply\x20to\x20image!!_*','1047060UifXma','styly\x20Suhail(For\x20all\x20text)\x0a\x09\x09','mimetype','<reply\x20to\x20any\x20Video>','round','\x0a\x0acommand:\x20styly','changes\x20type\x20to\x20audio.','<\x20text.>','quotely','\x0a\x0acmdName:\x20ttp\x0a','caption','\x20\x0aUrl:-\x20','\x0a\x0acmdName:\x20wallpaper\x0a','center','\x0a\x0acommand\x20:\x20dbinary','getContext','*_Scan\x20Qr\x20To\x20Get\x20You\x20Text_*','*_Uhh\x20Dear,\x20Reply\x20To\x20Animated\x20Sticker\x20or\x20Gif!!_*','take','fillText','log'];_0x54a6=function(){return _0x3dca7e;};return _0x54a6();}smd({'cmdname':'photo','info':_0x24001d(0x21a),'type':_0x24001d(0x21b),'use':_0x24001d(0x207),'filename':__filename},async _0x31d7b=>{const _0x549d50=_0x24001d;try{let _0xd092ed=pmtypes[_0x549d50(0x208)](_0x31d7b['mtype'])?_0x31d7b:_0x31d7b['reply_message'];if(!_0xd092ed||!pmtypes[_0x549d50(0x208)](_0xd092ed?.[_0x549d50(0x2b3)]))return _0x31d7b[_0x549d50(0x219)](_0x549d50(0x240));let _0x361039=await _0x31d7b['bot'][_0x549d50(0x2b0)](_0xd092ed);await _0x31d7b[_0x549d50(0x292)][_0x549d50(0x23a)](_0x31d7b[_0x549d50(0x2bc)],{'image':{'url':_0x361039},'mimetype':_0x549d50(0x2aa)});try{fs[_0x549d50(0x235)](_0x361039);}catch(_0x573b9e){}}catch(_0x2454ac){_0x31d7b['error'](_0x2454ac+_0x549d50(0x2ac),_0x2454ac,![]);}});let audtypes=[_0x24001d(0x24d),'videoMessage'];smd({'pattern':_0x24001d(0x2bb),'alias':[_0x24001d(0x239),_0x24001d(0x1ec)],'desc':_0x24001d(0x261),'category':_0x24001d(0x21b),'use':'<reply\x20to\x20any\x20Video>','filename':__filename},async _0x116242=>{const _0x253b1b=_0x24001d;try{let _0x2976f2=audtypes[_0x253b1b(0x208)](_0x116242[_0x253b1b(0x2b3)])?_0x116242:_0x116242[_0x253b1b(0x279)];if(!_0x2976f2||!audtypes[_0x253b1b(0x208)](_0x2976f2?.[_0x253b1b(0x2b3)]))return _0x116242[_0x253b1b(0x219)](_0x253b1b(0x24a));let _0x2b56d1=await _0x116242['bot'][_0x253b1b(0x2b0)](_0x2976f2);const {toAudio:_0xfd0543}=require('../lib');let _0x550383=fs[_0x253b1b(0x22d)](_0x2b56d1),_0x5319d4=await _0xfd0543(_0x550383);try{fs[_0x253b1b(0x22e)](_0x2b56d1);}catch(_0x149b27){}return await _0x116242['bot'][_0x253b1b(0x23a)](_0x116242[_0x253b1b(0x2bc)],{'audio':_0x5319d4,'mimetype':_0x253b1b(0x299)});}catch(_0x1d6272){_0x116242['error'](_0x1d6272+_0x253b1b(0x2b8),_0x1d6272);}}),smd({'pattern':_0x24001d(0x216),'alias':['ptt',_0x24001d(0x287)],'desc':_0x24001d(0x259),'category':_0x24001d(0x21b),'use':_0x24001d(0x211)},async _0x5c9aa3=>{const _0x1d3097=_0x24001d;try{let _0x462db2=audtypes['includes'](_0x5c9aa3[_0x1d3097(0x2b3)])?_0x5c9aa3:_0x5c9aa3[_0x1d3097(0x279)];if(!_0x462db2||!audtypes[_0x1d3097(0x208)](_0x462db2?.[_0x1d3097(0x2b3)]))return _0x5c9aa3['reply'](_0x1d3097(0x213));let _0x357d23=await _0x462db2['download']();return await _0x5c9aa3[_0x1d3097(0x292)][_0x1d3097(0x23a)](_0x5c9aa3[_0x1d3097(0x2bc)],{'audio':_0x357d23,'mimetype':_0x1d3097(0x299),'ptt':!![]},{'quoted':_0x5c9aa3});}catch(_0x4252f6){_0x5c9aa3[_0x1d3097(0x2c0)](_0x4252f6+_0x1d3097(0x297),_0x4252f6);}}),smd({'pattern':_0x24001d(0x205),'alias':[_0x24001d(0x20a),_0x24001d(0x28b)],'desc':'convert\x20sticker\x20to\x20mp4.','category':_0x24001d(0x21b),'use':_0x24001d(0x25e),'filename':__filename},async _0x4ed07c=>{const _0x3e258b=_0x24001d;let _0xadff0d=_0x4ed07c[_0x3e258b(0x2b3)]==='videoMessage'?_0x4ed07c:_0x4ed07c[_0x3e258b(0x279)];if(!_0xadff0d)return _0x4ed07c[_0x3e258b(0x219)](_0x3e258b(0x26c));const {webp2mp4File:_0x3e4a6e}=require(_0x3e258b(0x248));let _0x4ab6cb=_0xadff0d?.[_0x3e258b(0x25d)]||'';if(_0xadff0d?.[_0x3e258b(0x2b3)]!=_0x3e258b(0x21e)&&!/webp/['test'](_0x4ab6cb))return await _0x4ed07c[_0x3e258b(0x1ff)](_0x3e258b(0x21c));let _0x1c3111=await _0x4ed07c['bot'][_0x3e258b(0x2b0)](_0xadff0d);try{try{if(/webp/[_0x3e258b(0x28c)](_0x4ab6cb)){let _0x49adc0=await _0x3e4a6e(_0x1c3111);_0x1c3111=_0x49adc0['result'];}}catch(_0x1b8bba){console[_0x3e258b(0x26f)]('error\x20while\x20converting\x20sticker\x20to\x20mp4\x0a',_0x1b8bba);}await _0x4ed07c['bot'][_0x3e258b(0x23a)](_0x4ed07c[_0x3e258b(0x2bc)],{'video':{'url':_0x1c3111},'caption':Config[_0x3e258b(0x265)]});try{await fs[_0x3e258b(0x22e)](_0x1c3111);}catch(_0x399a5b){}}catch(_0x3d8403){_0x4ed07c[_0x3e258b(0x2c0)](_0x3d8403+'\x0a\x0acmdName:\x20tomp4',_0x3d8403);}});function splitTextIntoLines(_0x2e8ff3,_0x1ba8fb,_0x469f3c){const _0x50d2e8=_0x24001d,_0x32429f=_0x2e8ff3[_0x50d2e8(0x1f1)]('\x20'),_0x2048c1=[];let _0x38142d='';for(const _0x1678b3 of _0x32429f){const _0x56be5a=_0x38142d===''?_0x1678b3:_0x38142d+'\x20'+_0x1678b3,_0x1a1a76=_0x1ba8fb[_0x50d2e8(0x270)](_0x56be5a)[_0x50d2e8(0x1eb)];_0x1a1a76<=_0x469f3c?_0x38142d=_0x56be5a:(_0x2048c1[_0x50d2e8(0x201)](_0x38142d),_0x38142d=_0x1678b3);}return _0x38142d!==''&&_0x2048c1[_0x50d2e8(0x201)](_0x38142d),_0x2048c1;}smd({'cmdname':'ttp','alias':[_0x24001d(0x2a6),'roundsticker'],'info':_0x24001d(0x276),'type':'sticker','filename':__filename,'use':_0x24001d(0x244)},async(_0x54e3dc,_0x8cd246)=>{const _0x5d0ad5=_0x24001d;try{let _0x2cee76=_0x8cd246||_0x54e3dc[_0x5d0ad5(0x223)];if(_0x2cee76){let _0x374825=parseInt(_0x2cee76)||'';_0x374825&&!isNaN(_0x374825)&&(_0x2cee76=await fancytext(''+_0x2cee76[_0x5d0ad5(0x210)](0x2),_0x374825));const {createCanvas:_0x238289}=require(_0x5d0ad5(0x272)),_0xf38745=require('fs'),_0x4d4dd9=0x12c,_0x3fed71=0x12c,_0x5a2b18=_0x5d0ad5(0x251),_0x246894=_0x238289(_0x4d4dd9,_0x3fed71),_0x330082=_0x246894[_0x5d0ad5(0x26a)]('2d');_0x330082[_0x5d0ad5(0x2b7)](0x0,0x0,_0x246894[_0x5d0ad5(0x1eb)],_0x246894[_0x5d0ad5(0x298)]),_0x330082[_0x5d0ad5(0x1f3)]=_0x5d0ad5(0x2a0),_0x330082['fillStyle']=_0x5d0ad5(0x24c),_0x330082[_0x5d0ad5(0x290)]=_0x5d0ad5(0x268);const _0xa2e118=_0x4d4dd9-0x14,_0x17cad6=splitTextIntoLines(_0x2cee76,_0x330082,_0xa2e118),_0x4f37f9=_0x17cad6[_0x5d0ad5(0x28d)]*0x19,_0x136ece=(_0x3fed71-_0x4f37f9)/0x2;_0x17cad6['forEach']((_0x214ee7,_0x432ccc)=>{const _0x563961=_0x5d0ad5,_0x5c8f67=_0x136ece+_0x432ccc*0x19;_0x330082[_0x563961(0x26e)](_0x214ee7,_0x4d4dd9/0x2,_0x5c8f67);});const _0x3a6f98=_0x246894['createPNGStream'](),_0x3c15d9=_0xf38745[_0x5d0ad5(0x273)](_0x5a2b18);_0x3a6f98[_0x5d0ad5(0x253)](_0x3c15d9),_0x3c15d9['on']('finish',async()=>{const _0x58dd66=_0x5d0ad5;console[_0x58dd66(0x26f)](_0x58dd66(0x234),_0x5a2b18);let _0x3dac0f=_0xf38745['readFileSync'](_0x5a2b18),_0x27923e={'pack':Config[_0x58dd66(0x243)],'author':Config[_0x58dd66(0x249)],'type':StickerTypes[_0x58dd66(0x2b5)],'quality':0x32};return await generateSticker(_0x54e3dc,_0x3dac0f,_0x27923e),_0x3dac0f=![];});}else return _0x54e3dc['reply'](_0x5d0ad5(0x20d));}catch(_0x72e5d){return await _0x54e3dc[_0x5d0ad5(0x2c0)](_0x72e5d+_0x5d0ad5(0x264));}});



/*
{
   pattern: "converter",
   type: "notes",
}
*/,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
