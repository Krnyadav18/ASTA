const _0x4b84a5=_0x457b;(function(_0x4206cf,_0xfb4021){const _0x31ae68=_0x457b,_0x1ae396=_0x4206cf();while(!![]){try{const _0x23f292=-parseInt(_0x31ae68(0x129))/0x1+parseInt(_0x31ae68(0x13e))/0x2+parseInt(_0x31ae68(0x134))/0x3*(-parseInt(_0x31ae68(0x121))/0x4)+parseInt(_0x31ae68(0x13d))/0x5*(-parseInt(_0x31ae68(0x10f))/0x6)+parseInt(_0x31ae68(0x115))/0x7+-parseInt(_0x31ae68(0x127))/0x8*(-parseInt(_0x31ae68(0x113))/0x9)+-parseInt(_0x31ae68(0x11c))/0xa;if(_0x23f292===_0xfb4021)break;else _0x1ae396['push'](_0x1ae396['shift']());}catch(_0x122a56){_0x1ae396['push'](_0x1ae396['shift']());}}}(_0x5747,0x4d942));const Neotro=require(_0x4b84a5(0x130)),{MessageType}=require(_0x4b84a5(0x132)),exec=require('child_process')['exec'],os=require('os'),fs=require('fs'),Config=require('../config'),Language=require('../language'),Lang=Language['getString']('evaluators'),SLang=Language[_0x4b84a5(0x123)]('conventer'),NLang=Language['getString'](_0x4b84a5(0x114)),googleTTS=require(_0x4b84a5(0x12e)),Heroku=require('heroku-client'),heroku=new Heroku({'token':Config['HEROKU'][_0x4b84a5(0x12f)]});let baseURI='/apps/'+Config[_0x4b84a5(0x122)][_0x4b84a5(0x118)];async function checkUsAdmin(_0x36faa5,_0x27f14a=_0x36faa5[_0x4b84a5(0x11a)][_0x4b84a5(0x11f)]){const _0x5e3a6b=_0x4b84a5;var _0x43eee7=await _0x36faa5[_0x5e3a6b(0x12d)]['groupMetadata'](_0x36faa5[_0x5e3a6b(0x135)]),_0x2d3425=_0x43eee7[_0x5e3a6b(0x133)]['map'](_0x298c17=>{const _0xfd0107=_0x5e3a6b;if(_0x298c17[_0xfd0107(0x135)][_0xfd0107(0x112)]('@')[0x0]==_0x27f14a['split']('@')[0x0]&&_0x298c17[_0xfd0107(0x110)])return!![];else;return![];});return _0x2d3425[_0x5e3a6b(0x139)](!![]);}async function checkImAdmin(_0x1868b5,_0xa14f5=_0x1868b5[_0x4b84a5(0x12d)][_0x4b84a5(0x137)][_0x4b84a5(0x135)]){const _0x5a1033=_0x4b84a5;var _0x17cfb4=await _0x1868b5[_0x5a1033(0x12d)][_0x5a1033(0x12b)](_0x1868b5[_0x5a1033(0x135)]),_0x34692c=_0x17cfb4[_0x5a1033(0x133)][_0x5a1033(0x111)](_0xb24be7=>{const _0x340724=_0x5a1033;if(_0xb24be7[_0x340724(0x135)][_0x340724(0x112)]('@')[0x0]==_0xa14f5['split']('@')[0x0]&&_0xb24be7['isAdmin'])return!![];else;return![];});return _0x34692c[_0x5a1033(0x139)](!![]);}var alllink_var='';function _0x5747(){const _0x2b61da=['message','groupMetadata','bitly.com','client','google-translate-tts','API_KEY','../events','*Ссылка\x20обнаружена!*','@adiwajshing/baileys','participants','3IRpqvj','jid','match','user','text','includes','then','*Link\x20Detectado!*','groupRemove','5cpWsqB','864582mResKZ','37494oCWmDX','isAdmin','map','split','9vElbyg','scrapers','3397870WWeDYX','*लिंक\x20का\x20पता\x20चला!*','*Enlace\x20Detectado!*','APP_NAME','*Link\x20Detected!\x20\x20link\x20Not\x20allowed\x20here\x0a\x20Action:Kick\x20\x0a\x0a\x20🕊🕊*','data','/config-vars','4661090yFrHpW','get','LANG','participant','sendMessage','5932BhkIjF','HEROKU','getString','WHATS_LINK_BLOCK','*‎Link\x20Tespit\x20Edildi!*','test','3870544WWGrJn','true','609916YmEYDj'];_0x5747=function(){return _0x2b61da;};return _0x5747();}async function megalink(){const _0x2f5c15=_0x4b84a5;await heroku[_0x2f5c15(0x11d)](baseURI+_0x2f5c15(0x11b))[_0x2f5c15(0x13a)](async _0x1aacb2=>{const _0x537220=_0x2f5c15;alllink_var=_0x1aacb2[_0x537220(0x124)];});}megalink();var ldc='';if(Config['LANG']=='AZ')ldc='*Bağlantı\x20Aşkarlandı!*';function _0x457b(_0x12acd2,_0x3acda5){const _0x5747f5=_0x5747();return _0x457b=function(_0x457b22,_0x145bc7){_0x457b22=_0x457b22-0x10f;let _0x5ecefa=_0x5747f5[_0x457b22];return _0x5ecefa;},_0x457b(_0x12acd2,_0x3acda5);}if(Config[_0x4b84a5(0x11e)]=='TR')ldc=_0x4b84a5(0x125);if(Config['LANG']=='EN')ldc=_0x4b84a5(0x119);if(Config[_0x4b84a5(0x11e)]=='SI')ldc='*<===👩‍🦰Amazone\x20Alexa===>*\x0a*🦹‍♀️_Whatsapp\x20Group\x20Link\x20Block\x20System_\x0a\x0a*⛔හේතුව:\x20සමූහයේ\x20Whatsapp\x20Group\x20Link\x20තහනම්\x20කර\x20ඇත.*\x0a*⚡ක්‍රියාමාර්ගය:ඉවත්\x20කිරීම.*';if(Config['LANG']=='ID')ldc='*Tautan\x20Terdeteksi!*';if(Config[_0x4b84a5(0x11e)]=='PT')ldc=_0x4b84a5(0x13b);if(Config['LANG']=='RU')ldc=_0x4b84a5(0x131);if(Config['LANG']=='HI')ldc=_0x4b84a5(0x116);if(Config['LANG']=='ES')ldc=_0x4b84a5(0x117);Neotro['addCommand']({'on':_0x4b84a5(0x138),'fromMe':![],'deleteCommand':![]},async(_0x446039,_0x800ad3)=>{const _0x5e05dd=_0x4b84a5;if(alllink_var==_0x5e05dd(0x128)){let _0x388dff=new RegExp(_0x5e05dd(0x12c)),_0x27299e=new RegExp('https://chat.whatsapp.com');if(_0x388dff[_0x5e05dd(0x126)](_0x446039[_0x5e05dd(0x12a)])){var _0x31ba5b=await checkUsAdmin(_0x446039),_0x13e6c7=await checkImAdmin(_0x446039);if(!_0x13e6c7)return;if(_0x31ba5b)return;await _0x446039[_0x5e05dd(0x12d)][_0x5e05dd(0x13c)](_0x446039[_0x5e05dd(0x135)],[_0x446039[_0x5e05dd(0x11a)][_0x5e05dd(0x11f)]]),await _0x446039['client'][_0x5e05dd(0x120)](_0x446039[_0x5e05dd(0x135)],ldc,MessageType[_0x5e05dd(0x138)],{'quoted':_0x446039['data']});}else{if(_0x27299e[_0x5e05dd(0x126)](_0x446039['message'])){var _0x31ba5b=await checkUsAdmin(_0x446039),_0x13e6c7=await checkImAdmin(_0x446039);if(!_0x13e6c7)return;if(_0x31ba5b)return;await _0x446039[_0x5e05dd(0x12d)][_0x5e05dd(0x13c)](_0x446039[_0x5e05dd(0x135)],[_0x446039[_0x5e05dd(0x11a)]['participant']]),await _0x446039[_0x5e05dd(0x12d)]['sendMessage'](_0x446039['jid'],ldc,MessageType[_0x5e05dd(0x138)],{'quoted':_0x446039[_0x5e05dd(0x11a)]});}else{if(_0x446039[_0x5e05dd(0x12a)][_0x5e05dd(0x136)](/((?:[.]tyyfdr)\b)/i)){var _0x31ba5b=await checkUsAdmin(_0x446039),_0x13e6c7=await checkImAdmin(_0x446039);if(!_0x13e6c7)return;if(_0x31ba5b)return;await _0x446039['client'][_0x5e05dd(0x120)](_0x446039[_0x5e05dd(0x135)],ldc,MessageType[_0x5e05dd(0x138)],{'quoted':_0x446039[_0x5e05dd(0x11a)]}),await _0x446039[_0x5e05dd(0x12d)][_0x5e05dd(0x13c)](_0x446039['jid'],[_0x446039[_0x5e05dd(0x11a)]['participant']]);}}}}});
