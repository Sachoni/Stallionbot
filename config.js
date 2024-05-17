const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theealfa360:theealfa360@cluster0.2peepls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254736429306";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


global.disable= process.env.shutdown_all_foreign_bots ||  "false" ; //
global.disable= process.env.shutdown_all_foreign_bots ||  "false" ; 
global.disable= process.env.shutdown_all_foreign_bots ||  "false" ; 

//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.post_status = process.env.AUTO_POST_STATUS || "false"
global.post_status_from =  process.env.POST_STATUS_FROM  || "254736429306";
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "254736429306";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254736429306";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  " SUHAIL_07_58_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDMsXG4gICAgICAgIDI5LFxuICAgICAgICA2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMjE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NixcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODMsXG4gICAgICAgIDY4LFxuICAgICAgICAwLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI5LFxuICAgICAgICA5MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzLFxuICAgICAgICA5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDU1LFxuICAgICAgICA5MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MixcbiAgICAgICAgODAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc1LFxuICAgICAgICA5NixcbiAgICAgICAgMTExLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDM4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGcmZtdkFyanlIOUhiYmNsUGN6WGZ4dmUzaGhlOWZjUW5xalFKbzMzaGZvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJISWJULWdKQVRSMmJadUN4NHpCa1p3XCIsXG4gIFwicGhvbmVJZFwiOiBcImM4ZTQ0MjlmLTY1YzktNGZhZC05ZDU2LWFhYjIwNWE3N2I5NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICAxNTcsXG4gICAgICAyNTEsXG4gICAgICA5MixcbiAgICAgIDEyOSxcbiAgICAgIDE5OCxcbiAgICAgIDgxLFxuICAgICAgMTc0LFxuICAgICAgNTYsXG4gICAgICAyMDksXG4gICAgICAwLFxuICAgICAgMjI5LFxuICAgICAgMjUyLFxuICAgICAgMjA2LFxuICAgICAgMzYsXG4gICAgICAxOTgsXG4gICAgICAyMzEsXG4gICAgICA5MyxcbiAgICAgIDI0NyxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzgsXG4gICAgICAxNzAsXG4gICAgICAxNjUsXG4gICAgICAyMDUsXG4gICAgICAyMTAsXG4gICAgICAxODYsXG4gICAgICAxMjMsXG4gICAgICAyMTUsXG4gICAgICAxOTIsXG4gICAgICAxNjEsXG4gICAgICAxNDYsXG4gICAgICAyMjgsXG4gICAgICAxNjEsXG4gICAgICAxNjAsXG4gICAgICAxNzMsXG4gICAgICA0LFxuICAgICAgMTI0LFxuICAgICAgODksXG4gICAgICAxMDksXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBQ0RGMlo1UVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzM2NDI5MzA2OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwibG9uZWx5IHVzZXJcIixcbiAgICBcImxpZFwiOiBcIjE4NjU3Mzc4MjA0NDcyMDoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOKzlzdkFDRUtPY25MSUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIncrbm16M3NiSzRTUUpnbmY4SVZ5OWlKcU11cERvUkVnOGtmVVI3T3UxUXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYjUvTUVYMzFvZ1M0OXkvejJvRWdkOTcvWGtPU2VucjQvdkZZc0d6NFl4cVRxRXZDQU5EQVd2aVBTVEhVYWlFTUZUVU1ackc1a3BkYmVITUIyUFN3Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaElPUjk4WUh5a2pMZFZmUmdyUXRYVjgzMU56cExpUkpBR1MrU2lnSVo5TitJYjNRbHJHSmFtaGRnUVpGbTkwTW5pK0R1TTc2THZ6KzU2NHRtb1BqaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzM2NDI5MzA2OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU5MzI3MTFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "$",
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
  antilink_values:process.env.ANTILINK_VALUES|| "$",
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
