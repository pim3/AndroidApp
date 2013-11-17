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
            id:'package_clipart',
            type:'image',
            rect:['3%','38.9%','29.8%','41.1%','auto','auto'],
            fill:["rgba(0,0,0,0)",'ftp/package%20clipart.png','0px','0px']
         },
         {
            id:'_1merac',
            type:'image',
            rect:['17.9%','51.7%','5.2%','8.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'ftp/1merac.png','0px','0px']
         },
         {
            id:'_1rukav',
            type:'image',
            rect:['12.8%','52.8%','5.7%','6.7%','auto','auto'],
            fill:["rgba(0,0,0,0)",'ftp/1rukav.png','0px','0px']
         },
         {
            id:'ruka',
            display:'none',
            type:'image',
            rect:['0%','0%','91.5%','84.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/1.png','0px','0px']
         },
         {
            id:'rukab',
            display:'none',
            type:'image',
            rect:['0%','0%','91.5%','84.7%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/1b.png','0px','0px']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['36.5%','24.2%','8.1%','3.3%','auto','auto'],
            fill:["rgba(255,21,21,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'hlavna_arteria',
            display:'none',
            type:'image',
            rect:['47.2%','28.9%','41.3%','8.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/hlavna_arteria.png','0px','0px']
         },
         {
            id:'_1_5_2_5_cm',
            display:'none',
            type:'image',
            rect:['45.8%','15.3%','32.3%','9.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/1_5_2_5_cm.png','0px','0px']
         },
         {
            id:'_2a',
            display:'none',
            type:'image',
            rect:['0%','6.9%','100%','88.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/2a.png','0px','0px']
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['1254px','648px','0px','0px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(255,21,21,1)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
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
            id:'next_from_continue',
            display:'none',
            type:'image',
            rect:['91.7%','86.1%','8.3%','13.9%','auto','auto'],
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
            id:'back_to_main',
            display:'none',
            type:'image',
            rect:['0%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'bact_to_continue',
            display:'none',
            type:'image',
            rect:['0%','auto','8.3%','13.9%','auto','0%'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
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
            id:'_2b',
            display:'none',
            type:'image',
            rect:['50%','28.1%','18.2%','30.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/2b.png','0px','0px']
         },
         {
            id:'pause',
            display:'none',
            type:'image',
            rect:['auto','0%','8.3%','13.9%','0%','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/pause.png','0px','0px']
         },
         {
            id:'play',
            display:'none',
            type:'image',
            rect:['auto','-0.3%','8.3%','13.9%','-0.7%','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/play.png','0px','0px']
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
            id:'umiestnite_hadicku',
            display:'none',
            type:'image',
            rect:['32.7%','16.4%','62%','8.3%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/umiestnite_hadicku.png','0px','0px']
         },
         {
            id:'stredu_paze',
            display:'none',
            type:'image',
            rect:['48.2%','30.4%','33%','10.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/stredu_paze.png','0px','0px']
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
            id:'hlavna_arteria_red',
            display:'none',
            type:'image',
            rect:['44.5%','53.6%','41.3%','8.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/hlavna_arteria.png','0px','0px']
         },
         {
            id:'arteria',
            type:'rect',
            rect:['28.7%','52.2%','2.1%','13.6%','auto','auto'],
            fill:["rgba(255,21,21,1.00)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'ruka5',
            display:'none',
            type:'image',
            rect:['0%','-0.3%','100%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/ru.png','0px','0px']
         },
         {
            id:'tam_kde_je_pulz',
            display:'none',
            type:'image',
            rect:['15.2%','5.6%','80.3%','10.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/tam_kde_je_pulz.png','0px','0px']
         },
         {
            id:'je_vasa_hlavna',
            type:'image',
            rect:['27.2%','20%','61%','10.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/je_vasa_hlavna.png','0px','0px']
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
            id:'zapojte2',
            display:'none',
            type:'image',
            rect:['2.8%','10%','24.1%','10.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/zapojte.png','0px','0px']
         },
         {
            id:'hadicku2',
            display:'none',
            type:'image',
            rect:['32.5%','10%','22.9%','8.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/hadicku.png','0px','0px']
         },
         {
            id:'do_pristroja2',
            display:'none',
            type:'image',
            rect:['59.8%','10%','33.3%','11.1%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/do_pristroja.png','0px','0px']
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
            id:'polozte_ruku',
            display:'none',
            type:'image',
            rect:['43.8%','6.9%','46.1%','9.7%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/polozte_ruku.png','0px','0px']
         },
         {
            id:'dlanou_hore2',
            display:'none',
            type:'image',
            rect:['38.8%','24.7%','58.7%','8.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/dlanou_hore.png','0px','0px']
         },
         {
            id:'vasho_srdca',
            display:'none',
            type:'image',
            rect:['69.9%','40.8%','27.5%','8.2%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/vasho_srdca.png','0px','0px']
         },
         {
            id:'zvukovy_signal',
            display:'none',
            type:'image',
            rect:['12.3%','86.9%','74.1%','10%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/zvukovy_signal.png','0px','0px']
         },
         {
            id:'start',
            display:'none',
            type:'image',
            rect:['46.8%','77.5%','15.8%','8.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/start.png','0px','0px']
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
            id:'disp3_hodnoty',
            display:'none',
            type:'image',
            rect:['50.5%','63.1%','44.4%','85%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/disp.png','0px','0px']
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
         },
         {
            id:'testa',
            display:'none',
            type:'image',
            rect:['auto','36.4%','49.3%','12.5%','8.4%','auto'],
            fill:["rgba(0,0,0,0)",im+"testa.PNG",'0px','0px']
         },
         {
            id:'back_to_7',
            display:'none',
            type:'image',
            rect:['0%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"left2.png",'0px','0px']
         },
         {
            id:'next_slide_2',
            type:'image',
            rect:['91.3%','86.4%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'refresh',
            type:'image',
            rect:['91.7%','-0.3%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/refresh.png','0px','0px']
         },
         {
            id:'back_to_4',
            display:'none',
            type:'image',
            rect:['0%','85.8%','8.3%','13.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'ciaraVodorovna2',
            display:'none',
            type:'image',
            rect:['65.8%','17.1%','11.1%','3.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/ciaraVodorovna.png','0px','0px']
         },
         {
            id:'ciaraVodorovna2Copy',
            display:'none',
            type:'image',
            rect:['65.8%','46.5%','11.1%','3.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/ciaraVodorovna.png','0px','0px']
         },
         {
            id:'ciaraVodorovna2Copy2',
            display:'none',
            type:'image',
            rect:['65.8%','79.9%','11.1%','3.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/ciaraVodorovna.png','0px','0px']
         },
         {
            id:'ciaraVodorovna2Copy3',
            display:'none',
            type:'image',
            rect:['25%','15.3%','4.6%','3.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/ciaraVodorovna.png','0px','0px']
         },
         {
            id:'ciaraVodorovna2Copy5',
            display:'none',
            type:'image',
            rect:['25%','27.8%','4.7%','3.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/ciaraVodorovna.png','0px','0px']
         },
         {
            id:'ciaraVodorovna2Copy7',
            display:'none',
            type:'image',
            rect:['43.3%','86.9%','4.7%','3.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/ciaraVodorovna.png','0px','0px']
         },
         {
            id:'ciaraVodorovna2Copy6',
            display:'none',
            type:'image',
            rect:['45.7%','84.4%','3.3%','3.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/ciaraVodorovna.png','0px','0px'],
            transform:[[],['90']]
         },
         {
            id:'prestrcte_lavu',
            display:'none',
            type:'image',
            rect:['25.8%','44.6%','71.7%','10.1%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/prestrcte_lavu.png','0px','0px']
         },
         {
            id:'tak_aby_jej',
            display:'none',
            type:'image',
            rect:['29.3%','64.4%','69.8%','11.1%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/tak_aby_jej.png','0px','0px']
         },
         {
            id:'cez_d_kruzok',
            type:'image',
            rect:['29.3%','87.2%','55.8%','11.1%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/cez_d_kruzok.png','0px','0px']
         },
         {
            id:'rozbalime_tlakomer',
            type:'image',
            rect:['18.8%','13.2%','62.7%','10.3%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/rozbalime_tlakomer.png','0px','0px']
         },
         {
            id:'prestrcte_lavu2',
            display:'none',
            type:'image',
            rect:['12.9%','5.1%','75.4%','9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/prestrcte_lavu.png','0px','0px']
         },
         {
            id:'farebny',
            display:'none',
            type:'image',
            rect:['29.3%','18.8%','13.4%','9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/farebny.png','0px','0px']
         },
         {
            id:'farebnyKruzok',
            display:'none',
            type:'image',
            rect:['37.3%','67.8%','6%','8.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/farebnyKruzok.png','0px','0px'],
            transform:[[],['-3']]
         },
         {
            id:'a_s_hadickou',
            display:'none',
            type:'image',
            rect:['43.8%','31.7%','52%','8.1%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/a_s_hadickou.png','0px','0px']
         },
         {
            id:'ramena',
            display:'none',
            type:'image',
            rect:['58.7%','44.3%','13.4%','5.7%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/ramena.png','0px','0px']
         },
         {
            id:'pruzok_by_mal',
            display:'none',
            type:'image',
            rect:['44.5%','18.8%','53.9%','9.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/pruzok_by_mal.png','0px','0px']
         },
         {
            id:'otocte_dlanou',
            display:'none',
            type:'image',
            rect:['17%','6.9%','71.5%','8.1%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/otocte_dlanou.png','0px','0px']
         },
         {
            id:'okraj_manzety',
            display:'none',
            type:'image',
            rect:['31.3%','19.2%','63.8%','10.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/okraj_manzety.png','0px','0px']
         },
         {
            id:'stranu_laktoveho',
            display:'none',
            type:'image',
            rect:['45%','30.4%','52.2%','10.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/stranu_laktoveho.png','0px','0px']
         },
         {
            id:'_7b',
            display:'none',
            type:'image',
            rect:['22.4%','68.8%','7.5%','21.3%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/7b.png','0px','0px'],
            transform:[[],['121']]
         },
         {
            id:'pritiahnite_manzetu2',
            display:'none',
            type:'image',
            rect:['51.1%','67.5%','38%','6.7%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/pritiahnite_manzetu.png','0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_beat_miniCopy}": [
            ["color", "background-color", 'rgba(255,21,21,0)'],
            ["style", "opacity", '1'],
            ["style", "left", '50.3%'],
            ["style", "width", '2.92%'],
            ["style", "top", '68.8%'],
            ["transform", "skewY", '-1deg'],
            ["transform", "skewX", '-12deg'],
            ["style", "height", '4.86%'],
            ["color", "border-color", 'rgb(255, 0, 0)'],
            ["style", "border-width", '4px'],
            ["style", "display", 'none']
         ],
         "${_ciaraVodorovna2Copy5}": [
            ["style", "display", 'none'],
            ["style", "top", '27.78%'],
            ["style", "left", '25%'],
            ["style", "width", '4.67%']
         ],
         "${_Text2-1Copy}": [
            ["style", "letter-spacing", '0em'],
            ["style", "width", '62%'],
            ["style", "word-spacing", '0em'],
            ["style", "font-weight", '500'],
            ["style", "left", '432px'],
            ["style", "font-size", '380%'],
            ["style", "top", '305px'],
            ["style", "display", 'block'],
            ["style", "font-style", 'normal'],
            ["style", "text-indent", '0%'],
            ["style", "height", '11.48%'],
            ["style", "font-family", 'hobo-std, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "opacity", '0']
         ],
         "${_back_to_6}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_ramena}": [
            ["style", "top", '44.31%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '58.67%'],
            ["style", "width", '13.42%']
         ],
         "${_rukab}": [
            ["style", "display", 'none'],
            ["style", "height", '84.72%'],
            ["style", "top", '0%'],
            ["style", "width", '91.5%']
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
         "${_next_slide_2}": [
            ["style", "top", '86.11%'],
            ["style", "height", '13.89%'],
            ["style", "display", 'block'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${__3}": [
            ["style", "top", '0%'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '100%'],
            ["style", "display", 'none'],
            ["style", "left", '7.5%'],
            ["style", "width", '57.18%']
         ],
         "${_play}": [
            ["style", "top", '-0.28%'],
            ["style", "display", 'none'],
            ["style", "left", 'auto'],
            ["style", "height", '13.89%'],
            ["style", "right", '-0.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_refresh}": [
            ["style", "top", '-0.28%'],
            ["style", "display", 'block'],
            ["style", "height", '13.89%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '91.66%'],
            ["style", "width", '8.34%']
         ],
         "${_zvukovy_signal}": [
            ["style", "display", 'none'],
            ["style", "height", '10%'],
            ["style", "opacity", '1'],
            ["style", "left", '12.33%'],
            ["style", "width", '74.09%']
         ],
         "${_ciaraVodorovna2Copy6}": [
            ["style", "top", '84.44%'],
            ["transform", "rotateZ", '90deg'],
            ["style", "display", 'none'],
            ["style", "left", '45.67%'],
            ["style", "width", '3.34%']
         ],
         "${_je_vasa_hlavna}": [
            ["style", "top", '18.33%'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '28.67%'],
            ["style", "width", '53.34%']
         ],
         "${_refresh7}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.66%'],
            ["style", "width", '8.34%']
         ],
         "${__1_5_2_5_cm}": [
            ["style", "top", '15.28%'],
            ["style", "display", 'none'],
            ["style", "height", '9.58%'],
            ["style", "left", '45.75%'],
            ["style", "width", '32.34%']
         ],
         "${_bact_to_3}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_a_s_hadickou}": [
            ["style", "top", '31.67%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '43.83%'],
            ["style", "width", '52.03%']
         ],
         "${_rozbalime_tlakomer}": [
            ["style", "top", '13.2%'],
            ["style", "display", 'block'],
            ["style", "height", '10.28%'],
            ["style", "opacity", '0'],
            ["style", "left", '18.83%'],
            ["style", "width", '62.67%']
         ],
         "${__6a}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '-3.83%'],
            ["style", "width", '88.59%']
         ],
         "${_stredu_paze}": [
            ["style", "top", '30.42%'],
            ["style", "opacity", '0'],
            ["style", "left", '48.17%'],
            ["style", "display", 'none']
         ],
         "${_package_clipart}": [
            ["style", "top", '38.89%'],
            ["style", "display", 'block'],
            ["style", "height", '41.11%'],
            ["style", "opacity", '0'],
            ["style", "left", '3%'],
            ["style", "width", '29.84%']
         ],
         "${_next_to_3}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "left", '92%'],
            ["style", "height", '13.89%'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_dlanou_hore2}": [
            ["style", "top", '24.72%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '38.83%'],
            ["style", "width", '58.67%']
         ],
         "${_pruzok_by_mal}": [
            ["style", "top", '18.8%'],
            ["style", "display", 'none'],
            ["style", "height", '9.44%'],
            ["style", "opacity", '0'],
            ["style", "left", '44.53%'],
            ["style", "width", '53.89%']
         ],
         "${_refresh5}": [
            ["style", "top", '-0.28%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.66%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_back_to_7}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0%'],
            ["style", "width", '8.34%']
         ],
         "${_vasho_srdca}": [
            ["style", "top", '40.83%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '69.92%'],
            ["style", "width", '27.51%']
         ],
         "${_umiestnite_hadicku}": [
            ["style", "top", '16.39%'],
            ["style", "opacity", '0'],
            ["style", "left", '32.67%'],
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(209,233,232,1.00)'],
            ["style", "min-width", '10%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_prestrcte_lavu2}": [
            ["style", "top", '5.14%'],
            ["style", "display", 'none'],
            ["style", "height", '9.03%'],
            ["style", "opacity", '0'],
            ["style", "left", '12.92%'],
            ["style", "width", '75.42%']
         ],
         "${_okraj_manzety}": [
            ["style", "top", '19.16%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '31.25%'],
            ["style", "width", '63.83%']
         ],
         "${_ruka}": [
            ["style", "top", '0%'],
            ["style", "height", '84.76%'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '0%'],
            ["style", "width", '91.5%']
         ],
         "${_refresh6}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_polozte_ruku}": [
            ["style", "top", '6.94%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '43.83%'],
            ["style", "width", '46.09%']
         ],
         "${_beat_mini}": [
            ["color", "background-color", 'rgba(255,21,21,0)'],
            ["style", "opacity", '1'],
            ["style", "left", '25.67%'],
            ["style", "width", '5%'],
            ["style", "top", '54.3%'],
            ["style", "height", '8.33%'],
            ["color", "border-color", 'rgb(255, 0, 0)'],
            ["style", "border-width", '10px'],
            ["style", "display", 'none']
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
         "${_refresh4}": [
            ["style", "top", '-0.56%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.66%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_otocte_dlanou}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '16.99%'],
            ["style", "width", '71.52%']
         ],
         "${_start}": [
            ["style", "top", '77.5%'],
            ["style", "display", 'none'],
            ["style", "height", '8.75%'],
            ["style", "left", '46.83%'],
            ["style", "width", '15.84%']
         ],
         "${_zapojte2}": [
            ["style", "display", 'none'],
            ["style", "height", '10.56%'],
            ["style", "opacity", '0'],
            ["style", "left", '2.83%'],
            ["style", "width", '24.09%']
         ],
         "${_ciaraVodorovna2Copy2}": [
            ["style", "display", 'none'],
            ["style", "top", '79.86%'],
            ["style", "left", '65.75%'],
            ["style", "width", '11.09%']
         ],
         "${_arteria}": [
            ["style", "top", '52.22%'],
            ["style", "display", 'block'],
            ["color", "background-color", 'rgba(255,21,21,1.00)'],
            ["style", "height", '13.61%'],
            ["style", "opacity", '0'],
            ["style", "left", '28.67%'],
            ["style", "width", '2.09%']
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
         "${_farebny}": [
            ["style", "top", '18.75%'],
            ["style", "display", 'none'],
            ["style", "height", '9.03%'],
            ["style", "opacity", '0'],
            ["style", "left", '29.25%'],
            ["style", "width", '13.42%']
         ],
         "${__6c}": [
            ["style", "top", '41.39%'],
            ["transform", "rotateZ", '3deg'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '25.67%']
         ],
         "${_next_to_6}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${__2b}": [
            ["style", "display", 'none'],
            ["style", "left", '50%'],
            ["style", "top", '28.06%']
         ],
         "${_bact_to_continue}": [
            ["style", "top", 'auto'],
            ["style", "display", 'none'],
            ["style", "bottom", '0%'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_beat_miniCopy2}": [
            ["color", "background-color", 'rgba(255,21,21,0)'],
            ["style", "opacity", '1'],
            ["style", "left", '48.65%'],
            ["style", "width", '6.32%'],
            ["style", "top", '66.21%'],
            ["transform", "skewY", '-1deg'],
            ["transform", "skewX", '-12deg'],
            ["style", "height", '10.47%'],
            ["color", "border-color", 'rgb(255, 0, 0)'],
            ["style", "border-width", '3px'],
            ["style", "display", 'none']
         ],
         "${__7b}": [
            ["style", "top", '68.75%'],
            ["transform", "rotateZ", '121deg'],
            ["style", "height", '21.25%'],
            ["style", "display", 'none'],
            ["style", "left", '22.37%'],
            ["style", "width", '7.5%']
         ],
         "${_ruka5}": [
            ["style", "top", '-0.28%'],
            ["style", "display", 'none'],
            ["style", "height", '100%'],
            ["style", "left", '0%'],
            ["style", "width", '100%']
         ],
         "${_farebnyKruzok}": [
            ["style", "top", '67.76%'],
            ["transform", "rotateZ", '-3deg'],
            ["style", "height", '8.47%'],
            ["style", "display", 'none'],
            ["style", "left", '37.25%'],
            ["style", "width", '6%']
         ],
         "${_cez_d_kruzok}": [
            ["style", "top", '81.95%'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '30.08%'],
            ["style", "width", '55.75%']
         ],
         "${_pause}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "left", 'auto'],
            ["style", "height", '13.89%'],
            ["style", "right", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
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
         "${__1merac}": [
            ["style", "top", '51.67%'],
            ["style", "height", '8.89%'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '17.92%'],
            ["style", "width", '5.17%']
         ],
         "${__1merac4}": [
            ["style", "top", '52.5%'],
            ["style", "display", 'none'],
            ["style", "height", '62.5%'],
            ["style", "opacity", '0'],
            ["style", "left", '63.83%'],
            ["style", "width", '37.5%']
         ],
         "${_back_to_4}": [
            ["style", "top", '85.83%'],
            ["style", "height", '13.89%'],
            ["style", "display", 'none'],
            ["style", "left", '0%'],
            ["style", "width", '8.34%']
         ],
         "${__2a}": [
            ["style", "display", 'none'],
            ["style", "height", '88.89%'],
            ["style", "width", '100%']
         ],
         "${_hlavna_arteria_red}": [
            ["style", "top", '55.69%'],
            ["style", "opacity", '0'],
            ["style", "left", '43%'],
            ["style", "display", 'none']
         ],
         "${_testa}": [
            ["style", "top", '36.39%'],
            ["style", "display", 'none'],
            ["style", "height", '12.5%'],
            ["style", "right", '8.41%'],
            ["style", "left", 'auto'],
            ["style", "width", '49.26%']
         ],
         "${_tak_aby_jej}": [
            ["style", "top", '63.05%'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '28.58%'],
            ["style", "width", '69.84%']
         ],
         "${_next_from_continue}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_next_finall}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_ciaraVodorovna2}": [
            ["style", "display", 'none'],
            ["style", "top", '17.08%'],
            ["style", "left", '65.75%'],
            ["style", "width", '11.09%']
         ],
         "${_next_to_4}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_hadicku2}": [
            ["style", "height", '8.61%'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "width", '22.92%']
         ],
         "${_Rectangle}": [
            ["style", "top", '24.17%'],
            ["color", "background-color", 'rgba(255,21,21,1.00)'],
            ["style", "display", 'block'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '36.47%'],
            ["style", "width", '8.11%']
         ],
         "${_do_pristroja2}": [
            ["style", "top", '10%'],
            ["style", "height", '11.11%'],
            ["style", "opacity", '0'],
            ["style", "left", '59.83%'],
            ["style", "display", 'none']
         ],
         "${_prestrcte_lavu}": [
            ["style", "top", '44.58%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '24.75%'],
            ["style", "width", '72.67%']
         ],
         "${_ciaraVodorovna2Copy}": [
            ["style", "display", 'none'],
            ["style", "top", '46.53%'],
            ["style", "left", '65.75%'],
            ["style", "width", '11.09%']
         ],
         "${_tam_kde_je_pulz}": [
            ["style", "top", '4.72%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '13%'],
            ["style", "width", '74.01%']
         ],
         "${_back_to_3b}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${__1rukav}": [
            ["style", "top", '53.33%'],
            ["style", "height", '6.67%'],
            ["transform", "rotateZ", '7deg'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '12.47%'],
            ["style", "width", '5.67%']
         ],
         "${_next_to_5}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_hlavna_arteria}": [
            ["style", "top", '46.11%'],
            ["style", "height", '13.89%'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '36.92%'],
            ["style", "width", '55.18%']
         ],
         "${_ciaraVodorovna2Copy7}": [
            ["style", "display", 'none'],
            ["style", "top", '86.94%'],
            ["style", "left", '43.28%'],
            ["style", "width", '4.67%']
         ],
         "${_pritiahnite_manzetu2}": [
            ["style", "top", '67.5%'],
            ["style", "display", 'none'],
            ["style", "height", '6.67%'],
            ["style", "opacity", '1'],
            ["style", "left", '51.08%'],
            ["style", "width", '37.98%']
         ],
         "${_next_to_7}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
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
         "${_beat}": [
            ["style", "top", '48.89%'],
            ["style", "display", 'none'],
            ["style", "border-width", '10px'],
            ["color", "border-color", 'rgba(255,0,0,1.00)'],
            ["style", "height", '19.44%'],
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
         "${_stranu_laktoveho}": [
            ["style", "top", '30.41%'],
            ["style", "display", 'none'],
            ["style", "height", '10.42%'],
            ["style", "opacity", '0'],
            ["style", "left", '45.33%'],
            ["style", "width", '52.24%']
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
         "${_ciaraVodorovna2Copy3}": [
            ["style", "display", 'none'],
            ["style", "top", '15.28%'],
            ["style", "left", '24.97%'],
            ["style", "width", '4.64%']
         ],
         "${_disp3_hodnoty}": [
            ["transform", "rotateZ", '2deg'],
            ["style", "opacity", '1'],
            ["style", "left", '54.9%'],
            ["style", "width", '7.5%'],
            ["style", "top", '53.72%'],
            ["transform", "skewY", '7deg'],
            ["transform", "skewX", '-20deg'],
            ["style", "height", '12.5%'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 63000,
         autoPlay: true,
         labels: {
            "start": 0,
            "start__slide_2": 7000,
            "continue": 8126,
            "start_loop1": 11500,
            "end_loop1": 12500,
            "start_3": 13000,
            "loop_kruzok": 15000,
            "stop_3": 16000,
            "start_3b": 17000,
            "loop_start_3b": 19000,
            "pause1": 21000,
            "loop_stop_3b": 23309,
            "start_4": 25000,
            "loop_start_4": 28000,
            "loop_stop_4": 30843,
            "start_5": 32000,
            "loop_start_beat": 34000,
            "loop_stop_beat": 36488,
            "start_6": 37000,
            "stop_6": 41000,
            "start_7": 42000,
            "start_finall": 54000,
            "start_popis": 59000,
            "end": 63000
         },
         timeline: [
            { id: "eid829", tween: [ "style", "${_prestrcte_lavu}", "left", '24.75%', { fromValue: '24.75%'}], position: 8000, duration: 0, easing: "easeInCirc" },
            { id: "eid544", tween: [ "style", "${_refresh6}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid547", tween: [ "style", "${_refresh6}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid800", tween: [ "style", "${_back_to_4}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0, easing: "easeInQuad" },
            { id: "eid801", tween: [ "style", "${_back_to_4}", "display", 'none', { fromValue: 'block'}], position: 37000, duration: 0, easing: "easeInQuad" },
            { id: "eid1026", tween: [ "style", "${_do_pristroja2}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid1040", tween: [ "style", "${_do_pristroja2}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid792", tween: [ "style", "${_next_slide_2}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0, easing: "swing" },
            { id: "eid1094", tween: [ "style", "${_arteria}", "opacity", '1', { fromValue: '0'}], position: 28000, duration: 1000, easing: "easeInQuad" },
            { id: "eid1096", tween: [ "style", "${_arteria}", "opacity", '0', { fromValue: '1'}], position: 29000, duration: 2000, easing: "easeInQuad" },
            { id: "eid1114", tween: [ "style", "${_beat_miniCopy2}", "border-width", '3px', { fromValue: '3px'}], position: 48473, duration: 0, easing: "swing" },
            { id: "eid408", tween: [ "style", "${__3}", "height", '100%', { fromValue: '100%'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid424", tween: [ "style", "${_back_to_3b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid414", tween: [ "style", "${_back_to_3b}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid427", tween: [ "style", "${_back_to_3b}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid673", tween: [ "style", "${_beat_miniCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid594", tween: [ "style", "${_beat_miniCopy2}", "display", 'none', { fromValue: 'none'}], position: 48000, duration: 0, easing: "swing" },
            { id: "eid1105", tween: [ "style", "${_beat_miniCopy2}", "display", 'block', { fromValue: 'none'}], position: 48473, duration: 0, easing: "swing" },
            { id: "eid597", tween: [ "style", "${_beat_miniCopy2}", "display", 'none', { fromValue: 'block'}], position: 49000, duration: 0, easing: "swing" },
            { id: "eid550", tween: [ "style", "${__6a}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid1063", tween: [ "style", "${_disp3_hodnoty}", "opacity", '1', { fromValue: '1'}], position: 51000, duration: 0, easing: "swing" },
            { id: "eid1064", tween: [ "style", "${_disp3_hodnoty}", "opacity", '1', { fromValue: '1'}], position: 53005, duration: 0, easing: "swing" },
            { id: "eid620", tween: [ "style", "${_disp3_hodnoty}", "opacity", '1', { fromValue: '1'}], position: 54000, duration: 0, easing: "swing" },
            { id: "eid539", tween: [ "style", "${__1merac4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid556", tween: [ "style", "${__1merac4}", "display", 'block', { fromValue: 'none'}], position: 39000, duration: 0, easing: "swing" },
            { id: "eid533", tween: [ "style", "${__1merac4}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid1092", tween: [ "style", "${_hlavna_arteria_red}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0, easing: "easeInQuad" },
            { id: "eid913", tween: [ "style", "${_pruzok_by_mal}", "opacity", '0', { fromValue: '0'}], position: 11772, duration: 0, easing: "swing" },
            { id: "eid920", tween: [ "style", "${_pruzok_by_mal}", "opacity", '1', { fromValue: '0'}], position: 13505, duration: 495, easing: "easeInCubic" },
            { id: "eid814", tween: [ "style", "${_ciaraVodorovna2Copy3}", "display", 'block', { fromValue: 'none'}], position: 59000, duration: 0 },
            { id: "eid916", tween: [ "style", "${_ramena}", "opacity", '0', { fromValue: '0'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid922", tween: [ "style", "${_ramena}", "opacity", '1', { fromValue: '0'}], position: 14518, duration: 482, easing: "easeInCubic" },
            { id: "eid407", tween: [ "style", "${__3}", "left", '7.5%', { fromValue: '7.5%'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid1056", tween: [ "style", "${_start}", "display", 'block', { fromValue: 'none'}], position: 48005, duration: 0, easing: "swing" },
            { id: "eid1057", tween: [ "style", "${_start}", "display", 'none', { fromValue: 'block'}], position: 49000, duration: 0, easing: "swing" },
            { id: "eid743", tween: [ "style", "${__1merac}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid745", tween: [ "style", "${__1merac}", "opacity", '1', { fromValue: '0'}], position: 1579, duration: 1000, easing: "swing" },
            { id: "eid759", tween: [ "style", "${__1merac}", "opacity", '0.99', { fromValue: '1'}], position: 2579, duration: 2000, easing: "easeInQuad" },
            { id: "eid307", tween: [ "style", "${__2b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid303", tween: [ "style", "${__2b}", "display", 'none', { fromValue: 'none'}], position: 19000, duration: 0, easing: "swing" },
            { id: "eid305", tween: [ "style", "${__2b}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0, easing: "swing" },
            { id: "eid373", tween: [ "style", "${__2b}", "display", 'none', { fromValue: 'block'}], position: 23309, duration: 0, easing: "swing" },
            { id: "eid815", tween: [ "style", "${_ciaraVodorovna2Copy5}", "display", 'block', { fromValue: 'none'}], position: 59000, duration: 0 },
            { id: "eid186", tween: [ "style", "${_ruka}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid755", tween: [ "style", "${__1rukav}", "left", '32.47%', { fromValue: '12.47%'}], position: 4579, duration: 2000, easing: "swing" },
            { id: "eid564", tween: [ "style", "${__1rukav2}", "width", '49.58%', { fromValue: '39.92%'}], position: 39000, duration: 1000, easing: "swing" },
            { id: "eid1050", tween: [ "style", "${_polozte_ruku}", "opacity", '1', { fromValue: '0'}], position: 42000, duration: 681, easing: "easeInCubic" },
            { id: "eid1055", tween: [ "style", "${_polozte_ruku}", "opacity", '0', { fromValue: '1'}], position: 54000, duration: 2000, easing: "swing" },
            { id: "eid756", tween: [ "style", "${__1rukav}", "top", '40.04%', { fromValue: '53.33%'}], position: 4579, duration: 2000, easing: "easeInQuad" },
            { id: "eid744", tween: [ "style", "${__1rukav}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid746", tween: [ "style", "${__1rukav}", "opacity", '1', { fromValue: '0'}], position: 1579, duration: 1000, easing: "swing" },
            { id: "eid1016", tween: [ "style", "${_je_vasa_hlavna}", "top", '18.33%', { fromValue: '18.33%'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid914", tween: [ "style", "${_a_s_hadickou}", "opacity", '0', { fromValue: '0'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid921", tween: [ "style", "${_a_s_hadickou}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 518, easing: "swing" },
            { id: "eid1009", tween: [ "style", "${_tam_kde_je_pulz}", "width", '74.01%', { fromValue: '74.01%'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid1002", tween: [ "style", "${_je_vasa_hlavna}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0, easing: "easeInQuad" },
            { id: "eid1005", tween: [ "style", "${_je_vasa_hlavna}", "display", 'block', { fromValue: 'none'}], position: 33000, duration: 0, easing: "swing" },
            { id: "eid1023", tween: [ "style", "${_je_vasa_hlavna}", "display", 'none', { fromValue: 'block'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid458", tween: [ "style", "${_beat}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid448", tween: [ "style", "${_beat}", "display", 'none', { fromValue: 'none'}], position: 34000, duration: 0, easing: "swing" },
            { id: "eid455", tween: [ "style", "${_beat}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0, easing: "swing" },
            { id: "eid457", tween: [ "style", "${_beat}", "display", 'none', { fromValue: 'block'}], position: 36000, duration: 0, easing: "swing" },
            { id: "eid465", tween: [ "style", "${_beat}", "display", 'none', { fromValue: 'none'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid903", tween: [ "style", "${_pruzok_by_mal}", "display", 'block', { fromValue: 'none'}], position: 11772, duration: 0, easing: "swing" },
            { id: "eid923", tween: [ "style", "${_pruzok_by_mal}", "display", 'none', { fromValue: 'block'}], position: 12090, duration: 0, easing: "swing" },
            { id: "eid924", tween: [ "style", "${_pruzok_by_mal}", "display", 'block', { fromValue: 'none'}], position: 12987, duration: 0, easing: "swing" },
            { id: "eid930", tween: [ "style", "${_pruzok_by_mal}", "display", 'none', { fromValue: 'block'}], position: 16008, duration: 0, easing: "easeInCubic" },
            { id: "eid908", tween: [ "style", "${_pruzok_by_mal}", "display", 'none', { fromValue: 'none'}], position: 20772, duration: 0, easing: "swing" },
            { id: "eid811", tween: [ "style", "${_ciaraVodorovna2}", "display", 'block', { fromValue: 'none'}], position: 59000, duration: 0 },
            { id: "eid1012", tween: [ "style", "${_tam_kde_je_pulz}", "left", '13%', { fromValue: '13%'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid1008", tween: [ "style", "${_je_vasa_hlavna}", "opacity", '1', { fromValue: '0'}], position: 33000, duration: 1000, easing: "swing" },
            { id: "eid614", tween: [ "style", "${_disp3_hodnoty}", "top", '53.8%', { fromValue: '53.8%'}], position: 53000, duration: 0, easing: "swing" },
            { id: "eid682", tween: [ "style", "${_disp3_hodnoty}", "top", '7.78%', { fromValue: '53.8%'}], position: 54000, duration: 5000, easing: "swing" },
            { id: "eid1031", tween: [ "style", "${_hadicku2}", "opacity", '0', { fromValue: '0'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid1035", tween: [ "style", "${_hadicku2}", "opacity", '1', { fromValue: '0'}], position: 38000, duration: 1000, easing: "swing" },
            { id: "eid713", tween: [ "style", "${_refresh4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid707", tween: [ "style", "${_refresh4}", "display", 'none', { fromValue: 'none'}], position: 8000, duration: 0, easing: "easeInQuad" },
            { id: "eid708", tween: [ "style", "${_refresh4}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0, easing: "easeInQuad" },
            { id: "eid425", tween: [ "style", "${_refresh4}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid1032", tween: [ "style", "${_do_pristroja2}", "opacity", '0', { fromValue: '0'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid1036", tween: [ "style", "${_do_pristroja2}", "opacity", '1', { fromValue: '0'}], position: 39000, duration: 1000, easing: "swing" },
            { id: "eid742", tween: [ "transform", "${__1rukav}", "rotateZ", '7deg', { fromValue: '7deg'}], position: 6579, duration: 0, easing: "swing" },
            { id: "eid1104", tween: [ "style", "${_beat_miniCopy}", "left", '50.3%', { fromValue: '50.3%'}], position: 48622, duration: 0, easing: "swing" },
            { id: "eid680", tween: [ "style", "${__6a}", "opacity", '0', { fromValue: '1'}], position: 54000, duration: 2984, easing: "swing" },
            { id: "eid774", tween: [ "style", "${__6a}", "opacity", '0', { fromValue: '0'}], position: 57984, duration: 0, easing: "swing" },
            { id: "eid363", tween: [ "style", "${_next_to_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid366", tween: [ "style", "${_next_to_4}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid375", tween: [ "style", "${_next_to_4}", "display", 'none', { fromValue: 'block'}], position: 23309, duration: 0, easing: "swing" },
            { id: "eid758", tween: [ "style", "${__1merac}", "top", '29.31%', { fromValue: '51.67%'}], position: 2579, duration: 2000, easing: "easeInQuad" },
            { id: "eid355", tween: [ "style", "${_bact_to_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid358", tween: [ "style", "${_bact_to_2}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid255", tween: [ "style", "${_bact_to_2}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid459", tween: [ "style", "${_beat_mini}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid449", tween: [ "style", "${_beat_mini}", "display", 'none', { fromValue: 'none'}], position: 34000, duration: 0, easing: "swing" },
            { id: "eid454", tween: [ "style", "${_beat_mini}", "display", 'block', { fromValue: 'none'}], position: 34508, duration: 0, easing: "swing" },
            { id: "eid456", tween: [ "style", "${_beat_mini}", "display", 'none', { fromValue: 'block'}], position: 35482, duration: 0, easing: "swing" },
            { id: "eid466", tween: [ "style", "${_beat_mini}", "display", 'none', { fromValue: 'none'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid361", tween: [ "style", "${_bact_to_2}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid832", tween: [ "style", "${_prestrcte_lavu}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 1000, easing: "easeInCirc" },
            { id: "eid437", tween: [ "style", "${_ruka5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid443", tween: [ "style", "${_ruka5}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid469", tween: [ "style", "${_ruka5}", "display", 'none', { fromValue: 'block'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid400", tween: [ "style", "${__3}", "top", '0%', { fromValue: '0%'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid900", tween: [ "style", "${_rozbalime_tlakomer}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid563", tween: [ "transform", "${__1rukav2}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 39000, duration: 1000, easing: "swing" },
            { id: "eid894", tween: [ "style", "${_hlavna_arteria}", "left", '36.92%', { fromValue: '36.92%'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid848", tween: [ "style", "${_tak_aby_jej}", "left", '28.58%', { fromValue: '28.58%'}], position: 11000, duration: 0, easing: "swing" },
            { id: "eid626", tween: [ "style", "${__6d}", "opacity", '0', { fromValue: '1'}], position: 54016, duration: 2984, easing: "swing" },
            { id: "eid606", tween: [ "style", "${_disp3_hodnoty}", "width", '7.5%', { fromValue: '7.5%'}], position: 53000, duration: 0, easing: "swing" },
            { id: "eid684", tween: [ "style", "${_disp3_hodnoty}", "width", '42.67%', { fromValue: '7.5%'}], position: 54000, duration: 5000, easing: "swing" },
            { id: "eid1001", tween: [ "style", "${_tam_kde_je_pulz}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0, easing: "easeInQuad" },
            { id: "eid1022", tween: [ "style", "${_tam_kde_je_pulz}", "display", 'none', { fromValue: 'block'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid322", tween: [ "style", "${_refresh2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid75", tween: [ "style", "${_refresh2}", "display", 'none', { fromValue: 'none'}], position: 6750, duration: 0, easing: "easeInCirc" },
            { id: "eid77", tween: [ "style", "${_refresh2}", "display", 'none', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid899", tween: [ "style", "${_refresh2}", "display", 'block', { fromValue: 'none'}], position: 8126, duration: 0, easing: "easeInCirc" },
            { id: "eid202", tween: [ "style", "${_refresh2}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid892", tween: [ "style", "${_hlavna_arteria}", "height", '13.89%', { fromValue: '13.89%'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid1049", tween: [ "style", "${_vasho_srdca}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid727", tween: [ "style", "${_testa}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInExpo" },
            { id: "eid1066", tween: [ "style", "${_next_to_3}", "left", '92%', { fromValue: '92%'}], position: 7721, duration: 0, easing: "swing" },
            { id: "eid826", tween: [ "style", "${_prestrcte_lavu}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0, easing: "easeInCirc" },
            { id: "eid823", tween: [ "style", "${_prestrcte_lavu}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid828", tween: [ "style", "${_cez_d_kruzok}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0, easing: "easeInCirc" },
            { id: "eid839", tween: [ "style", "${_cez_d_kruzok}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0, easing: "swing" },
            { id: "eid825", tween: [ "style", "${_cez_d_kruzok}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid748", tween: [ "style", "${_package_clipart}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0, easing: "swing" },
            { id: "eid821", tween: [ "style", "${_rukab}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0, easing: "easeInCirc" },
            { id: "eid843", tween: [ "style", "${_rukab}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0, easing: "swing" },
            { id: "eid846", tween: [ "style", "${_rukab}", "display", 'none', { fromValue: 'none'}], position: 12500, duration: 0, easing: "swing" },
            { id: "eid822", tween: [ "style", "${_rukab}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid1068", tween: [ "style", "${_bact_to_continue}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "swing" },
            { id: "eid1069", tween: [ "style", "${_bact_to_continue}", "display", 'none', { fromValue: 'block'}], position: 8126, duration: 0, easing: "swing" },
            { id: "eid364", tween: [ "style", "${_bact_to_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid367", tween: [ "style", "${_bact_to_3}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid376", tween: [ "style", "${_bact_to_3}", "display", 'none', { fromValue: 'block'}], position: 23309, duration: 0, easing: "swing" },
            { id: "eid1120", tween: [ "style", "${_beat_miniCopy2}", "width", '6.32%', { fromValue: '6.32%'}], position: 48473, duration: 0, easing: "swing" },
            { id: "eid1103", tween: [ "style", "${_beat_miniCopy}", "top", '68.8%', { fromValue: '68.8%'}], position: 48622, duration: 0, easing: "swing" },
            { id: "eid1119", tween: [ "style", "${_beat_miniCopy2}", "height", '10.47%', { fromValue: '10.47%'}], position: 48473, duration: 0, easing: "swing" },
            { id: "eid1025", tween: [ "style", "${_hadicku2}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid1041", tween: [ "style", "${_hadicku2}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid1124", tween: [ "style", "${_beat_miniCopy2}", "top", '66.21%', { fromValue: '66.21%'}], position: 48473, duration: 0, easing: "swing" },
            { id: "eid1123", tween: [ "style", "${_beat_miniCopy2}", "left", '48.65%', { fromValue: '48.65%'}], position: 48473, duration: 0, easing: "swing" },
            { id: "eid711", tween: [ "style", "${_refresh7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid706", tween: [ "style", "${_refresh7}", "display", 'none', { fromValue: 'none'}], position: 8000, duration: 0, easing: "easeInQuad" },
            { id: "eid676", tween: [ "style", "${_refresh7}", "display", 'none', { fromValue: 'none'}], position: 40705, duration: 0, easing: "swing" },
            { id: "eid677", tween: [ "style", "${_refresh7}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid629", tween: [ "style", "${_refresh7}", "display", 'none', { fromValue: 'block'}], position: 54000, duration: 0, easing: "swing" },
            { id: "eid830", tween: [ "style", "${_prestrcte_lavu}", "width", '72.67%', { fromValue: '72.67%'}], position: 8000, duration: 0, easing: "easeInCirc" },
            { id: "eid595", tween: [ "style", "${_beat_miniCopy}", "display", 'block', { fromValue: 'none'}], position: 48000, duration: 0, easing: "swing" },
            { id: "eid598", tween: [ "style", "${_beat_miniCopy}", "display", 'none', { fromValue: 'block'}], position: 49000, duration: 0, easing: "swing" },
            { id: "eid452", tween: [ "style", "${_beat}", "opacity", '1', { fromValue: '1'}], position: 34000, duration: 0, easing: "swing" },
            { id: "eid1052", tween: [ "style", "${_vasho_srdca}", "opacity", '1', { fromValue: '0'}], position: 43389, duration: 611, easing: "swing" },
            { id: "eid1053", tween: [ "style", "${_vasho_srdca}", "opacity", '0', { fromValue: '1'}], position: 54000, duration: 2000, easing: "swing" },
            { id: "eid432", tween: [ "style", "${_next_to_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid438", tween: [ "style", "${_next_to_6}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid464", tween: [ "style", "${_next_to_6}", "display", 'none', { fromValue: 'block'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid1024", tween: [ "style", "${_zapojte2}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid1042", tween: [ "style", "${_zapojte2}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid1091", tween: [ "style", "${_arteria}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0, easing: "easeInQuad" },
            { id: "eid428", tween: [ "style", "${_arteria}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid1047", tween: [ "style", "${_polozte_ruku}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid360", tween: [ "style", "${_next_to_3b}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid669", tween: [ "style", "${__6c}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid549", tween: [ "style", "${__6c}", "display", 'none', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid576", tween: [ "style", "${__6c}", "display", 'block', { fromValue: 'none'}], position: 44000, duration: 0, easing: "swing" },
            { id: "eid579", tween: [ "style", "${__6c}", "display", 'none', { fromValue: 'block'}], position: 45000, duration: 0, easing: "swing" },
            { id: "eid589", tween: [ "style", "${__6c}", "display", 'block', { fromValue: 'none'}], position: 46000, duration: 0, easing: "swing" },
            { id: "eid591", tween: [ "style", "${__6c}", "display", 'none', { fromValue: 'block'}], position: 47000, duration: 0, easing: "swing" },
            { id: "eid593", tween: [ "style", "${__6c}", "display", 'block', { fromValue: 'none'}], position: 48000, duration: 0, easing: "swing" },
            { id: "eid1101", tween: [ "style", "${_beat_miniCopy}", "border-width", '4px', { fromValue: '4px'}], position: 48622, duration: 0, easing: "swing" },
            { id: "eid893", tween: [ "style", "${_hlavna_arteria}", "width", '55.18%', { fromValue: '55.18%'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid1021", tween: [ "style", "${_beat_mini}", "top", '54.3%', { fromValue: '54.3%'}], position: 34508, duration: 0, easing: "swing" },
            { id: "eid847", tween: [ "style", "${_tak_aby_jej}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid827", tween: [ "style", "${_tak_aby_jej}", "display", 'none', { fromValue: 'none'}], position: 8000, duration: 0, easing: "easeInCirc" },
            { id: "eid833", tween: [ "style", "${_tak_aby_jej}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0, easing: "swing" },
            { id: "eid824", tween: [ "style", "${_tak_aby_jej}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid191", tween: [ "style", "${_next_to_3}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid192", tween: [ "style", "${_refresh2}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid674", tween: [ "style", "${_back_to_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid678", tween: [ "style", "${_back_to_6}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid627", tween: [ "style", "${_back_to_6}", "display", 'none', { fromValue: 'block'}], position: 54000, duration: 0, easing: "swing" },
            { id: "eid553", tween: [ "style", "${__1rukav2}", "left", '5.66%', { fromValue: '5.66%'}], position: 38000, duration: 0, easing: "swing" },
            { id: "eid561", tween: [ "style", "${__1rukav2}", "left", '25.68%', { fromValue: '5.66%'}], position: 39000, duration: 1000, easing: "swing" },
            { id: "eid385", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid386", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid431", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid785", tween: [ "style", "${_back_to_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid786", tween: [ "style", "${_back_to_7}", "display", 'block', { fromValue: 'none'}], position: 54000, duration: 0, easing: "swing" },
            { id: "eid902", tween: [ "style", "${_rozbalime_tlakomer}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1579, easing: "easeInCirc" },
            { id: "eid849", tween: [ "style", "${_cez_d_kruzok}", "left", '30.08%', { fromValue: '30.08%'}], position: 11000, duration: 0, easing: "swing" },
            { id: "eid460", tween: [ "style", "${_next_to_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid461", tween: [ "style", "${_next_to_5}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid426", tween: [ "style", "${_next_to_5}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid945", tween: [ "style", "${_stranu_laktoveho}", "opacity", '0', { fromValue: '0'}], position: 17000, duration: 0, easing: "easeInCubic" },
            { id: "eid949", tween: [ "style", "${_stranu_laktoveho}", "opacity", '1', { fromValue: '0'}], position: 17731, duration: 398, easing: "easeInCubic" },
            { id: "eid1061", tween: [ "style", "${_disp3_hodnoty}", "display", 'block', { fromValue: 'none'}], position: 51000, duration: 0, easing: "swing" },
            { id: "eid616", tween: [ "style", "${_disp3_hodnoty}", "display", 'block', { fromValue: 'block'}], position: 53005, duration: 0, easing: "swing" },
            { id: "eid621", tween: [ "style", "${_disp3_hodnoty}", "display", 'block', { fromValue: 'block'}], position: 54000, duration: 0, easing: "swing" },
            { id: "eid935", tween: [ "style", "${_otocte_dlanou}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "easeInCubic" },
            { id: "eid953", tween: [ "style", "${_otocte_dlanou}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0, easing: "easeInCubic" },
            { id: "eid906", tween: [ "style", "${_farebny}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid929", tween: [ "style", "${_farebny}", "display", 'none', { fromValue: 'block'}], position: 15490, duration: 0, easing: "easeInCubic" },
            { id: "eid911", tween: [ "style", "${_farebny}", "display", 'none', { fromValue: 'none'}], position: 22000, duration: 0, easing: "swing" },
            { id: "eid555", tween: [ "style", "${__1rukav2}", "opacity", '1', { fromValue: '0'}], position: 38000, duration: 1000, easing: "swing" },
            { id: "eid542", tween: [ "style", "${_next_to_7}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid545", tween: [ "style", "${_next_to_7}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid610", tween: [ "transform", "${_disp3_hodnoty}", "skewX", '-20deg', { fromValue: '-20deg'}], position: 53000, duration: 0, easing: "swing" },
            { id: "eid685", tween: [ "transform", "${_disp3_hodnoty}", "skewX", '0deg', { fromValue: '-20deg'}], position: 54000, duration: 5000, easing: "swing" },
            { id: "eid557", tween: [ "style", "${__1merac4}", "top", '23.61%', { fromValue: '52.5%'}], position: 38000, duration: 1000, easing: "swing" },
            { id: "eid1034", tween: [ "style", "${_zapojte2}", "opacity", '1', { fromValue: '0'}], position: 37000, duration: 1000, easing: "swing" },
            { id: "eid675", tween: [ "style", "${_next_finall}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid679", tween: [ "style", "${_next_finall}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid628", tween: [ "style", "${_next_finall}", "display", 'none', { fromValue: 'block'}], position: 54000, duration: 0, easing: "swing" },
            { id: "eid937", tween: [ "style", "${_stranu_laktoveho}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "easeInCubic" },
            { id: "eid951", tween: [ "style", "${_stranu_laktoveho}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0, easing: "easeInCubic" },
            { id: "eid173", tween: [ "style", "${_ruka}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid174", tween: [ "style", "${_ruka}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid820", tween: [ "style", "${_ruka}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0, easing: "easeInCirc" },
            { id: "eid844", tween: [ "style", "${_ruka}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0, easing: "swing" },
            { id: "eid845", tween: [ "style", "${_ruka}", "display", 'block', { fromValue: 'block'}], position: 12500, duration: 0, easing: "swing" },
            { id: "eid196", tween: [ "style", "${_ruka}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid740", tween: [ "style", "${__1rukav}", "width", '36.34%', { fromValue: '5.67%'}], position: 4579, duration: 2000, easing: "swing" },
            { id: "eid623", tween: [ "style", "${__6c}", "opacity", '0', { fromValue: '1'}], position: 54016, duration: 2984, easing: "swing" },
            { id: "eid1058", tween: [ "style", "${_zvukovy_signal}", "display", 'block', { fromValue: 'none'}], position: 51000, duration: 0, easing: "swing" },
            { id: "eid1059", tween: [ "style", "${_zvukovy_signal}", "display", 'none', { fromValue: 'block'}], position: 51560, duration: 0, easing: "swing" },
            { id: "eid1060", tween: [ "style", "${_zvukovy_signal}", "display", 'block', { fromValue: 'none'}], position: 52000, duration: 0, easing: "swing" },
            { id: "eid794", tween: [ "style", "${_next_slide_2}", "top", '86.11%', { fromValue: '86.11%'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid812", tween: [ "style", "${_ciaraVodorovna2Copy}", "display", 'block', { fromValue: 'none'}], position: 59000, duration: 0 },
            { id: "eid1089", tween: [ "style", "${_umiestnite_hadicku}", "opacity", '1', { fromValue: '0'}], position: 25441, duration: 1873, easing: "swing" },
            { id: "eid712", tween: [ "style", "${_refresh4}", "top", '-0.56%', { fromValue: '-0.56%'}], position: 0, duration: 0 },
            { id: "eid1065", tween: [ "style", "${_zvukovy_signal}", "opacity", '0', { fromValue: '1'}], position: 54000, duration: 2984, easing: "swing" },
            { id: "eid799", tween: [ "style", "${_refresh}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0, easing: "easeInQuad" },
            { id: "eid879", tween: [ "style", "${_next_from_continue}", "display", 'block', { fromValue: 'none'}], position: 8126, duration: 0, easing: "easeInCirc" },
            { id: "eid880", tween: [ "style", "${_next_from_continue}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid816", tween: [ "style", "${_ciaraVodorovna2Copy7}", "display", 'block', { fromValue: 'none'}], position: 59000, duration: 0 },
            { id: "eid936", tween: [ "style", "${_okraj_manzety}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "easeInCubic" },
            { id: "eid952", tween: [ "style", "${_okraj_manzety}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0, easing: "easeInCubic" },
            { id: "eid130", tween: [ "style", "${_next_to_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid76", tween: [ "style", "${_next_to_3}", "display", 'none', { fromValue: 'none'}], position: 6750, duration: 0, easing: "easeInCirc" },
            { id: "eid78", tween: [ "style", "${_next_to_3}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid878", tween: [ "style", "${_next_to_3}", "display", 'none', { fromValue: 'block'}], position: 8126, duration: 0, easing: "easeInCirc" },
            { id: "eid201", tween: [ "style", "${_next_to_3}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid749", tween: [ "style", "${__1merac}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0, easing: "swing" },
            { id: "eid1004", tween: [ "style", "${_tam_kde_je_pulz}", "opacity", '1', { fromValue: '0'}], position: 32000, duration: 1000, easing: "swing" },
            { id: "eid354", tween: [ "style", "${_next_to_3b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid357", tween: [ "style", "${_next_to_3b}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid254", tween: [ "style", "${_next_to_3b}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid558", tween: [ "style", "${__1merac4}", "left", '56.16%', { fromValue: '63.83%'}], position: 38000, duration: 1000, easing: "swing" },
            { id: "eid608", tween: [ "transform", "${_disp3_hodnoty}", "rotateZ", '2deg', { fromValue: '2deg'}], position: 53000, duration: 0, easing: "swing" },
            { id: "eid687", tween: [ "transform", "${_disp3_hodnoty}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 54000, duration: 5000, easing: "swing" },
            { id: "eid969", tween: [ "style", "${_stredu_paze}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid998", tween: [ "style", "${_stredu_paze}", "display", 'none', { fromValue: 'block'}], position: 31828, duration: 0, easing: "easeInQuad" },
            { id: "eid540", tween: [ "style", "${__1rukav2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid551", tween: [ "style", "${__1rukav2}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0, easing: "swing" },
            { id: "eid534", tween: [ "style", "${__1rukav2}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid925", tween: [ "style", "${_farebnyKruzok}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0, easing: "easeInCubic" },
            { id: "eid928", tween: [ "style", "${_farebnyKruzok}", "display", 'none', { fromValue: 'block'}], position: 15490, duration: 0, easing: "easeInCubic" },
            { id: "eid733", tween: [ "style", "${__1merac}", "height", '57.78%', { fromValue: '8.89%'}], position: 2579, duration: 2000, easing: "easeInExpo" },
            { id: "eid995", tween: [ "style", "${__1_5_2_5_cm}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0, easing: "easeInQuad" },
            { id: "eid996", tween: [ "style", "${__1_5_2_5_cm}", "display", 'none', { fromValue: 'block'}], position: 23309, duration: 0, easing: "easeInQuad" },
            { id: "eid1051", tween: [ "style", "${_dlanou_hore2}", "opacity", '1', { fromValue: '0'}], position: 42681, duration: 708, easing: "swing" },
            { id: "eid1054", tween: [ "style", "${_dlanou_hore2}", "opacity", '0', { fromValue: '1'}], position: 54000, duration: 2000, easing: "swing" },
            { id: "eid947", tween: [ "style", "${_otocte_dlanou}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 369, easing: "easeInCubic" },
            { id: "eid851", tween: [ "style", "${_tak_aby_jej}", "top", '63.05%', { fromValue: '63.05%'}], position: 11000, duration: 0, easing: "swing" },
            { id: "eid387", tween: [ "transform", "${__3}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid959", tween: [ "style", "${_pritiahnite_manzetu2}", "opacity", '1', { fromValue: '1'}], position: 21000, duration: 0, easing: "easeInCubic" },
            { id: "eid992", tween: [ "style", "${_hlavna_arteria}", "top", '46.11%', { fromValue: '46.11%'}], position: 7000, duration: 0, easing: "easeInQuad" },
            { id: "eid129", tween: [ "style", "${_back_to_main}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid73", tween: [ "style", "${_back_to_main}", "display", 'none', { fromValue: 'none'}], position: 6750, duration: 0, easing: "easeInCirc" },
            { id: "eid74", tween: [ "style", "${_back_to_main}", "display", 'none', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid1067", tween: [ "style", "${_back_to_main}", "display", 'block', { fromValue: 'none'}], position: 8126, duration: 0, easing: "swing" },
            { id: "eid197", tween: [ "style", "${_back_to_main}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid1090", tween: [ "style", "${_stredu_paze}", "opacity", '1', { fromValue: '0'}], position: 25441, duration: 1873, easing: "swing" },
            { id: "eid850", tween: [ "style", "${_cez_d_kruzok}", "top", '81.95%', { fromValue: '81.95%'}], position: 11000, duration: 0, easing: "swing" },
            { id: "eid453", tween: [ "style", "${_beat_mini}", "opacity", '1', { fromValue: '1'}], position: 34000, duration: 0, easing: "swing" },
            { id: "eid599", tween: [ "style", "${_disp3_hodnoty}", "height", '12.51%', { fromValue: '12.5%'}], position: 53000, duration: 1000, easing: "swing" },
            { id: "eid681", tween: [ "style", "${_disp3_hodnoty}", "height", '77.56%', { fromValue: '12.5%'}], position: 54000, duration: 5000, easing: "swing" },
            { id: "eid1015", tween: [ "style", "${_je_vasa_hlavna}", "left", '28.67%', { fromValue: '28.67%'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid187", tween: [ "style", "${_back_to_main}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid1014", tween: [ "style", "${_je_vasa_hlavna}", "width", '53.34%', { fromValue: '53.34%'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid842", tween: [ "style", "${_cez_d_kruzok}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 1000, easing: "swing" },
            { id: "eid543", tween: [ "style", "${_bact_to_5}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid546", tween: [ "style", "${_bact_to_5}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid750", tween: [ "style", "${__1rukav}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0, easing: "swing" },
            { id: "eid433", tween: [ "style", "${_refresh5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid439", tween: [ "style", "${_refresh5}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid463", tween: [ "style", "${_refresh5}", "display", 'none', { fromValue: 'block'}], position: 37000, duration: 0, easing: "swing" },
            { id: "eid204", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid968", tween: [ "style", "${_umiestnite_hadicku}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid997", tween: [ "style", "${_umiestnite_hadicku}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0, easing: "easeInQuad" },
            { id: "eid757", tween: [ "style", "${__1merac}", "left", '64.25%', { fromValue: '17.92%'}], position: 2579, duration: 2000, easing: "easeInQuad" },
            { id: "eid734", tween: [ "style", "${__1merac}", "width", '33.51%', { fromValue: '5.17%'}], position: 2579, duration: 2000, easing: "easeInExpo" },
            { id: "eid793", tween: [ "style", "${_next_slide_2}", "left", '91.67%', { fromValue: '91.67%'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid153", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0.000000'}], position: 7000, duration: 500, easing: "easeInCirc" },
            { id: "eid154", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 500, easing: "easeInCirc" },
            { id: "eid194", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '0'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid907", tween: [ "style", "${_prestrcte_lavu2}", "display", 'block', { fromValue: 'none'}], position: 12987, duration: 0, easing: "swing" },
            { id: "eid933", tween: [ "style", "${_prestrcte_lavu2}", "display", 'none', { fromValue: 'block'}], position: 16008, duration: 0, easing: "easeInCubic" },
            { id: "eid912", tween: [ "style", "${_prestrcte_lavu2}", "display", 'none', { fromValue: 'none'}], position: 22000, duration: 0, easing: "swing" },
            { id: "eid944", tween: [ "style", "${_okraj_manzety}", "opacity", '0', { fromValue: '0'}], position: 17000, duration: 0, easing: "easeInCubic" },
            { id: "eid948", tween: [ "style", "${_okraj_manzety}", "opacity", '1', { fromValue: '0'}], position: 17369, duration: 362, easing: "easeInCubic" },
            { id: "eid406", tween: [ "style", "${__3}", "width", '57.18%', { fromValue: '57.18%'}], position: 25000, duration: 0, easing: "swing" },
            { id: "eid905", tween: [ "style", "${_a_s_hadickou}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid932", tween: [ "style", "${_a_s_hadickou}", "display", 'none', { fromValue: 'block'}], position: 16008, duration: 0, easing: "easeInCubic" },
            { id: "eid910", tween: [ "style", "${_a_s_hadickou}", "display", 'none', { fromValue: 'none'}], position: 22000, duration: 0, easing: "swing" },
            { id: "eid818", tween: [ "style", "${__2a}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeInCirc" },
            { id: "eid819", tween: [ "style", "${__2a}", "display", 'none', { fromValue: 'block'}], position: 25000, duration: 0, easing: "easeInCirc" },
            { id: "eid904", tween: [ "style", "${_ramena}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid931", tween: [ "style", "${_ramena}", "display", 'none', { fromValue: 'block'}], position: 16008, duration: 0, easing: "easeInCubic" },
            { id: "eid909", tween: [ "style", "${_ramena}", "display", 'none', { fromValue: 'none'}], position: 22000, duration: 0, easing: "swing" },
            { id: "eid612", tween: [ "transform", "${_disp3_hodnoty}", "skewY", '7deg', { fromValue: '7deg'}], position: 53000, duration: 0, easing: "swing" },
            { id: "eid686", tween: [ "transform", "${_disp3_hodnoty}", "skewY", '0deg', { fromValue: '7deg'}], position: 54000, duration: 5000, easing: "swing" },
            { id: "eid739", tween: [ "style", "${__1rukav}", "height", '46.11%', { fromValue: '6.67%'}], position: 4579, duration: 2000, easing: "swing" },
            { id: "eid954", tween: [ "style", "${__7b}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0, easing: "easeInCubic" },
            { id: "eid956", tween: [ "style", "${__7b}", "display", 'none', { fromValue: 'block'}], position: 23309, duration: 0, easing: "easeInCubic" },
            { id: "eid1095", tween: [ "style", "${_hlavna_arteria_red}", "opacity", '1', { fromValue: '0'}], position: 28000, duration: 1000, easing: "easeInQuad" },
            { id: "eid1097", tween: [ "style", "${_hlavna_arteria_red}", "opacity", '0', { fromValue: '1'}], position: 29000, duration: 2000, easing: "easeInQuad" },
            { id: "eid1013", tween: [ "style", "${_tam_kde_je_pulz}", "top", '4.72%', { fromValue: '4.72%'}], position: 32000, duration: 0, easing: "swing" },
            { id: "eid359", tween: [ "style", "${_refresh3}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid918", tween: [ "style", "${_prestrcte_lavu2}", "opacity", '1', { fromValue: '0'}], position: 12987, duration: 518, easing: "easeInCubic" },
            { id: "eid672", tween: [ "style", "${__6d}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid548", tween: [ "style", "${__6d}", "display", 'none', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid577", tween: [ "style", "${__6d}", "display", 'block', { fromValue: 'none'}], position: 44000, duration: 0, easing: "swing" },
            { id: "eid578", tween: [ "style", "${__6d}", "display", 'none', { fromValue: 'block'}], position: 45000, duration: 0, easing: "swing" },
            { id: "eid588", tween: [ "style", "${__6d}", "display", 'block', { fromValue: 'none'}], position: 46000, duration: 0, easing: "swing" },
            { id: "eid590", tween: [ "style", "${__6d}", "display", 'none', { fromValue: 'block'}], position: 47000, duration: 0, easing: "swing" },
            { id: "eid592", tween: [ "style", "${__6d}", "display", 'block', { fromValue: 'none'}], position: 48000, duration: 0, easing: "swing" },
            { id: "eid813", tween: [ "style", "${_ciaraVodorovna2Copy2}", "display", 'block', { fromValue: 'none'}], position: 59000, duration: 0 },
            { id: "eid631", tween: [ "style", "${__6a}", "top", '-0.28%', { fromValue: '0%'}], position: 54000, duration: 3984, easing: "swing" },
            { id: "eid559", tween: [ "style", "${__1merac4}", "opacity", '0', { fromValue: '0'}], position: 38000, duration: 0, easing: "swing" },
            { id: "eid560", tween: [ "style", "${__1merac4}", "opacity", '1', { fromValue: '0'}], position: 39000, duration: 1000, easing: "swing" },
            { id: "eid915", tween: [ "style", "${_farebny}", "opacity", '0', { fromValue: '0'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid919", tween: [ "style", "${_farebny}", "opacity", '1', { fromValue: '0'}], position: 13505, duration: 495, easing: "easeInCubic" },
            { id: "eid353", tween: [ "style", "${_refresh3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid356", tween: [ "style", "${_refresh3}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid253", tween: [ "style", "${_refresh3}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0, easing: "swing" },
            { id: "eid1048", tween: [ "style", "${_dlanou_hore2}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0, easing: "swing" },
            { id: "eid897", tween: [ "style", "${_hlavna_arteria}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid898", tween: [ "style", "${_hlavna_arteria}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid896", tween: [ "style", "${_hlavna_arteria}", "display", 'none', { fromValue: 'block'}], position: 8126, duration: 0, easing: "easeInCirc" },
            { id: "eid865", tween: [ "style", "${_hlavna_arteria}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0, easing: "swing" },
            { id: "eid883", tween: [ "style", "${_hlavna_arteria}", "opacity", '1', { fromValue: '1'}], position: 7000, duration: 0, easing: "easeInCirc" },
            { id: "eid834", tween: [ "style", "${_tak_aby_jej}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 1000, easing: "swing" },
            { id: "eid838", tween: [ "style", "${_tak_aby_jej}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 1000, easing: "swing" },
            { id: "eid961", tween: [ "style", "${_pause}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "easeInCubic" },
            { id: "eid962", tween: [ "style", "${_pause}", "display", 'none', { fromValue: 'block'}], position: 25000, duration: 0, easing: "easeInCubic" },
            { id: "eid988", tween: [ "style", "${_pritiahnite_manzetu2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid938", tween: [ "style", "${_pritiahnite_manzetu2}", "display", 'none', { fromValue: 'none'}], position: 17000, duration: 0, easing: "easeInCubic" },
            { id: "eid958", tween: [ "style", "${_pritiahnite_manzetu2}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0, easing: "easeInCubic" },
            { id: "eid955", tween: [ "style", "${_pritiahnite_manzetu2}", "display", 'none', { fromValue: 'block'}], position: 23309, duration: 0, easing: "easeInCubic" },
            { id: "eid817", tween: [ "style", "${_ciaraVodorovna2Copy6}", "display", 'block', { fromValue: 'none'}], position: 59000, duration: 0 },
            { id: "eid967", tween: [ "style", "${_play}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCubic" },
            { id: "eid966", tween: [ "style", "${_play}", "display", 'none', { fromValue: 'none'}], position: 20491, duration: 0, easing: "easeInCubic" },
            { id: "eid601", tween: [ "style", "${_disp3_hodnoty}", "left", '54.92%', { fromValue: '54.9%'}], position: 53000, duration: 1000, easing: "swing" },
            { id: "eid683", tween: [ "style", "${_disp3_hodnoty}", "left", '28.67%', { fromValue: '54.92%'}], position: 54000, duration: 5000, easing: "swing" },
            { id: "eid554", tween: [ "style", "${__1rukav2}", "top", '36.94%', { fromValue: '36.94%'}], position: 38000, duration: 0, easing: "swing" },
            { id: "eid562", tween: [ "style", "${__1rukav2}", "top", '29.59%', { fromValue: '36.94%'}], position: 39000, duration: 1000, easing: "swing" },
            { id: "eid747", tween: [ "style", "${_package_clipart}", "opacity", '1', { fromValue: '0'}], position: 1579, duration: 1000, easing: "swing" }         ]
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
         "${__1rukav}": [
            ["style", "top", '18px'],
            ["motion", "location", '144px 116px'],
            ["style", "height", '84px'],
            ["style", "left", '347px'],
            ["style", "width", '86px']
         ],
         "${_package_clipart2}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ],
         "${__1merac3}": [
            ["style", "top", '92px'],
            ["motion", "location", '185.02px 123.99px'],
            ["style", "height", '23.7%'],
            ["style", "left", '152px'],
            ["style", "width", '20.64%']
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
            { id: "eid52", tween: [ "style", "${__1merac3}", "width", '115.64%', { fromValue: '20.64%'}], position: 2750, duration: 2000, easing: "swing" },
            { id: "eid50", tween: [ "style", "${__1merac3}", "height", '146.65%', { fromValue: '23.7%'}], position: 2750, duration: 2000, easing: "swing" },
            { id: "eid51", tween: [ "motion", "${__1merac3}", [[185.02,123.99,0,0],[786.94,-88.28,188.66,162.32,230.89,198.66],[851,140.01,0,0]]], position: 2750, duration: 2000, easing: "swing" },
            { id: "eid61", tween: [ "motion", "${__1merac3}", [[851.02,140.02,0,0],[853.02,140.03,0,0]]], position: 4750, duration: 2000, easing: "swing" },
            { id: "eid59", tween: [ "style", "${__1rukav}", "width", '370px', { fromValue: '86px'}], position: 4750, duration: 2000, easing: "easeInExpo" },
            { id: "eid55", tween: [ "motion", "${__1rukav}", [[144,116,0,0],[439.18,-117.44,279.15,4.6,363.56,5.99],[532,162,0,0]]], position: 4750, duration: 2000, easing: "easeInExpo" },
            { id: "eid57", tween: [ "style", "${__1rukav}", "height", '288px', { fromValue: '84px'}], position: 4750, duration: 2000, easing: "easeInExpo" }         ]
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
})(jQuery, AdobeEdge, "EDGE_tlakomer_meranie");
