/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['']='';
   fonts['hobo-std, sans-serif']='<script src=\"http://use.edgefonts.net/hobo-std:n4:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Text',
            type:'text',
            rect:['228px','67px','744px','96px','auto','auto'],
            text:"Rozbalíme si tlakomer",
            align:"center",
            font:['hobo-std, sans-serif',[400,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'package',
            type:'rect',
            rect:['134','288','auto','auto','auto','auto']
         },
         {
            id:'ruka',
            display:'none',
            type:'image',
            rect:['0%','0%','91.5%','84.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/1.png','0px','0px']
         },
         {
            id:'Text2-1',
            display:'none',
            type:'text',
            rect:['19%','9.3%','62%','11.5%','auto','auto'],
            text:"Rozbaľte pás manžety tak,",
            align:"center",
            font:['hobo-std, sans-serif',[400,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'Text2-2Copy2',
            display:'none',
            type:'text',
            rect:['19%','9.3%','62%','11.5%','auto','auto'],
            text:"aby jej koniec presahoval",
            align:"center",
            font:['hobo-std, sans-serif',[380,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'Text2-3',
            display:'none',
            type:'text',
            rect:['22.8%','79%','62%','11.5%','auto','auto'],
            text:"cez D-krúžok manžety.",
            align:"center",
            font:['hobo-std, sans-serif',[380,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'sipka',
            type:'image',
            rect:['44.3%','14.9%','17.7%','20.2%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/sipka.png','0px','0px'],
            transform:[[],['-42'],['-4']]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['36.5%','24.2%','8.1%','3.3%','auto','auto'],
            fill:["rgba(255,21,21,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Text2Copy2',
            type:'text',
            rect:['571px','198px','425px','82px','auto','auto'],
            text:"Hlavná artéria",
            align:"center",
            font:['hobo-std, sans-serif',[280,"%"],"rgba(255,21,21,1.00)","500","none","normal"]
         },
         {
            id:'ruka_fig2',
            type:'image',
            rect:['0%','7.2%','100%','88.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/2a.png','0px','0px']
         },
         {
            id:'refresh_main',
            type:'image',
            rect:['91.5%','0%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/refresh.png','0px','0px']
         },
         {
            id:'next_to_2',
            display:'none',
            type:'image',
            rect:['91.5%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'refresh2',
            display:'none',
            type:'image',
            rect:['91.7%','0%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/refresh.png','0px','0px']
         },
         {
            id:'next_to_3',
            display:'none',
            type:'image',
            rect:['91.7%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'back_to_main',
            display:'none',
            type:'image',
            rect:['0%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'Text4Copy',
            type:'text',
            rect:['13.3%','3.3%','73.4%','15.8%','auto','auto'],
            text:"Prestrčte ľavú ruku smlučkou manžety. ",
            align:"center",
            font:['hobo-std, sans-serif',[270,"%"],"rgba(0,0,0,1.00)","500","none","normal"]
         },
         {
            id:'Text4',
            type:'text',
            rect:['34.8%','2.2%','56.8%','51.7%','auto','auto'],
            text:"Farebný prúžok by mal byť umiestnený navrchu",
            align:"center",
            font:['hobo-std, sans-serif',[270,"%"],"rgba(0,0,0,1.00)","500","none","normal"]
         },
         {
            id:'Text4Copy2',
            type:'text',
            rect:['32.2%','24.2%','73.4%','10.3%','auto','auto'],
            text:"a s hadičkou ukazovať v smere",
            align:"center",
            font:['hobo-std, sans-serif',[270,"%"],"rgba(0,0,0,1.00)","500","none","normal"]
         },
         {
            id:'Text4Copy3',
            type:'text',
            rect:['60.3%','34.4%','17%','8.9%','auto','auto'],
            text:"ramena.",
            align:"center",
            font:['hobo-std, sans-serif',[270,"%"],"rgba(0,0,0,1.00)","500","none","normal"]
         },
         {
            id:'bact_to_2',
            display:'none',
            type:'image',
            rect:['0%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'next_to_3b',
            display:'none',
            type:'image',
            rect:['91.7%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'refresh3',
            display:'none',
            type:'image',
            rect:['91.7%','0%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/refresh.png','0px','0px']
         },
         {
            id:'kvota1',
            display:'none',
            type:'text',
            rect:['11.7%','2.9%','78.7%','15.1%','auto','auto'],
            text:"Otočte dlaňou nahor a umiestnite",
            align:"center",
            font:['hobo-std, sans-serif',[380,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'kvota2',
            display:'none',
            type:'text',
            rect:['30.5%','16.4%','66.2%','13.9%','auto','auto'],
            text:"okraj manžety nad vnútornú",
            align:"center",
            font:['hobo-std, sans-serif',[380,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'kvota3',
            display:'none',
            type:'text',
            rect:['45.5%','31.4%','54.5%','13.9%','auto','auto'],
            text:" stranu lakťového kĺbu.",
            align:"center",
            font:['hobo-std, sans-serif',[380,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'kvota4',
            display:'none',
            type:'text',
            rect:['46.3%','67.5%','46.2%','24.4%','auto','auto'],
            text:"Pritiahnite manžetu za koniec.",
            align:"center",
            font:['hobo-std, sans-serif',[260,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'_2b',
            display:'none',
            type:'image',
            rect:['50%','28.1%','18.2%','30.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/2b.png','0px','0px']
         },
         {
            id:'kvota_cislo',
            display:'none',
            type:'text',
            rect:['43.3%','10.6%','35.6%','13.9%','auto','auto'],
            text:"1,5 - 2,5 cm",
            align:"center",
            font:['hobo-std, sans-serif',[450,"%"],"rgba(255,0,0,1.00)","500","none","normal"]
         },
         {
            id:'refresh3b',
            display:'none',
            type:'image',
            rect:['91.7%','0%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/refresh.png','0px','0px']
         },
         {
            id:'bact_to_3',
            display:'none',
            type:'image',
            rect:['0%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'next_to_4',
            display:'none',
            type:'image',
            rect:['91.7%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'_3',
            display:'none',
            type:'image',
            rect:['16.8%','-29.6%','51.7%','141.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/3.png','0px','0px'],
            transform:[[],['90']]
         },
         {
            id:'kvota_cisloCopy',
            type:'text',
            rect:['40%','52.2%','49.3%','16.1%','auto','auto'],
            text:"Hlavná artéria",
            align:"center",
            font:['hobo-std, sans-serif',[450,"%"],"rgba(255,0,0,1.00)","500","none","normal"]
         },
         {
            id:'kvota3Copy2',
            type:'text',
            rect:['35.1%','14.7%','59.2%','26.7%','auto','auto'],
            text:"Umiestnite hadičku do stredu paže.",
            align:"center",
            font:['hobo-std, sans-serif',[380,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['28.7%','52.2%','2.1%','98px','auto','auto'],
            fill:["rgba(255,21,21,1.00)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'back_to_3b',
            display:'none',
            type:'image',
            rect:['0%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'next_to_5',
            display:'none',
            type:'image',
            rect:['91.7%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'refresh4',
            display:'none',
            type:'image',
            rect:['91.7%','0%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/refresh.png','0px','0px']
         },
         {
            id:'ruka5',
            display:'none',
            type:'image',
            rect:['0%','-0.3%','100%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/ru.png','0px','0px']
         },
         {
            id:'text5',
            display:'none',
            type:'text',
            rect:['4.2%','2.5%','89.7%','13.9%','auto','auto'],
            text:"Tam, kde je pulz najsilnejší,",
            align:"center",
            font:['hobo-std, sans-serif',[400,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'text5Copy',
            display:'none',
            type:'text',
            rect:['25%','17.2%','56.4%','13.9%','auto','auto'],
            text:"je Vaša hlavná tepna.",
            align:"center",
            font:['hobo-std, sans-serif',[400,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'beat',
            display:'none',
            type:'ellipse',
            rect:['22.3%','48.9%','11.7%','19.4%','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(255,21,21,0.00)"],
            stroke:[10,"rgba(255,0,0,1.00)","solid"]
         },
         {
            id:'beat_mini',
            display:'none',
            type:'ellipse',
            rect:['25.7%','54%','5%','8.3%','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(255,21,21,0.00)"],
            stroke:[10,"rgba(255,0,0,1.00)","solid"]
         },
         {
            id:'bact_to_4',
            display:'none',
            type:'image',
            rect:['0%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'refresh5',
            display:'none',
            type:'image',
            rect:['91.7%','-0.3%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/refresh.png','0px','0px']
         },
         {
            id:'next_to_6',
            display:'none',
            type:'image',
            rect:['91.7%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'zapojte',
            display:'none',
            type:'text',
            rect:['1.5%','7.2%','26.7%','17.5%','auto','auto'],
            text:"Zapojte ",
            align:"center",
            font:['hobo-std, sans-serif',[500,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'hadicku',
            display:'none',
            type:'text',
            rect:['29%','7.2%','29%','17.5%','auto','auto'],
            text:"hadičku",
            align:"center",
            font:['hobo-std, sans-serif',[500,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'dopristroja',
            display:'none',
            type:'text',
            rect:['57.2%','7.2%','40.4%','17.5%','auto','auto'],
            text:" do prístroja",
            align:"center",
            font:['hobo-std, sans-serif',[500,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'_1merac4',
            display:'none',
            type:'image',
            rect:['63.8%','52.5%','37.5%','62.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/1merac.png','0px','0px']
         },
         {
            id:'_1rukav2',
            display:'none',
            type:'image',
            rect:['7.3%','43.9%','33.9%','43.2%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/1rukav.png','0px','0px']
         },
         {
            id:'refresh6',
            display:'none',
            type:'image',
            rect:['91.7%','0%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/refresh.png','0px','0px']
         },
         {
            id:'bact_to_5',
            display:'none',
            type:'image',
            rect:['0%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'next_to_7',
            display:'none',
            type:'image',
            rect:['91.7%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'_6a',
            display:'none',
            type:'image',
            rect:['-3.8%','0%','88.6%','86.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/6a.png','0px','0px']
         },
         {
            id:'Rectangle3',
            display:'none',
            type:'rect',
            rect:['56.8%','28.6%','41%','19.4%','auto','auto'],
            borderRadius:["5% 5%","5% 5%","5% 5%","0px"],
            fill:["rgba(136,165,185,0.96)"],
            stroke:[10,"rgba(136,165,185,1.00)","solid"]
         },
         {
            id:'_6c',
            display:'none',
            type:'image',
            rect:['25.7%','41.4%','33.5%','13.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/6c.png','0px','0px'],
            transform:[[],['3']]
         },
         {
            id:'text7',
            display:'none',
            type:'text',
            rect:['40.5%','4.4%','48.4%','25.3%','auto','auto'],
            text:"Položte ruku na stôl, dlaňou hore,",
            align:"center",
            font:['hobo-std, sans-serif',[340,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'text7Copy',
            display:'none',
            type:'text',
            rect:['54.5%','28.9%','48.4%','25.3%','auto','auto'],
            text:"manžetou vo výške Vášho srdca.",
            align:"center",
            font:['hobo-std, sans-serif',[340,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'_6d',
            display:'none',
            type:'image',
            rect:['59.5%','42.5%','7.4%','8%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/6d.png','0px','0px'],
            transform:[[],['3']]
         },
         {
            id:'beat_miniCopy',
            display:'none',
            type:'ellipse',
            rect:['49.8%','68.1%','2.9%','4.9%','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(255,21,21,0.00)"],
            stroke:[10,"rgba(255,0,0,1.00)","solid"],
            transform:[[],[],['-12','-1']]
         },
         {
            id:'disp3',
            type:'image',
            rect:['50.5%','63.1%','44.4%','85%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/disp.png','0px','0px']
         },
         {
            id:'beat_miniCopy2',
            display:'none',
            type:'ellipse',
            rect:['48.7%','66.2%','5%','8.3%','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(255,21,21,0.00)"],
            stroke:[10,"rgba(255,0,0,1.00)","solid"],
            transform:[[],[],['-12','-1']]
         },
         {
            id:'text7Copy2',
            type:'text',
            rect:['40.5%','4.4%','48.4%','25.3%','auto','auto'],
            text:"Koniec",
            align:"center",
            font:['hobo-std, sans-serif',[340,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'text7Copy3',
            display:'none',
            type:'text',
            rect:['54.8%','54.6%','41.1%','16.1%','auto','auto'],
            text:"TEAM: pim3",
            align:"center",
            font:['hobo-std, sans-serif',[340,"%"],"rgba(0,0,0,1)","500","none","normal"]
         },
         {
            id:'next_finall',
            display:'none',
            type:'image',
            rect:['91.7%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'back_to_6',
            display:'none',
            type:'image',
            rect:['0%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'refresh7',
            display:'none',
            type:'image',
            rect:['91.7%','0%','8.3%','13.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/refresh.png','0px','0px']
         }],
         symbolInstances: [
         {
            id:'package',
            symbolName:'package'
         }
         ]
      },
   states: {
      "Base State": {
         "${_kvota_cisloCopy}": [
            ["style", "top", '51.39%'],
            ["style", "width", '49.26%'],
            ["color", "color", 'rgba(255,0,0,1)'],
            ["style", "height", '16.11%'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '39.83%'],
            ["style", "font-size", '450%']
         ],
         "${_beat_miniCopy}": [
            ["color", "background-color", 'rgba(255,21,21,0)'],
            ["style", "opacity", '1'],
            ["style", "left", '49.75%'],
            ["style", "width", '2.92%'],
            ["style", "top", '68.05%'],
            ["transform", "skewY", '-1deg'],
            ["transform", "skewX", '-12deg'],
            ["style", "height", '4.86%'],
            ["color", "border-color", 'rgb(255, 0, 0)'],
            ["style", "border-width", '10px'],
            ["style", "display", 'none']
         ],
         "${_back_to_6}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_text7Copy2}": [
            ["style", "letter-spacing", '0em'],
            ["style", "opacity", '0'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", '500'],
            ["style", "left", '59.33%'],
            ["style", "width", '26.22%'],
            ["style", "top", '17.08%'],
            ["style", "display", 'block'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '16.11%'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '500%']
         ],
         "${_text7}": [
            ["style", "letter-spacing", '0em'],
            ["style", "width", '48.38%'],
            ["style", "word-spacing", '0em'],
            ["style", "height", '25.28%'],
            ["style", "font-weight", '500'],
            ["style", "left", '40.5%'],
            ["style", "font-size", '340%'],
            ["style", "top", '4.44%'],
            ["style", "font-style", 'normal'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'none'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "opacity", '0']
         ],
         "${_back_to_main}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_bact_to_5}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_Text4Copy}": [
            ["style", "top", '3.33%'],
            ["style", "font-size", '280%'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "height", '15.84%'],
            ["style", "opacity", '0'],
            ["style", "left", '13.33%'],
            ["style", "width", '73.35%']
         ],
         "${__3}": [
            ["style", "top", '0%'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '100%'],
            ["style", "display", 'none'],
            ["style", "left", '7.5%'],
            ["style", "width", '57.18%']
         ],
         "${_text5Copy}": [
            ["style", "letter-spacing", '0em'],
            ["style", "opacity", '0'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", '500'],
            ["style", "left", '25%'],
            ["style", "width", '56.36%'],
            ["style", "top", '17.22%'],
            ["style", "height", '13.89%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'none'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '400%']
         ],
         "${_bact_to_2}": [
            ["style", "top", '86.11%'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_dopristroja}": [
            ["style", "letter-spacing", '0em'],
            ["style", "font-weight", '500'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '57.17%'],
            ["style", "font-size", '500%'],
            ["style", "top", '7.22%'],
            ["style", "height", '17.5%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'none'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '40.37%']
         ],
         "${_refresh7}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.66%'],
            ["style", "width", '8.34%']
         ],
         "${_ruka5}": [
            ["style", "top", '-0.28%'],
            ["style", "display", 'none'],
            ["style", "height", '100%'],
            ["style", "left", '0%'],
            ["style", "width", '100%']
         ],
         "${_bact_to_3}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_hadicku}": [
            ["style", "letter-spacing", '0em'],
            ["style", "font-weight", '500'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '1'],
            ["style", "left", '28.96%'],
            ["style", "font-size", '500%'],
            ["style", "top", '7.22%'],
            ["style", "height", '17.5%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'none'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '29.04%']
         ],
         "${_beat_miniCopy2}": [
            ["color", "background-color", 'rgba(255,21,21,0)'],
            ["style", "opacity", '1'],
            ["style", "left", '48.72%'],
            ["style", "width", '5%'],
            ["style", "top", '66.21%'],
            ["transform", "skewY", '-1deg'],
            ["transform", "skewX", '-12deg'],
            ["style", "height", '8.33%'],
            ["color", "border-color", 'rgb(255, 0, 0)'],
            ["style", "border-width", '10px'],
            ["style", "display", 'none']
         ],
         "${_next_finall}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '198px'],
            ["style", "font-size", '280%'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,21,21,1.00)'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '571px'],
            ["style", "width", '425px']
         ],
         "${_next_to_3}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "left", '91.67%'],
            ["style", "height", '13.89%'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_next_to_6}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_kvota4}": [
            ["style", "letter-spacing", '0em'],
            ["style", "font-weight", '500'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '46.33%'],
            ["style", "font-size", '260%'],
            ["style", "top", '67.5%'],
            ["style", "height", '24.44%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'none'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '46.19%']
         ],
         "${_kvota2}": [
            ["style", "letter-spacing", '0em'],
            ["style", "opacity", '0'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", '500'],
            ["style", "left", '30.48%'],
            ["style", "width", '66.18%'],
            ["style", "top", '16.39%'],
            ["style", "height", '13.89%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'none'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '380%']
         ],
         "${_Text}": [
            ["style", "letter-spacing", '0em'],
            ["style", "font-weight", '500'],
            ["style", "text-decoration", 'none'],
            ["style", "height", '96px'],
            ["style", "opacity", '0'],
            ["style", "left", '228px'],
            ["style", "font-size", '400%'],
            ["style", "top", '67px'],
            ["style", "font-style", 'normal'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'block'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '744px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(209,233,232,1.00)'],
            ["style", "min-width", '10%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_kvota1}": [
            ["style", "letter-spacing", '0em'],
            ["style", "width", '78.67%'],
            ["style", "word-spacing", '0em'],
            ["style", "height", '15.09%'],
            ["style", "font-weight", '500'],
            ["style", "left", '11.67%'],
            ["style", "font-size", '380%'],
            ["style", "top", '2.92%'],
            ["style", "font-style", 'normal'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'none'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "opacity", '0']
         ],
         "${_ruka}": [
            ["style", "top", '0%'],
            ["style", "height", '84.76%'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '0%'],
            ["style", "width", '91.5%']
         ],
         "${_Rectangle2}": [
            ["style", "top", '52.22%'],
            ["style", "height", '98px'],
            ["color", "background-color", 'rgba(255,21,21,1.00)'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '28.67%'],
            ["style", "width", '2.09%']
         ],
         "${_beat_mini}": [
            ["color", "background-color", 'rgba(255,21,21,0)'],
            ["style", "opacity", '1'],
            ["style", "left", '25.67%'],
            ["style", "width", '5%'],
            ["style", "top", '54.03%'],
            ["style", "height", '8.33%'],
            ["color", "border-color", 'rgb(255, 0, 0)'],
            ["style", "border-width", '10px'],
            ["style", "display", 'none']
         ],
         "${_refresh3b}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_Text4Copy3}": [
            ["style", "top", '34.44%'],
            ["style", "font-size", '280%'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "height", '8.89%'],
            ["style", "opacity", '0'],
            ["style", "left", '60.33%'],
            ["style", "width", '17.03%']
         ],
         "${_refresh4}": [
            ["style", "top", '-0.56%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.66%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_next_to_7}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_Text4}": [
            ["style", "top", '13.89%'],
            ["style", "width", '84.02%'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '10.28%'],
            ["style", "opacity", '0'],
            ["style", "left", '15.98%'],
            ["style", "font-size", '280%']
         ],
         "${_next_to_3b}": [
            ["style", "top", '86.11%'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${__6c}": [
            ["style", "top", '41.39%'],
            ["transform", "rotateZ", '3deg'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '25.67%']
         ],
         "${_disp3}": [
            ["transform", "rotateZ", '2deg'],
            ["style", "opacity", '0'],
            ["style", "left", '54.9%'],
            ["style", "width", '7.5%'],
            ["style", "top", '53.72%'],
            ["transform", "skewY", '7deg'],
            ["transform", "skewX", '-20deg'],
            ["style", "height", '12.5%'],
            ["style", "display", 'block']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(136,165,185,0.96)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "opacity", '1'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '41%'],
            ["style", "top", '28.05%'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '19.44%'],
            ["color", "border-color", 'rgba(136,165,185,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '57.16%']
         ],
         "${_kvota_cislo}": [
            ["style", "top", '10.56%'],
            ["style", "font-size", '450%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["color", "color", 'rgba(255,0,0,1.00)'],
            ["style", "left", '43.25%'],
            ["style", "width", '35.59%']
         ],
         "${_Text4Copy2}": [
            ["style", "top", '24.17%'],
            ["style", "width", '73.36%'],
            ["style", "display", 'block'],
            ["style", "height", '10.28%'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '32.17%'],
            ["style", "font-size", '280%']
         ],
         "${_ruka_fig2}": [
            ["style", "top", '6.66%'],
            ["style", "display", 'block'],
            ["style", "height", '88.89%'],
            ["style", "opacity", '0'],
            ["style", "left", '0%'],
            ["style", "width", '100%']
         ],
         "${__6d}": [
            ["style", "top", '42.5%'],
            ["style", "height", '8.02%'],
            ["transform", "rotateZ", '3deg'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '59.45%'],
            ["style", "width", '7.38%']
         ],
         "${__1merac4}": [
            ["style", "top", '52.5%'],
            ["style", "display", 'none'],
            ["style", "height", '62.5%'],
            ["style", "opacity", '0'],
            ["style", "left", '63.83%'],
            ["style", "width", '37.5%']
         ],
         "${_package}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '136px']
         ],
         "${_bact_to_4}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_zapojte}": [
            ["style", "letter-spacing", '0em'],
            ["style", "font-size", '500%'],
            ["style", "word-spacing", '0em'],
            ["style", "height", '17.5%'],
            ["style", "opacity", '0'],
            ["style", "left", '1.46%'],
            ["style", "width", '26.71%'],
            ["style", "top", '7.22%'],
            ["style", "font-style", 'normal'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'none'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-weight", '500']
         ],
         "${__6a}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '-3.83%'],
            ["style", "width", '88.59%']
         ],
         "${_refresh6}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_Text2-3}": [
            ["style", "letter-spacing", '0em'],
            ["style", "font-weight", '500'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '22.84%'],
            ["style", "font-size", '380%'],
            ["style", "top", '79.03%'],
            ["style", "height", '11.48%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'none'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '62%']
         ],
         "${_text7Copy}": [
            ["style", "letter-spacing", '0em'],
            ["style", "opacity", '1'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", '500'],
            ["style", "left", '54.83%'],
            ["style", "width", '48.38%'],
            ["style", "top", '28.33%'],
            ["style", "height", '25.28%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'none'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '340%']
         ],
         "${_Rectangle}": [
            ["style", "top", '24.17%'],
            ["color", "background-color", 'rgba(255,21,21,1.00)'],
            ["style", "display", 'block'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '36.47%'],
            ["style", "width", '8.11%']
         ],
         "${_kvota3Copy2}": [
            ["style", "letter-spacing", '0em'],
            ["style", "font-weight", '500'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '35.08%'],
            ["style", "font-size", '380%'],
            ["style", "top", '14.71%'],
            ["style", "height", '26.67%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'block'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '59.19%']
         ],
         "${_next_to_4}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_next_to_5}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_sipka}": [
            ["style", "top", '14.89%'],
            ["transform", "skewX", '-4deg'],
            ["style", "height", '20.28%'],
            ["transform", "rotateZ", '-42deg'],
            ["style", "display", 'block'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '44.31%'],
            ["style", "width", '17.72%']
         ],
         "${_back_to_3b}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_text5}": [
            ["style", "letter-spacing", '0em'],
            ["style", "width", '89.69%'],
            ["style", "word-spacing", '0em'],
            ["style", "height", '13.89%'],
            ["style", "font-weight", '500'],
            ["style", "left", '4.17%'],
            ["style", "font-size", '400%'],
            ["style", "top", '2.49%'],
            ["style", "font-style", 'normal'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'none'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "opacity", '0']
         ],
         "${__1rukav2}": [
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '5.66%'],
            ["style", "width", '39.92%'],
            ["style", "top", '36.94%'],
            ["transform", "scaleY", '-0.99'],
            ["style", "display", 'none'],
            ["style", "height", '52.64%']
         ],
         "${_refresh5}": [
            ["style", "top", '-0.28%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.66%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_next_to_2}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.5%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_refresh_main}": [
            ["style", "top", '-0.28%'],
            ["style", "height", '13.89%'],
            ["style", "display", 'block'],
            ["style", "left", '91.33%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_kvota3}": [
            ["style", "letter-spacing", '0em'],
            ["style", "font-size", '380%'],
            ["style", "word-spacing", '0em'],
            ["style", "height", '13.89%'],
            ["style", "opacity", '0'],
            ["style", "left", '45.48%'],
            ["style", "width", '54.52%'],
            ["style", "top", '31.39%'],
            ["style", "font-style", 'normal'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'none'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-weight", '500']
         ],
         "${_Text2-2Copy2}": [
            ["style", "letter-spacing", '0em'],
            ["style", "font-size", '380%'],
            ["style", "word-spacing", '0em'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '32.46%'],
            ["style", "width", '62%'],
            ["style", "top", '60.28%'],
            ["style", "font-style", 'normal'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '11.48%'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-weight", '500']
         ],
         "${_beat}": [
            ["style", "top", '48.89%'],
            ["style", "border-width", '10px'],
            ["style", "height", '19.44%'],
            ["color", "border-color", 'rgba(255,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '22.33%'],
            ["color", "background-color", 'rgba(255,21,21,0.00)']
         ],
         "${_refresh3}": [
            ["style", "top", '0%'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.66%'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_Text2-1}": [
            ["style", "letter-spacing", '0em'],
            ["style", "opacity", '0'],
            ["style", "text-decoration", 'none'],
            ["style", "height", '11.48%'],
            ["style", "font-weight", '500'],
            ["style", "left", '36%'],
            ["style", "width", '62%'],
            ["style", "top", '42.36%'],
            ["style", "display", 'none'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '380%']
         ],
         "${_refresh2}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "left", '91.67%'],
            ["style", "height", '13.89%'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${__2b}": [
            ["style", "display", 'none'],
            ["style", "left", '50%'],
            ["style", "top", '28.06%']
         ],
         "${_text7Copy3}": [
            ["style", "letter-spacing", '0em'],
            ["style", "font-size", '500%'],
            ["style", "word-spacing", '0em'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '54.83%'],
            ["style", "width", '41.06%'],
            ["style", "top", '54.58%'],
            ["style", "height", '16.11%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-weight", '500']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 57000,
         autoPlay: true,
         labels: {
            "show next": 6750,
            "start_2": 7000,
            "start_loop1": 11500,
            "end_loop1": 12500,
            "start_3": 13000,
            "stop_3": 16000,
            "start_3b": 17000,
            "loop_start_3b": 19000,
            "loop_stop_3b": 23309,
            "start_4": 25000,
            "loop_start_4": 28000,
            "loop_stop_4": 31000,
            "start_5": 32000,
            "loop_start_beat": 34000,
            "loop_stop_beat": 36488,
            "start_6": 37000,
            "stop_6": 41000,
            "start_7": 42000,
            "start_finall": 50016,
            "start_konec": 55000,
            "konec": 57000
         },
         timeline: [
            { id: "eid544", tween: [ "style", "${_refresh6}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid547", tween: [ "style", "${_refresh6}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid668", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid568", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid571", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 43000, duration: 0, easing: "swing" },
            { id: "eid172", tween: [ "style", "${_Text2-1}", "font-size", '380%', { fromValue: '380%'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid424", tween: [ "style", "${_back_to_3b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid414", tween: [ "style", "${_back_to_3b}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid427", tween: [ "style", "${_back_to_3b}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid673", tween: [ "style", "${_beat_miniCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid594", tween: [ "style", "${_beat_miniCopy2}", "display", 'none', { fromValue: 'none'}], position: 48000, duration: 0, easing: "swing" },
            { id: "eid596", tween: [ "style", "${_beat_miniCopy2}", "display", 'block', { fromValue: 'none'}], position: 48485, duration: 0, easing: "swing" },
            { id: "eid597", tween: [ "style", "${_beat_miniCopy2}", "display", 'none', { fromValue: 'block'}], position: 49000, duration: 0, easing: "swing" },
            { id: "eid612", tween: [ "transform", "${_disp3}", "skewY", '7deg', { fromValue: '7deg'}], position: 48000, duration: 0, easing: "swing" },
            { id: "eid686", tween: [ "transform", "${_disp3}", "skewY", '0deg', { fromValue: '7deg'}], position: 49000, duration: 5000, easing: "swing" },
            { id: "eid696", tween: [ "style", "${_text7Copy2}", "font-size", '500%', { fromValue: '500%'}], position: 54000, duration: 0, easing: "swing" },
            { id: "eid539", tween: [ "style", "${__1merac4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid556", tween: [ "style", "${__1merac4}", "display", 'block', { fromValue: 'none'}], position: 39000, duration: 0, easing: "swing" },
            { id: "eid533", tween: [ "style", "${__1merac4}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid413", tween: [ "style", "${_kvota3Copy2}", "display", 'block', { fromValue: 'block'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid430", tween: [ "style", "${_kvota3Copy2}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid407", tween: [ "style", "${__3}", "left", '7.5%', { fromValue: '7.5%'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid187", tween: [ "style", "${_back_to_main}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid307", tween: [ "style", "${__2b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid303", tween: [ "style", "${__2b}", "display", 'none', { fromValue: 'none'}], position: 19000, duration: 0, easing: "swing" },
            { id: "eid305", tween: [ "style", "${__2b}", "display", 'block', { fromValue: 'none'}], position: 21217, duration: 0, easing: "swing" },
            { id: "eid373", tween: [ "style", "${__2b}", "display", 'none', { fromValue: 'block'}], position: 23181, duration: 0, easing: "swing" },
            { id: "eid379", tween: [ "style", "${__2b}", "display", 'none', { fromValue: 'none'}], position: 23309, duration: 0, easing: "swing" },
            { id: "eid716", tween: [ "style", "${_ruka_fig2}", "top", '6.94%', { fromValue: '6.66%'}], position: 6750, duration: 2844 },
            { id: "eid601", tween: [ "style", "${_disp3}", "left", '54.92%', { fromValue: '54.9%'}], position: 48000, duration: 1000, easing: "swing" },
            { id: "eid683", tween: [ "style", "${_disp3}", "left", '4.75%', { fromValue: '54.92%'}], position: 49000, duration: 5000, easing: "swing" },
            { id: "eid698", tween: [ "style", "${_text7Copy2}", "width", '26.22%', { fromValue: '26.22%'}], position: 54000, duration: 0, easing: "swing" },
            { id: "eid587", tween: [ "style", "${_Rectangle3}", "border-bottom-right-radius", [10,10], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10,10]}], position: 44019, duration: 0, easing: "swing" },
            { id: "eid186", tween: [ "style", "${_ruka}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid564", tween: [ "style", "${__1rukav2}", "width", '49.58%', { fromValue: '39.92%'}], position: 39000, duration: 1000, easing: "swing" },
            { id: "eid280", tween: [ "style", "${_kvota4}", "opacity", '1', { fromValue: '0'}], position: 17755, duration: 1245, easing: "swing" },
            { id: "eid293", tween: [ "style", "${_kvota4}", "opacity", '1', { fromValue: '1'}], position: 21010, duration: 0, easing: "swing" },
            { id: "eid543", tween: [ "style", "${_bact_to_5}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid546", tween: [ "style", "${_bact_to_5}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid700", tween: [ "style", "${_text7Copy2}", "top", '17.08%', { fromValue: '17.08%'}], position: 54000, duration: 0, easing: "swing" },
            { id: "eid699", tween: [ "style", "${_text7Copy2}", "left", '59.33%', { fromValue: '59.33%'}], position: 54000, duration: 0, easing: "swing" },
            { id: "eid261", tween: [ "style", "${_kvota4}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid296", tween: [ "style", "${_kvota4}", "display", 'none', { fromValue: 'block'}], position: 21005, duration: 0, easing: "swing" },
            { id: "eid380", tween: [ "style", "${_kvota4}", "display", 'none', { fromValue: 'none'}], position: 23309, duration: 0, easing: "swing" },
            { id: "eid173", tween: [ "style", "${_ruka}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid174", tween: [ "style", "${_ruka}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid196", tween: [ "style", "${_ruka}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid631", tween: [ "style", "${__6a}", "top", '-0.28%', { fromValue: '0%'}], position: 50016, duration: 3984, easing: "swing" },
            { id: "eid458", tween: [ "style", "${_beat}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid448", tween: [ "style", "${_beat}", "display", 'none', { fromValue: 'none'}], position: 34000, duration: 0, easing: "swing" },
            { id: "eid455", tween: [ "style", "${_beat}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0, easing: "swing" },
            { id: "eid457", tween: [ "style", "${_beat}", "display", 'none', { fromValue: 'block'}], position: 36000, duration: 0, easing: "swing" },
            { id: "eid465", tween: [ "style", "${_beat}", "display", 'none', { fromValue: 'none'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid481", tween: [ "style", "${_dopristroja}", "opacity", '1', { fromValue: '0'}], position: 39000, duration: 1000, easing: "swing" },
            { id: "eid610", tween: [ "transform", "${_disp3}", "skewX", '-20deg', { fromValue: '-20deg'}], position: 48000, duration: 0, easing: "swing" },
            { id: "eid685", tween: [ "transform", "${_disp3}", "skewX", '0deg', { fromValue: '-20deg'}], position: 49000, duration: 5000, easing: "swing" },
            { id: "eid713", tween: [ "style", "${_refresh4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid707", tween: [ "style", "${_refresh4}", "display", 'none', { fromValue: 'none'}], position: 8000, duration: 0, easing: "easeInQuad" },
            { id: "eid708", tween: [ "style", "${_refresh4}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0, easing: "easeInQuad" },
            { id: "eid425", tween: [ "style", "${_refresh4}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid703", tween: [ "style", "${_text7Copy2}", "opacity", '1', { fromValue: '0'}], position: 54000, duration: 1000, easing: "swing" },
            { id: "eid680", tween: [ "style", "${__6a}", "opacity", '0', { fromValue: '1'}], position: 50016, duration: 3984, easing: "swing" },
            { id: "eid262", tween: [ "style", "${_kvota3}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid298", tween: [ "style", "${_kvota3}", "display", 'none', { fromValue: 'block'}], position: 21010, duration: 0, easing: "swing" },
            { id: "eid381", tween: [ "style", "${_kvota3}", "display", 'none', { fromValue: 'none'}], position: 23309, duration: 0, easing: "swing" },
            { id: "eid355", tween: [ "style", "${_bact_to_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid358", tween: [ "style", "${_bact_to_2}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid255", tween: [ "style", "${_bact_to_2}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid165", tween: [ "style", "${_Text2-2Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid166", tween: [ "style", "${_Text2-2Copy2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid199", tween: [ "style", "${_Text2-2Copy2}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid572", tween: [ "style", "${_text7Copy}", "opacity", '0', { fromValue: '1'}], position: 42000, duration: 1000, easing: "swing" },
            { id: "eid574", tween: [ "style", "${_text7Copy}", "opacity", '1', { fromValue: '0'}], position: 43000, duration: 1000, easing: "swing" },
            { id: "eid624", tween: [ "style", "${_text7Copy}", "opacity", '0', { fromValue: '1'}], position: 50016, duration: 3984, easing: "swing" },
            { id: "eid7", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2000, easing: "easeInExpo" },
            { id: "eid226", tween: [ "style", "${_Text4}", "width", '84.02%', { fromValue: '84.02%'}], position: 15000, duration: 0, easing: "swing" },
            { id: "eid477", tween: [ "style", "${_hadicku}", "opacity", '0', { fromValue: '1'}], position: 37000, duration: 1000, easing: "swing" },
            { id: "eid478", tween: [ "style", "${_hadicku}", "opacity", '1', { fromValue: '0'}], position: 38000, duration: 1000, easing: "swing" },
            { id: "eid29", tween: [ "style", "${_package}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInExpo" },
            { id: "eid28", tween: [ "style", "${_package}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1250, easing: "easeInExpo" },
            { id: "eid361", tween: [ "style", "${_bact_to_2}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid437", tween: [ "style", "${_ruka5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid443", tween: [ "style", "${_ruka5}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid469", tween: [ "style", "${_ruka5}", "display", 'none', { fromValue: 'block'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid400", tween: [ "style", "${__3}", "top", '0%', { fromValue: '0%'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid227", tween: [ "style", "${_Text4}", "left", '15.98%', { fromValue: '15.98%'}], position: 15000, duration: 0, easing: "swing" },
            { id: "eid563", tween: [ "transform", "${__1rukav2}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 39000, duration: 1000, easing: "swing" },
            { id: "eid387", tween: [ "transform", "${__3}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid162", tween: [ "style", "${_Text2-2Copy2}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid163", tween: [ "style", "${_Text2-2Copy2}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 1500, easing: "easeInCirc" },
            { id: "eid189", tween: [ "style", "${_Text2-2Copy2}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid626", tween: [ "style", "${__6d}", "opacity", '0', { fromValue: '1'}], position: 50016, duration: 3984, easing: "swing" },
            { id: "eid555", tween: [ "style", "${__1rukav2}", "opacity", '1', { fromValue: '0'}], position: 38000, duration: 1000, easing: "swing" },
            { id: "eid322", tween: [ "style", "${_refresh2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid75", tween: [ "style", "${_refresh2}", "display", 'none', { fromValue: 'none'}], position: 6750, duration: 0, easing: "easeInCirc" },
            { id: "eid77", tween: [ "style", "${_refresh2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid202", tween: [ "style", "${_refresh2}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid161", tween: [ "style", "${_Text2-2Copy2}", "top", '60.28%', { fromValue: '60.28%'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid705", tween: [ "style", "${_text7Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid701", tween: [ "style", "${_text7Copy3}", "display", 'none', { fromValue: 'none'}], position: 54000, duration: 0, easing: "swing" },
            { id: "eid704", tween: [ "style", "${_text7Copy3}", "display", 'block', { fromValue: 'none'}], position: 55000, duration: 0, easing: "easeInQuad" },
            { id: "eid385", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid386", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid431", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid364", tween: [ "style", "${_bact_to_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid367", tween: [ "style", "${_bact_to_3}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid376", tween: [ "style", "${_bact_to_3}", "display", 'none', { fromValue: 'block'}], position: 23309, duration: 0, easing: "swing" },
            { id: "eid206", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '0'}], position: 13013, duration: 0, easing: "easeInCirc" },
            { id: "eid249", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 1000, easing: "swing" },
            { id: "eid697", tween: [ "style", "${_text7Copy2}", "height", '16.11%', { fromValue: '16.11%'}], position: 54000, duration: 0, easing: "swing" },
            { id: "eid711", tween: [ "style", "${_refresh7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid706", tween: [ "style", "${_refresh7}", "display", 'none', { fromValue: 'none'}], position: 8000, duration: 0, easing: "easeInQuad" },
            { id: "eid676", tween: [ "style", "${_refresh7}", "display", 'none', { fromValue: 'none'}], position: 40705, duration: 0, easing: "swing" },
            { id: "eid677", tween: [ "style", "${_refresh7}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid629", tween: [ "style", "${_refresh7}", "display", 'none', { fromValue: 'block'}], position: 54000, duration: 0, easing: "swing" },
            { id: "eid595", tween: [ "style", "${_beat_miniCopy}", "display", 'block', { fromValue: 'none'}], position: 48000, duration: 0, easing: "swing" },
            { id: "eid598", tween: [ "style", "${_beat_miniCopy}", "display", 'none', { fromValue: 'block'}], position: 49000, duration: 0, easing: "swing" },
            { id: "eid212", tween: [ "style", "${_Text4}", "font-size", '280%', { fromValue: '280%'}], position: 15000, duration: 0, easing: "swing" },
            { id: "eid452", tween: [ "style", "${_beat}", "opacity", '1', { fromValue: '1'}], position: 34000, duration: 0, easing: "swing" },
            { id: "eid171", tween: [ "style", "${_Text2-1}", "left", '36%', { fromValue: '36%'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid714", tween: [ "style", "${_refresh_main}", "left", '91.33%', { fromValue: '91.33%'}], position: 0, duration: 0 },
            { id: "eid432", tween: [ "style", "${_next_to_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid438", tween: [ "style", "${_next_to_6}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid464", tween: [ "style", "${_next_to_6}", "display", 'none', { fromValue: 'block'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid599", tween: [ "style", "${_disp3}", "height", '12.51%', { fromValue: '12.5%'}], position: 48000, duration: 1000, easing: "swing" },
            { id: "eid681", tween: [ "style", "${_disp3}", "height", '77.56%', { fromValue: '12.5%'}], position: 49000, duration: 5000, easing: "swing" },
            { id: "eid306", tween: [ "style", "${_kvota_cislo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid302", tween: [ "style", "${_kvota_cislo}", "display", 'none', { fromValue: 'none'}], position: 19000, duration: 0, easing: "swing" },
            { id: "eid304", tween: [ "style", "${_kvota_cislo}", "display", 'block', { fromValue: 'none'}], position: 21217, duration: 0, easing: "swing" },
            { id: "eid372", tween: [ "style", "${_kvota_cislo}", "display", 'none', { fromValue: 'block'}], position: 23181, duration: 0, easing: "swing" },
            { id: "eid378", tween: [ "style", "${_kvota_cislo}", "display", 'none', { fromValue: 'none'}], position: 23309, duration: 0, easing: "swing" },
            { id: "eid360", tween: [ "style", "${_next_to_3b}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid669", tween: [ "style", "${__6c}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid549", tween: [ "style", "${__6c}", "display", 'none', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid576", tween: [ "style", "${__6c}", "display", 'block', { fromValue: 'none'}], position: 44000, duration: 0, easing: "swing" },
            { id: "eid579", tween: [ "style", "${__6c}", "display", 'none', { fromValue: 'block'}], position: 45000, duration: 0, easing: "swing" },
            { id: "eid589", tween: [ "style", "${__6c}", "display", 'block', { fromValue: 'none'}], position: 46000, duration: 0, easing: "swing" },
            { id: "eid591", tween: [ "style", "${__6c}", "display", 'none', { fromValue: 'block'}], position: 47000, duration: 0, easing: "swing" },
            { id: "eid593", tween: [ "style", "${__6c}", "display", 'block', { fromValue: 'none'}], position: 48000, duration: 0, easing: "swing" },
            { id: "eid234", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'block'}], position: 13013, duration: 0, easing: "swing" },
            { id: "eid258", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid606", tween: [ "style", "${_disp3}", "width", '7.5%', { fromValue: '7.5%'}], position: 48000, duration: 0, easing: "swing" },
            { id: "eid684", tween: [ "style", "${_disp3}", "width", '42.67%', { fromValue: '7.5%'}], position: 49000, duration: 5000, easing: "swing" },
            { id: "eid583", tween: [ "style", "${_Rectangle3}", "top", '28.05%', { fromValue: '28.05%'}], position: 44019, duration: 0, easing: "swing" },
            { id: "eid155", tween: [ "style", "${_sipka}", "opacity", '1', { fromValue: '0.000000'}], position: 11500, duration: 500, easing: "easeInCirc" },
            { id: "eid156", tween: [ "style", "${_sipka}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 500, easing: "easeInCirc" },
            { id: "eid195", tween: [ "style", "${_sipka}", "opacity", '0', { fromValue: '0'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid205", tween: [ "style", "${_sipka}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid264", tween: [ "style", "${_kvota1}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid299", tween: [ "style", "${_kvota1}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0, easing: "swing" },
            { id: "eid383", tween: [ "style", "${_kvota1}", "display", 'none', { fromValue: 'none'}], position: 23309, duration: 0, easing: "swing" },
            { id: "eid674", tween: [ "style", "${_back_to_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid678", tween: [ "style", "${_back_to_6}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid627", tween: [ "style", "${_back_to_6}", "display", 'none', { fromValue: 'block'}], position: 54000, duration: 0, easing: "swing" },
            { id: "eid553", tween: [ "style", "${__1rukav2}", "left", '5.66%', { fromValue: '5.66%'}], position: 38000, duration: 0, easing: "swing" },
            { id: "eid561", tween: [ "style", "${__1rukav2}", "left", '25.68%', { fromValue: '5.66%'}], position: 39000, duration: 1000, easing: "swing" },
            { id: "eid435", tween: [ "style", "${_text5Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid441", tween: [ "style", "${_text5Copy}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid467", tween: [ "style", "${_text5Copy}", "display", 'none', { fromValue: 'block'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid472", tween: [ "style", "${_dopristroja}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid479", tween: [ "style", "${_dopristroja}", "display", 'block', { fromValue: 'none'}], position: 39000, duration: 0, easing: "swing" },
            { id: "eid536", tween: [ "style", "${_dopristroja}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid279", tween: [ "style", "${_kvota3}", "opacity", '1', { fromValue: '0'}], position: 17500, duration: 1000, easing: "swing" },
            { id: "eid294", tween: [ "style", "${_kvota3}", "opacity", '1', { fromValue: '1'}], position: 19000, duration: 0, easing: "swing" },
            { id: "eid295", tween: [ "style", "${_kvota3}", "opacity", '1', { fromValue: '1'}], position: 21015, duration: 0, easing: "swing" },
            { id: "eid557", tween: [ "style", "${__1merac4}", "top", '23.61%', { fromValue: '52.5%'}], position: 38000, duration: 1000, easing: "swing" },
            { id: "eid203", tween: [ "style", "${_Text2Copy2}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid675", tween: [ "style", "${_next_finall}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid679", tween: [ "style", "${_next_finall}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid628", tween: [ "style", "${_next_finall}", "display", 'none', { fromValue: 'block'}], position: 54000, duration: 0, easing: "swing" },
            { id: "eid585", tween: [ "style", "${_Rectangle3}", "border-top-left-radius", [10,10], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10,10]}], position: 44019, duration: 0, easing: "swing" },
            { id: "eid623", tween: [ "style", "${__6c}", "opacity", '0', { fromValue: '1'}], position: 50016, duration: 3984, easing: "swing" },
            { id: "eid473", tween: [ "style", "${_hadicku}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid476", tween: [ "style", "${_hadicku}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0, easing: "swing" },
            { id: "eid537", tween: [ "style", "${_hadicku}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid718", tween: [ "style", "${_kvota_cisloCopy}", "top", '51.39%', { fromValue: '51.39%'}], position: 6750, duration: 0 },
            { id: "eid717", tween: [ "style", "${_kvota_cisloCopy}", "left", '39.83%', { fromValue: '39.83%'}], position: 6750, duration: 0 },
            { id: "eid72", tween: [ "style", "${_refresh_main}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid62", tween: [ "style", "${_next_to_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid63", tween: [ "style", "${_next_to_2}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0, easing: "swing" },
            { id: "eid66", tween: [ "style", "${_next_to_2}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0, easing: "easeInExpo" },
            { id: "eid715", tween: [ "style", "${_refresh_main}", "top", '-0.28%', { fromValue: '-0.28%'}], position: 0, duration: 0 },
            { id: "eid712", tween: [ "style", "${_refresh4}", "top", '-0.56%', { fromValue: '-0.56%'}], position: 0, duration: 0 },
            { id: "eid223", tween: [ "style", "${_Text4}", "top", '13.89%', { fromValue: '13.89%'}], position: 15000, duration: 0, easing: "swing" },
            { id: "eid434", tween: [ "style", "${_bact_to_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid440", tween: [ "style", "${_bact_to_4}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid462", tween: [ "style", "${_bact_to_4}", "display", 'none', { fromValue: 'block'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid412", tween: [ "style", "${_kvota_cisloCopy}", "display", 'block', { fromValue: 'block'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid429", tween: [ "style", "${_kvota_cisloCopy}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid418", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid421", tween: [ "style", "${_Rectangle2}", "opacity", '1', { fromValue: '0'}], position: 28000, duration: 1000, easing: "swing" },
            { id: "eid423", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '1'}], position: 29000, duration: 2000, easing: "swing" },
            { id: "eid365", tween: [ "style", "${_refresh3b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid368", tween: [ "style", "${_refresh3b}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid377", tween: [ "style", "${_refresh3b}", "display", 'none', { fromValue: 'block'}], position: 23309, duration: 0, easing: "swing" },
            { id: "eid354", tween: [ "style", "${_next_to_3b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid357", tween: [ "style", "${_next_to_3b}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid254", tween: [ "style", "${_next_to_3b}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid614", tween: [ "style", "${_disp3}", "top", '53.8%', { fromValue: '53.8%'}], position: 48000, duration: 0, easing: "swing" },
            { id: "eid682", tween: [ "style", "${_disp3}", "top", '16.06%', { fromValue: '53.8%'}], position: 49000, duration: 5000, easing: "swing" },
            { id: "eid151", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '0.000000'}], position: 11500, duration: 500, easing: "easeInCirc" },
            { id: "eid152", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 500, easing: "easeInCirc" },
            { id: "eid193", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '0'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid263", tween: [ "style", "${_kvota2}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid297", tween: [ "style", "${_kvota2}", "display", 'none', { fromValue: 'block'}], position: 21015, duration: 0, easing: "swing" },
            { id: "eid382", tween: [ "style", "${_kvota2}", "display", 'none', { fromValue: 'none'}], position: 23309, duration: 0, easing: "swing" },
            { id: "eid584", tween: [ "style", "${_Rectangle3}", "border-bottom-left-radius", [10,10], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10,10]}], position: 44019, duration: 0, easing: "swing" },
            { id: "eid580", tween: [ "style", "${_text7Copy}", "left", '54.83%', { fromValue: '54.83%'}], position: 44019, duration: 0, easing: "swing" },
            { id: "eid558", tween: [ "style", "${__1merac4}", "left", '56.16%', { fromValue: '63.83%'}], position: 38000, duration: 1000, easing: "swing" },
            { id: "eid242", tween: [ "style", "${_Text4Copy}", "opacity", '0', { fromValue: '0'}], position: 13013, duration: 0, easing: "swing" },
            { id: "eid247", tween: [ "style", "${_Text4Copy}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 500, easing: "swing" },
            { id: "eid475", tween: [ "style", "${_zapojte}", "opacity", '1', { fromValue: '0'}], position: 37000, duration: 1000, easing: "swing" },
            { id: "eid240", tween: [ "style", "${_Text4Copy3}", "opacity", '0', { fromValue: '0'}], position: 13013, duration: 0, easing: "swing" },
            { id: "eid252", tween: [ "style", "${_Text4Copy3}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 2000, easing: "swing" },
            { id: "eid471", tween: [ "style", "${_zapojte}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid470", tween: [ "style", "${_zapojte}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid538", tween: [ "style", "${_zapojte}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid433", tween: [ "style", "${_refresh5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid439", tween: [ "style", "${_refresh5}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid463", tween: [ "style", "${_refresh5}", "display", 'none', { fromValue: 'block'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid459", tween: [ "style", "${_beat_mini}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid449", tween: [ "style", "${_beat_mini}", "display", 'none', { fromValue: 'none'}], position: 34000, duration: 0, easing: "swing" },
            { id: "eid454", tween: [ "style", "${_beat_mini}", "display", 'block', { fromValue: 'none'}], position: 34508, duration: 0, easing: "swing" },
            { id: "eid456", tween: [ "style", "${_beat_mini}", "display", 'none', { fromValue: 'block'}], position: 35482, duration: 0, easing: "swing" },
            { id: "eid466", tween: [ "style", "${_beat_mini}", "display", 'none', { fromValue: 'none'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid225", tween: [ "style", "${_Text4}", "height", '10.28%', { fromValue: '10.28%'}], position: 15000, duration: 0, easing: "swing" },
            { id: "eid384", tween: [ "style", "${_ruka_fig2}", "display", 'none', { fromValue: 'block'}], position: 23309, duration: 0, easing: "swing" },
            { id: "eid233", tween: [ "style", "${_Text4Copy}", "display", 'block', { fromValue: 'block'}], position: 13013, duration: 0, easing: "swing" },
            { id: "eid259", tween: [ "style", "${_Text4Copy}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid129", tween: [ "style", "${_back_to_main}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid73", tween: [ "style", "${_back_to_main}", "display", 'none', { fromValue: 'none'}], position: 6750, duration: 0, easing: "easeInCirc" },
            { id: "eid74", tween: [ "style", "${_back_to_main}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid197", tween: [ "style", "${_back_to_main}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid582", tween: [ "style", "${_Rectangle3}", "left", '57.16%', { fromValue: '57.16%'}], position: 44019, duration: 0, easing: "swing" },
            { id: "eid616", tween: [ "style", "${_disp3}", "display", 'none', { fromValue: 'block'}], position: 48005, duration: 0, easing: "swing" },
            { id: "eid621", tween: [ "style", "${_disp3}", "display", 'block', { fromValue: 'none'}], position: 49000, duration: 0, easing: "swing" },
            { id: "eid170", tween: [ "style", "${_Text2-1}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 1500, easing: "easeInCirc" },
            { id: "eid188", tween: [ "style", "${_Text2-1}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid436", tween: [ "style", "${_text5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid442", tween: [ "style", "${_text5}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid468", tween: [ "style", "${_text5}", "display", 'none', { fromValue: 'block'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid542", tween: [ "style", "${_next_to_7}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid545", tween: [ "style", "${_next_to_7}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid241", tween: [ "style", "${_Text4Copy2}", "opacity", '0', { fromValue: '0'}], position: 13013, duration: 0, easing: "swing" },
            { id: "eid251", tween: [ "style", "${_Text4Copy2}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 1500, easing: "swing" },
            { id: "eid667", tween: [ "style", "${_text7Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid567", tween: [ "style", "${_text7Copy}", "display", 'none', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid569", tween: [ "style", "${_text7Copy}", "display", 'block', { fromValue: 'none'}], position: 43000, duration: 0, easing: "swing" },
            { id: "eid540", tween: [ "style", "${__1rukav2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid551", tween: [ "style", "${__1rukav2}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0, easing: "swing" },
            { id: "eid534", tween: [ "style", "${__1rukav2}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid363", tween: [ "style", "${_next_to_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid366", tween: [ "style", "${_next_to_4}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid375", tween: [ "style", "${_next_to_4}", "display", 'none', { fromValue: 'block'}], position: 23309, duration: 0, easing: "swing" },
            { id: "eid359", tween: [ "style", "${_refresh3}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid419", tween: [ "style", "${_kvota3Copy2}", "opacity", '1', { fromValue: '0'}], position: 25000, duration: 3000, easing: "swing" },
            { id: "eid204", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid408", tween: [ "style", "${__3}", "height", '100%', { fromValue: '100%'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid191", tween: [ "style", "${_next_to_3}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid581", tween: [ "style", "${_text7Copy}", "top", '28.33%', { fromValue: '28.33%'}], position: 44019, duration: 0, easing: "swing" },
            { id: "eid415", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'block'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid428", tween: [ "style", "${_Rectangle2}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid153", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0.000000'}], position: 11500, duration: 500, easing: "easeInCirc" },
            { id: "eid154", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 500, easing: "easeInCirc" },
            { id: "eid194", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '0'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid447", tween: [ "style", "${_text5Copy}", "opacity", '1', { fromValue: '0'}], position: 32000, duration: 2000, easing: "swing" },
            { id: "eid130", tween: [ "style", "${_next_to_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid76", tween: [ "style", "${_next_to_3}", "display", 'none', { fromValue: 'none'}], position: 6750, duration: 0, easing: "easeInCirc" },
            { id: "eid78", tween: [ "style", "${_next_to_3}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid201", tween: [ "style", "${_next_to_3}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid573", tween: [ "style", "${_Rectangle3}", "opacity", '0', { fromValue: '1'}], position: 42000, duration: 830, easing: "swing" },
            { id: "eid575", tween: [ "style", "${_Rectangle3}", "opacity", '1', { fromValue: '0'}], position: 42830, duration: 1170, easing: "swing" },
            { id: "eid633", tween: [ "style", "${_Rectangle3}", "opacity", '0', { fromValue: '1'}], position: 50016, duration: 3984, easing: "swing" },
            { id: "eid406", tween: [ "style", "${__3}", "width", '57.18%', { fromValue: '57.18%'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid417", tween: [ "style", "${_kvota_cisloCopy}", "opacity", '0', { fromValue: '0'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid420", tween: [ "style", "${_kvota_cisloCopy}", "opacity", '1', { fromValue: '0'}], position: 28000, duration: 1000, easing: "swing" },
            { id: "eid422", tween: [ "style", "${_kvota_cisloCopy}", "opacity", '0', { fromValue: '1'}], position: 29000, duration: 2000, easing: "swing" },
            { id: "eid709", tween: [ "style", "${_text7}", "opacity", '1', { fromValue: '0'}], position: 42025, duration: 975, easing: "easeInQuad" },
            { id: "eid710", tween: [ "style", "${_text7}", "opacity", '1', { fromValue: '1'}], position: 50016, duration: 0, easing: "easeInQuad" },
            { id: "eid625", tween: [ "style", "${_text7}", "opacity", '0', { fromValue: '1'}], position: 50016, duration: 3984, easing: "swing" },
            { id: "eid446", tween: [ "style", "${_text5}", "opacity", '1', { fromValue: '0'}], position: 32000, duration: 1000, easing: "swing" },
            { id: "eid159", tween: [ "style", "${_Text2-3}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid160", tween: [ "style", "${_Text2-3}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 1500, easing: "easeInCirc" },
            { id: "eid190", tween: [ "style", "${_Text2-3}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid566", tween: [ "style", "${_text7}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid570", tween: [ "style", "${_text7}", "display", 'block', { fromValue: 'block'}], position: 43000, duration: 0, easing: "swing" },
            { id: "eid168", tween: [ "style", "${_Text2-1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid169", tween: [ "style", "${_Text2-1}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid198", tween: [ "style", "${_Text2-1}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid64", tween: [ "style", "${_package}", "display", 'block', { fromValue: 'block'}], position: 6750, duration: 0, easing: "easeInExpo" },
            { id: "eid67", tween: [ "style", "${_package}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0, easing: "easeInExpo" },
            { id: "eid550", tween: [ "style", "${__6a}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid209", tween: [ "style", "${_ruka_fig2}", "opacity", '1', { fromValue: '0.000000'}], position: 13013, duration: 987, easing: "easeInCirc" },
            { id: "eid235", tween: [ "style", "${_Text4Copy2}", "display", 'block', { fromValue: 'block'}], position: 13013, duration: 0, easing: "swing" },
            { id: "eid257", tween: [ "style", "${_Text4Copy2}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid672", tween: [ "style", "${__6d}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid548", tween: [ "style", "${__6d}", "display", 'none', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid577", tween: [ "style", "${__6d}", "display", 'block', { fromValue: 'none'}], position: 44000, duration: 0, easing: "swing" },
            { id: "eid578", tween: [ "style", "${__6d}", "display", 'none', { fromValue: 'block'}], position: 45000, duration: 0, easing: "swing" },
            { id: "eid588", tween: [ "style", "${__6d}", "display", 'block', { fromValue: 'none'}], position: 46000, duration: 0, easing: "swing" },
            { id: "eid590", tween: [ "style", "${__6d}", "display", 'none', { fromValue: 'block'}], position: 47000, duration: 0, easing: "swing" },
            { id: "eid592", tween: [ "style", "${__6d}", "display", 'block', { fromValue: 'none'}], position: 48000, duration: 0, easing: "swing" },
            { id: "eid53", tween: [ "style", "${_package}", "left", '136px', { fromValue: '136px'}], position: 4750, duration: 0, easing: "easeInExpo" },
            { id: "eid167", tween: [ "style", "${_Text2-1}", "top", '42.36%', { fromValue: '42.36%'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid559", tween: [ "style", "${__1merac4}", "opacity", '0', { fromValue: '0'}], position: 38000, duration: 0, easing: "swing" },
            { id: "eid560", tween: [ "style", "${__1merac4}", "opacity", '1', { fromValue: '0'}], position: 39000, duration: 1000, easing: "swing" },
            { id: "eid192", tween: [ "style", "${_refresh2}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid353", tween: [ "style", "${_refresh3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid356", tween: [ "style", "${_refresh3}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid253", tween: [ "style", "${_refresh3}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid65", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'block'}], position: 6750, duration: 0, easing: "easeInExpo" },
            { id: "eid68", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0, easing: "easeInExpo" },
            { id: "eid277", tween: [ "style", "${_kvota1}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 500, easing: "swing" },
            { id: "eid289", tween: [ "style", "${_kvota1}", "opacity", '1', { fromValue: '1'}], position: 19000, duration: 0, easing: "swing" },
            { id: "eid290", tween: [ "style", "${_kvota1}", "opacity", '1', { fromValue: '1'}], position: 21000, duration: 0, easing: "swing" },
            { id: "eid619", tween: [ "style", "${_disp3}", "opacity", '1', { fromValue: '1'}], position: 48005, duration: 0, easing: "swing" },
            { id: "eid620", tween: [ "style", "${_disp3}", "opacity", '1', { fromValue: '1'}], position: 49000, duration: 0, easing: "swing" },
            { id: "eid164", tween: [ "style", "${_Text2-2Copy2}", "left", '32.46%', { fromValue: '32.46%'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid608", tween: [ "transform", "${_disp3}", "rotateZ", '2deg', { fromValue: '2deg'}], position: 48000, duration: 0, easing: "swing" },
            { id: "eid687", tween: [ "transform", "${_disp3}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 49000, duration: 5000, easing: "swing" },
            { id: "eid586", tween: [ "style", "${_Rectangle3}", "border-top-right-radius", [10,10], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10,10]}], position: 44019, duration: 0, easing: "swing" },
            { id: "eid278", tween: [ "style", "${_kvota2}", "opacity", '1', { fromValue: '0'}], position: 17264, duration: 736, easing: "swing" },
            { id: "eid291", tween: [ "style", "${_kvota2}", "opacity", '1', { fromValue: '1'}], position: 19000, duration: 0, easing: "swing" },
            { id: "eid292", tween: [ "style", "${_kvota2}", "opacity", '1', { fromValue: '1'}], position: 21000, duration: 0, easing: "swing" },
            { id: "eid236", tween: [ "style", "${_Text4Copy3}", "display", 'block', { fromValue: 'block'}], position: 13013, duration: 0, easing: "swing" },
            { id: "eid256", tween: [ "style", "${_Text4Copy3}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid460", tween: [ "style", "${_next_to_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid461", tween: [ "style", "${_next_to_5}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid426", tween: [ "style", "${_next_to_5}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid453", tween: [ "style", "${_beat_mini}", "opacity", '1', { fromValue: '1'}], position: 34000, duration: 0, easing: "swing" },
            { id: "eid554", tween: [ "style", "${__1rukav2}", "top", '36.94%', { fromValue: '36.94%'}], position: 38000, duration: 0, easing: "swing" },
            { id: "eid562", tween: [ "style", "${__1rukav2}", "top", '29.59%', { fromValue: '36.94%'}], position: 39000, duration: 1000, easing: "swing" },
            { id: "eid157", tween: [ "style", "${_Text2-3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid158", tween: [ "style", "${_Text2-3}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid200", tween: [ "style", "${_Text2-3}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" }         ]
      }
   }
},
"package": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'package_clipart2',
      type: 'image',
      rect: ['0%','0%','100%','100%','auto','auto'],
      fill: ['rgba(0,0,0,0)','edge_includes/images/package%20clipart.png','0%','0%']
   },
   {
      id: '_1merac3',
      type: 'image',
      rect: ['672px','-20px','20.6%','23.7%','auto','auto'],
      fill: ['rgba(0,0,0,0)','edge_includes/images/1merac.png','0px','0px']
   },
   {
      id: '_1rukav',
      type: 'image',
      rect: ['101px','74px','370px','288px','auto','auto'],
      fill: ['rgba(0,0,0,0)','edge_includes/images/1rukav.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__1merac3}": [
            ["style", "top", '92px'],
            ["motion", "location", '185.02px 123.99px'],
            ["style", "height", '23.7%'],
            ["style", "left", '152px'],
            ["style", "width", '20.64%']
         ],
         "${_package_clipart2}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ],
         "${__1rukav}": [
            ["style", "top", '18px'],
            ["motion", "location", '144px 116px'],
            ["style", "height", '84px'],
            ["style", "left", '347px'],
            ["style", "width", '86px']
         ],
         "${symbolSelector}": [
            ["style", "height", '270px'],
            ["style", "width", '320px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6750,
         autoPlay: true,
         timeline: [
            { id: "eid57", tween: [ "style", "${__1rukav}", "height", '288px', { fromValue: '84px'}], position: 4750, duration: 2000, easing: "easeInExpo" },
            { id: "eid50", tween: [ "style", "${__1merac3}", "height", '146.65%', { fromValue: '23.7%'}], position: 2750, duration: 2000, easing: "swing" },
            { id: "eid59", tween: [ "style", "${__1rukav}", "width", '370px', { fromValue: '86px'}], position: 4750, duration: 2000, easing: "easeInExpo" },
            { id: "eid51", tween: [ "motion", "${__1merac3}", [[185.02,123.99,0,0],[786.94,-88.28,188.66,162.32,230.89,198.66],[851,140.01,0,0]]], position: 2750, duration: 2000, easing: "swing" },
            { id: "eid61", tween: [ "motion", "${__1merac3}", [[851.02,140.02,0,0],[853.02,140.03,0,0]]], position: 4750, duration: 2000, easing: "swing" },
            { id: "eid55", tween: [ "motion", "${__1rukav}", [[144,116,0,0],[439.18,-117.44,279.15,4.6,363.56,5.99],[532,162,0,0]]], position: 4750, duration: 2000, easing: "easeInExpo" },
            { id: "eid52", tween: [ "style", "${__1merac3}", "width", '115.64%', { fromValue: '20.64%'}], position: 2750, duration: 2000, easing: "swing" }         ]
      }
   }
},
"fig1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '85.14%'],
            ["style", "width", '92.59%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12500,
         autoPlay: true,
         labels: {
            "loop_arteria": 11500,
            "loop_end": 12500
         },
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-94861709");
