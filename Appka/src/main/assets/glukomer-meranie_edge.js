/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


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
            id:'refresh7',
            display:'none',
            type:'image',
            rect:['91.7%','0%','0%','0%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/refresh.png','0px','0px']
         },
         {
            id:'left7',
            display:'none',
            type:'image',
            rect:['0%','86.1%','0%','0%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'right7',
            display:'none',
            type:'image',
            rect:['91.7%','86.1%','0%','0%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'glukomer3',
            display:'none',
            type:'image',
            rect:['8.3%','6.1%','41.6%','87.7%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/glukomer.png','0px','0px']
         },
         {
            id:'ciselny_kod',
            display:'none',
            type:'image',
            rect:['7.3%','10.8%','27.2%','37.2%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/ciselny_kod.png','0px','0px']
         },
         {
            id:'po_2_sekundach_sa',
            display:'none',
            type:'image',
            rect:['33.5%','77.1%','66.5%','10.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/po_2_sekundach_sa.png','0px','0px']
         },
         {
            id:'sa_zobrazia_na_displeji',
            display:'none',
            type:'image',
            rect:['41.7%','50%','58.4%','10.3%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/sa_zobrazia_na_displeji.png','0px','0px']
         },
         {
            id:'vsetky_segmenty',
            display:'none',
            type:'image',
            rect:['52.4%','38.6%','47.6%','10.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/vsetky_segmenty.png','0px','0px']
         },
         {
            id:'glukometer_sa_zapne',
            display:'none',
            type:'image',
            rect:['39.7%','13.9%','60.4%','10.3%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/glukometer_sa_zapne.png','0px','0px']
         },
         {
            id:'refresh6',
            display:'none',
            type:'image',
            rect:['91.7%','0%','0%','0%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/refresh.png','0px','0px']
         },
         {
            id:'left6',
            display:'none',
            type:'image',
            rect:['0%','86.1%','0%','0%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'right6',
            display:'none',
            type:'image',
            rect:['91.7%','86.1%','0%','0%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'g_2a',
            display:'none',
            type:'image',
            rect:['0%','0%','60.6%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/g_2a.png','0px','0px']
         },
         {
            id:'testovaciou_zonou',
            display:'none',
            type:'image',
            rect:['54.8%','75.8%','44.8%','8.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/testovaciou_zonou.png','0px','0px']
         },
         {
            id:'drazkami_do_glukomera',
            display:'none',
            type:'image',
            rect:['29.7%','19.7%','69.9%','10.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/drazkami_do_glukomera.png','0px','0px']
         },
         {
            id:'uistite_sa_ze_ho',
            display:'none',
            type:'image',
            rect:['31.6%','32.5%','68%','10.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/uistite_sa_ze_ho.png','0px','0px']
         },
         {
            id:'vlozte_testovaci',
            display:'none',
            type:'image',
            rect:['23.2%','6.9%','68%','10.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/vlozte_testovaci.png','0px','0px']
         },
         {
            id:'refresh5',
            display:'none',
            type:'image',
            rect:['91.7%','0%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/refresh.png','0px','0px']
         },
         {
            id:'left5',
            display:'none',
            type:'image',
            rect:['0%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'right5',
            display:'none',
            type:'image',
            rect:['91.7%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'spusta_sa_stlacenim',
            display:'none',
            type:'image',
            rect:['38.8%','60.6%','60%','7.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/spusta_sa_stlacenim.png','0px','0px']
         },
         {
            id:'g1f',
            display:'none',
            type:'image',
            rect:['4.2%','48.9%','33.3%','34.7%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/g1f.png','0px','0px']
         },
         {
            id:'konce_kazdy_zvlast_a_citit',
            display:'none',
            type:'image',
            rect:['38.1%','36.3%','61.1%','6.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/konce_kazdy_zvlast_a_citit.png','0px','0px']
         },
         {
            id:'pomocka_bude_pripravena',
            display:'none',
            type:'image',
            rect:['38.1%','28.9%','60%','6.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/pomocka_bude_pripravena.png','0px','0px']
         },
         {
            id:'a_tahajte_koniec_valca',
            display:'none',
            type:'image',
            rect:['38.2%','21.9%','60%','6.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/a_tahajte_koniec_valca.png','0px','0px']
         },
         {
            id:'drzte_nastavitelny_koniec_v',
            display:'none',
            type:'image',
            rect:['38.2%','13.9%','61.1%','6.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/drzte_nastavitelny_koniec_v.png','0px','0px']
         },
         {
            id:'g1e',
            display:'none',
            type:'image',
            rect:['4.2%','11.1%','33.3%','32.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/g1e.png','0px','0px']
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
            id:'left4',
            display:'none',
            type:'image',
            rect:['0%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'right4',
            display:'none',
            type:'image',
            rect:['91.7%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'_4-5_pre_silnu',
            display:'none',
            type:'image',
            rect:['41%','80.6%','51.3%','7.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/4-5_pre_silnu.png','0px','0px']
         },
         {
            id:'_3_pre_strednu',
            display:'none',
            type:'image',
            rect:['41%','73.3%','27.3%','7.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/3_pre_strednu.png','0px','0px']
         },
         {
            id:'_1-2_pre_makku2',
            display:'none',
            type:'image',
            rect:['41%','65.8%','39.8%','7.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/1-2_pre_makku.png','0px','0px']
         },
         {
            id:'cisla_k_sipke_na',
            display:'none',
            type:'image',
            rect:['38.7%','56.9%','61%','8.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/cisla_k_sipke_na.png','0px','0px']
         },
         {
            id:'zvolte_hlbku_prieniku',
            display:'none',
            type:'image',
            rect:['38.7%','48.1%','52.9%','8.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/zvolte_hlbku_prieniku.png','0px','0px']
         },
         {
            id:'otocte_nastavitelnym_koncom',
            display:'none',
            type:'image',
            rect:['38.7%','39.2%','52.2%','8.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/otocte_nastavitelnym_koncom.png','0px','0px']
         },
         {
            id:'g1d',
            display:'none',
            type:'image',
            rect:['4.2%','43.6%','33.4%','32.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/g1d.png','0px','0px']
         },
         {
            id:'vyberte_ochranny_kryt',
            display:'none',
            type:'image',
            rect:['38.7%','15.3%','61%','10.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/vyberte_ochranny_kryt.png','0px','0px']
         },
         {
            id:'g1c',
            display:'none',
            type:'image',
            rect:['4.2%','5%','33.4%','31.1%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/g1c.png','0px','0px']
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
            id:'left3',
            display:'none',
            type:'image',
            rect:['0%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'right3',
            display:'none',
            type:'image',
            rect:['91.7%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'do_drzadla_lancety',
            display:'none',
            type:'image',
            rect:['39.2%','63.6%','43.8%','10.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/do_drzadla_lancety.png','0px','0px']
         },
         {
            id:'vlozte_novu_lancetu',
            display:'none',
            type:'image',
            rect:['39.2%','50%','59.6%','10.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/vlozte_novu_lancetu.png','0px','0px']
         },
         {
            id:'g1b',
            display:'none',
            type:'image',
            rect:['4.2%','43.9%','33.3%','35.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/g1b.png','0px','0px']
         },
         {
            id:'koniec_autolancety',
            display:'none',
            type:'image',
            rect:['39.2%','25.3%','45.3%','10.3%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/koniec_autolancety.png','0px','0px']
         },
         {
            id:'odsroubujte_nastavitelny',
            display:'none',
            type:'image',
            rect:['39.2%','11.7%','53.4%','10.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/odsroubujte_nastavitelny.png','0px','0px']
         },
         {
            id:'g1a',
            display:'none',
            type:'image',
            rect:['4.2%','6.9%','33.3%','30.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/g1a.png','0px','0px']
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
            id:'left2',
            display:'none',
            type:'image',
            rect:['0%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'right2',
            display:'none',
            type:'image',
            rect:['91.7%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'rozbalime_glukomer',
            type:'image',
            rect:['22.8%','12.2%','54.2%','10.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/rozbalime_glukomer.png','0px','0px']
         },
         {
            id:'package_clipart',
            type:'image',
            rect:['6.7%','31.3%','26.6%','37.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/package%20clipart.png','0px','0px']
         },
         {
            id:'glukomer2',
            display:'none',
            type:'image',
            rect:['15.8%','44.7%','4.2%','8.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/glukomer.png','0px','0px']
         },
         {
            id:'autolanceta',
            display:'none',
            type:'image',
            rect:['20%','44.7%','5%','5.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/autolanceta.png','0px','0px']
         },
         {
            id:'nadobka_pasiky',
            display:'none',
            type:'image',
            rect:['19.5%','47.5%','3%','8.1%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/nadobka_pasiky.png','0px','0px']
         },
         {
            id:'pasikCopy4',
            display:'none',
            type:'image',
            rect:['87.8%','60.3%','0.8%','5.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/pasik.png','0px','0px'],
            transform:[[],[],['45']]
         },
         {
            id:'pasikCopy3',
            display:'none',
            type:'image',
            rect:['86%','61.1%','0.8%','5.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/pasik.png','0px','0px'],
            transform:[[],[],['35']]
         },
         {
            id:'pasikCopy2',
            display:'none',
            type:'image',
            rect:['83.7%','61.1%','0.8%','5.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/pasik.png','0px','0px'],
            transform:[[],[],['25']]
         },
         {
            id:'pasikCopy',
            display:'none',
            type:'image',
            rect:['20.2%','41.9%','0.8%','5.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/pasik.png','0px','0px']
         },
         {
            id:'pasik',
            display:'none',
            type:'image',
            rect:['20.2%','41.9%','0.8%','5.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/pasik.png','0px','0px']
         },
         {
            id:'refresh1',
            type:'image',
            rect:['91.7%','0%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/refresh.png','0px','0px']
         },
         {
            id:'right1',
            type:'image',
            rect:['91.7%','86.1%','8.3%','13.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_g1c}": [
            ["style", "top", '5%'],
            ["style", "display", 'none'],
            ["style", "height", '31.07%'],
            ["style", "opacity", '0'],
            ["style", "left", '4.17%'],
            ["style", "width", '33.35%']
         ],
         "${_refresh6}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '91.67%'],
            ["style", "width", '8.34%']
         ],
         "${_zvolte_hlbku_prieniku}": [
            ["style", "top", '48.06%'],
            ["style", "display", 'none'],
            ["style", "height", '8.89%'],
            ["style", "opacity", '0'],
            ["style", "left", '38.67%'],
            ["style", "width", '52.92%']
         ],
         "${_left7}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0%'],
            ["style", "width", '8.34%']
         ],
         "${_right7}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '91.66%'],
            ["style", "width", '8.34%']
         ],
         "${_g_2a}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "height", '100%'],
            ["style", "opacity", '0'],
            ["style", "left", '0%'],
            ["style", "width", '60.61%']
         ],
         "${_right1}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'block'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "width", '8.34%']
         ],
         "${_refresh4}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_a_tahajte_koniec_valca}": [
            ["style", "top", '21.94%'],
            ["style", "display", 'none'],
            ["style", "height", '6.94%'],
            ["style", "opacity", '0'],
            ["style", "left", '38.17%'],
            ["style", "width", '59.97%']
         ],
         "${_po_2_sekundach_sa}": [
            ["style", "top", '77.08%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '33.5%'],
            ["style", "width", '66.5%']
         ],
         "${_pasik}": [
            ["style", "top", '41.94%'],
            ["style", "display", 'none'],
            ["style", "height", '5.35%'],
            ["style", "left", '20.17%'],
            ["style", "width", '0.84%']
         ],
         "${_right4}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_drzte_nastavitelny_koniec_v}": [
            ["style", "top", '13.89%'],
            ["style", "display", 'none'],
            ["style", "height", '6.94%'],
            ["style", "opacity", '0'],
            ["style", "left", '38.17%'],
            ["style", "width", '61.09%']
         ],
         "${_refresh5}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '91.67%'],
            ["style", "width", '8.34%']
         ],
         "${_ciselny_kod}": [
            ["style", "top", '10.83%'],
            ["style", "display", 'none'],
            ["style", "height", '37.22%'],
            ["style", "opacity", '1'],
            ["style", "left", '7.33%'],
            ["style", "width", '27.17%']
         ],
         "${_vyberte_ochranny_kryt}": [
            ["style", "top", '15.28%'],
            ["style", "display", 'none'],
            ["style", "height", '10.52%'],
            ["style", "opacity", '0'],
            ["style", "left", '38.67%'],
            ["style", "width", '61%']
         ],
         "${_pasikCopy}": [
            ["style", "top", '60.42%'],
            ["transform", "skewX", '15deg'],
            ["style", "display", 'none'],
            ["style", "height", '19%'],
            ["style", "left", '78.44%'],
            ["style", "width", '3%']
         ],
         "${_spusta_sa_stlacenim}": [
            ["style", "top", '60.56%'],
            ["style", "display", 'none'],
            ["style", "height", '7.5%'],
            ["style", "opacity", '0'],
            ["style", "left", '38.75%'],
            ["style", "width", '60%']
         ],
         "${_refresh1}": [
            ["style", "top", '0%'],
            ["style", "display", 'block'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_sa_zobrazia_na_displeji}": [
            ["style", "top", '50%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '41.67%'],
            ["style", "width", '58.42%']
         ],
         "${_drazkami_do_glukomera}": [
            ["style", "top", '35.83%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '34.83%'],
            ["style", "width", '64.42%']
         ],
         "${_left5}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0%'],
            ["style", "width", '8.34%']
         ],
         "${_g1d}": [
            ["style", "top", '43.61%'],
            ["style", "display", 'none'],
            ["style", "height", '32.92%'],
            ["style", "opacity", '0'],
            ["style", "left", '4.17%'],
            ["style", "width", '33.35%']
         ],
         "${_right5}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '91.67%'],
            ["style", "width", '8.34%']
         ],
         "${_konce_kazdy_zvlast_a_citit}": [
            ["style", "top", '36.25%'],
            ["style", "display", 'none'],
            ["style", "height", '6.94%'],
            ["style", "opacity", '0'],
            ["style", "left", '38.08%'],
            ["style", "width", '61.09%']
         ],
         "${_left2}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_left6}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_glukometer_sa_zapne}": [
            ["style", "top", '13.89%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '41.67%'],
            ["style", "width", '58.42%']
         ],
         "${_otocte_nastavitelnym_koncom}": [
            ["style", "top", '39.17%'],
            ["style", "display", 'none'],
            ["style", "height", '8.89%'],
            ["style", "opacity", '0'],
            ["style", "left", '38.67%'],
            ["style", "width", '52.15%']
         ],
         "${_package_clipart}": [
            ["style", "top", '31.25%'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '6.67%'],
            ["style", "width", '26.64%']
         ],
         "${_g1e}": [
            ["style", "top", '11.11%'],
            ["style", "display", 'none'],
            ["style", "height", '32.82%'],
            ["style", "opacity", '0'],
            ["style", "left", '4.17%'],
            ["style", "width", '33.34%']
         ],
         "${_refresh7}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_pomocka_bude_pripravena}": [
            ["style", "top", '28.89%'],
            ["style", "display", 'none'],
            ["style", "height", '6.94%'],
            ["style", "opacity", '0'],
            ["style", "left", '38.08%'],
            ["style", "width", '60%']
         ],
         "${__4-5_pre_silnu}": [
            ["style", "top", '80.56%'],
            ["style", "display", 'none'],
            ["style", "height", '7.5%'],
            ["style", "opacity", '0'],
            ["style", "left", '41%'],
            ["style", "width", '51.27%']
         ],
         "${_right6}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.66%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_vlozte_testovaci}": [
            ["style", "top", '6.94%'],
            ["style", "opacity", '0'],
            ["style", "left", '23.17%'],
            ["style", "display", 'none']
         ],
         "${_pasikCopy4}": [
            ["style", "top", '59.5%'],
            ["transform", "skewX", '45deg'],
            ["style", "display", 'none'],
            ["style", "height", '19.11%'],
            ["style", "left", '84.16%'],
            ["style", "width", '3%']
         ],
         "${_autolanceta}": [
            ["style", "top", '43.42%'],
            ["style", "display", 'none'],
            ["style", "height", '5.61%'],
            ["style", "left", '21%'],
            ["style", "width", '5%']
         ],
         "${_cisla_k_sipke_na}": [
            ["style", "top", '56.94%'],
            ["style", "display", 'none'],
            ["style", "height", '8.89%'],
            ["style", "opacity", '0'],
            ["style", "left", '38.67%'],
            ["style", "width", '61%']
         ],
         "${_pasikCopy3}": [
            ["style", "top", '60.28%'],
            ["transform", "skewX", '35deg'],
            ["style", "display", 'none'],
            ["style", "height", '19.11%'],
            ["style", "left", '82.36%'],
            ["style", "width", '3%']
         ],
         "${_nadobka_pasiky}": [
            ["style", "top", '47.5%'],
            ["style", "display", 'none'],
            ["style", "height", '8.09%'],
            ["style", "left", '19.5%'],
            ["style", "width", '3%']
         ],
         "${_right2}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_g1a}": [
            ["style", "top", '6.94%'],
            ["style", "display", 'none'],
            ["style", "height", '30.56%'],
            ["style", "opacity", '0'],
            ["style", "left", '4.17%'],
            ["style", "width", '33.34%']
         ],
         "${_do_drzadla_lancety}": [
            ["style", "top", '63.61%'],
            ["style", "display", 'none'],
            ["style", "height", '10.44%'],
            ["style", "opacity", '0'],
            ["style", "left", '39.17%'],
            ["style", "width", '43.75%']
         ],
         "${_g1b}": [
            ["style", "top", '43.89%'],
            ["style", "display", 'none'],
            ["style", "height", '35.56%'],
            ["style", "opacity", '0'],
            ["style", "left", '4.17%'],
            ["style", "width", '33.34%']
         ],
         "${_g1f}": [
            ["style", "top", '48.88%'],
            ["style", "display", 'none'],
            ["style", "height", '34.72%'],
            ["style", "opacity", '0'],
            ["style", "left", '4.17%'],
            ["style", "width", '33.34%']
         ],
         "${_vsetky_segmenty}": [
            ["style", "top", '38.61%'],
            ["style", "opacity", '0'],
            ["style", "left", '52.42%'],
            ["style", "display", 'none']
         ],
         "${_odsroubujte_nastavitelny}": [
            ["style", "top", '11.67%'],
            ["style", "display", 'none'],
            ["style", "height", '10.52%'],
            ["style", "opacity", '0'],
            ["style", "left", '39.17%'],
            ["style", "width", '53.42%']
         ],
         "${_left4}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_glukomer3}": [
            ["style", "top", '0%'],
            ["style", "height", '87.68%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0%'],
            ["style", "width", '41.64%']
         ],
         "${_pasikCopy2}": [
            ["style", "top", '60.28%'],
            ["transform", "skewX", '25deg'],
            ["style", "display", 'none'],
            ["style", "height", '19.11%'],
            ["style", "left", '79.98%'],
            ["style", "width", '3%']
         ],
         "${_vlozte_novu_lancetu}": [
            ["style", "top", '50%'],
            ["style", "display", 'none'],
            ["style", "height", '10.52%'],
            ["style", "opacity", '0'],
            ["style", "left", '39.17%'],
            ["style", "width", '59.59%']
         ],
         "${_glukomer2}": [
            ["style", "top", '44.58%'],
            ["style", "display", 'none'],
            ["style", "height", '8.75%'],
            ["style", "left", '16.41%'],
            ["style", "width", '4.17%']
         ],
         "${_koniec_autolancety}": [
            ["style", "top", '25.28%'],
            ["style", "display", 'none'],
            ["style", "height", '10.26%'],
            ["style", "opacity", '0'],
            ["style", "left", '39.17%'],
            ["style", "width", '45.25%']
         ],
         "${_right3}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '91.67%'],
            ["style", "width", '8.34%']
         ],
         "${_testovaciou_zonou}": [
            ["style", "top", '56.67%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '50.08%'],
            ["style", "width", '49.17%']
         ],
         "${_rozbalime_glukomer}": [
            ["style", "top", '12.22%'],
            ["style", "display", 'block'],
            ["style", "height", '10.52%'],
            ["style", "opacity", '0'],
            ["style", "left", '22.83%'],
            ["style", "width", '54.2%']
         ],
         "${__1-2_pre_makku2}": [
            ["style", "top", '65.83%'],
            ["style", "display", 'none'],
            ["style", "height", '7.5%'],
            ["style", "opacity", '0'],
            ["style", "left", '41%'],
            ["style", "width", '39.78%']
         ],
         "${_left3}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0%'],
            ["style", "width", '8.34%']
         ],
         "${_refresh3}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '91.67%'],
            ["style", "width", '8.34%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(209,233,232,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_uistite_sa_ze_ho}": [
            ["style", "top", '20.83%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '31.25%'],
            ["style", "width", '68%']
         ],
         "${_refresh2}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${__3_pre_strednu}": [
            ["style", "top", '73.33%'],
            ["style", "display", 'none'],
            ["style", "height", '7.5%'],
            ["style", "opacity", '0'],
            ["style", "left", '41%'],
            ["style", "width", '27.33%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 25500,
         autoPlay: true,
         labels: {
            "start": 0,
            "slide_2": 4500,
            "slide_3": 8000,
            "slide_4": 12000,
            "slide_5": 16500,
            "slide_6": 20500,
            "kodStart": 23000,
            "kodEnd": 25000,
            "slide_7": 25500
         },
         timeline: [
            { id: "eid153", tween: [ "style", "${_pasikCopy2}", "display", 'block', { fromValue: 'none'}], position: 3994, duration: 0 },
            { id: "eid143", tween: [ "style", "${_pasikCopy2}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid83", tween: [ "style", "${_autolanceta}", "width", '20%', { fromValue: '5%'}], position: 2000, duration: 1000 },
            { id: "eid193", tween: [ "style", "${_testovaciou_zonou}", "opacity", '1', { fromValue: '0'}], position: 19000, duration: 1000 },
            { id: "eid3", tween: [ "style", "${_pasik}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "style", "${_pasik}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid141", tween: [ "style", "${_pasik}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid127", tween: [ "style", "${_pasikCopy4}", "width", '3%', { fromValue: '3%'}], position: 4000, duration: 0 },
            { id: "eid199", tween: [ "style", "${_left2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid198", tween: [ "style", "${_left2}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid274", tween: [ "style", "${_left2}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid114", tween: [ "style", "${_pasikCopy}", "width", '3%', { fromValue: '3%'}], position: 4000, duration: 0 },
            { id: "eid370", tween: [ "style", "${_right6}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
            { id: "eid233", tween: [ "style", "${_right6}", "display", 'none', { fromValue: 'block'}], position: 25500, duration: 0 },
            { id: "eid4", tween: [ "style", "${_nadobka_pasiky}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "style", "${_nadobka_pasiky}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid146", tween: [ "style", "${_nadobka_pasiky}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid216", tween: [ "style", "${_glukomer3}", "top", '0%', { fromValue: '0%'}], position: 21500, duration: 0 },
            { id: "eid264", tween: [ "style", "${_g1b}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
            { id: "eid279", tween: [ "style", "${_g1b}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid189", tween: [ "style", "${_drazkami_do_glukomera}", "top", '38.61%', { fromValue: '35.83%'}], position: 18500, duration: 0 },
            { id: "eid327", tween: [ "style", "${_g1e}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid351", tween: [ "style", "${_g1e}", "display", 'none', { fromValue: 'block'}], position: 16500, duration: 0 },
            { id: "eid283", tween: [ "style", "${_vyberte_ochranny_kryt}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid313", tween: [ "style", "${_vyberte_ochranny_kryt}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid331", tween: [ "style", "${_konce_kazdy_zvlast_a_citit}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid355", tween: [ "style", "${_konce_kazdy_zvlast_a_citit}", "display", 'none', { fromValue: 'block'}], position: 16500, duration: 0 },
            { id: "eid330", tween: [ "style", "${_pomocka_bude_pripravena}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid354", tween: [ "style", "${_pomocka_bude_pripravena}", "display", 'none', { fromValue: 'block'}], position: 16500, duration: 0 },
            { id: "eid126", tween: [ "style", "${_pasikCopy3}", "width", '3%', { fromValue: '3%'}], position: 4000, duration: 0 },
            { id: "eid241", tween: [ "style", "${_ciselny_kod}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
            { id: "eid247", tween: [ "style", "${_ciselny_kod}", "display", 'none', { fromValue: 'block'}], position: 25500, duration: 0 },
            { id: "eid90", tween: [ "style", "${_pasik}", "height", '19.11%', { fromValue: '5.35%'}], position: 3000, duration: 994 },
            { id: "eid196", tween: [ "style", "${_testovaciou_zonou}", "left", '50.08%', { fromValue: '50.08%'}], position: 19000, duration: 0 },
            { id: "eid287", tween: [ "style", "${_vyberte_ochranny_kryt}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 1500 },
            { id: "eid225", tween: [ "style", "${_sa_zobrazia_na_displeji}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
            { id: "eid238", tween: [ "style", "${_sa_zobrazia_na_displeji}", "display", 'none', { fromValue: 'block'}], position: 25500, duration: 0 },
            { id: "eid82", tween: [ "style", "${_autolanceta}", "height", '22.44%', { fromValue: '5.61%'}], position: 2000, duration: 1000 },
            { id: "eid227", tween: [ "style", "${_sa_zobrazia_na_displeji}", "opacity", '1', { fromValue: '0'}], position: 21500, duration: 1000 },
            { id: "eid292", tween: [ "style", "${__1-2_pre_makku2}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
            { id: "eid318", tween: [ "style", "${__1-2_pre_makku2}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid86", tween: [ "style", "${_nadobka_pasiky}", "height", '26.97%', { fromValue: '8.09%'}], position: 3000, duration: 1000 },
            { id: "eid337", tween: [ "style", "${_pomocka_bude_pripravena}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 2000 },
            { id: "eid188", tween: [ "style", "${_drazkami_do_glukomera}", "left", '34.83%', { fromValue: '34.83%'}], position: 18500, duration: 0 },
            { id: "eid224", tween: [ "style", "${_vsetky_segmenty}", "opacity", '1', { fromValue: '0'}], position: 21500, duration: 1000 },
            { id: "eid219", tween: [ "style", "${_glukometer_sa_zapne}", "opacity", '1', { fromValue: '0'}], position: 21000, duration: 1000 },
            { id: "eid375", tween: [ "style", "${_left7}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
            { id: "eid376", tween: [ "style", "${_left7}", "display", 'block', { fromValue: 'block'}], position: 25500, duration: 0 },
            { id: "eid111", tween: [ "style", "${_pasikCopy}", "height", '19%', { fromValue: '19%'}], position: 4000, duration: 0 },
            { id: "eid118", tween: [ "style", "${_pasikCopy2}", "top", '60.28%', { fromValue: '60.28%'}], position: 4000, duration: 0 },
            { id: "eid174", tween: [ "style", "${_uistite_sa_ze_ho}", "left", '31.25%', { fromValue: '31.25%'}], position: 16500, duration: 0 },
            { id: "eid254", tween: [ "style", "${_koniec_autolancety}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid278", tween: [ "style", "${_koniec_autolancety}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid339", tween: [ "style", "${_a_tahajte_koniec_valca}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 2000 },
            { id: "eid154", tween: [ "style", "${_pasikCopy3}", "display", 'block', { fromValue: 'none'}], position: 3994, duration: 0 },
            { id: "eid144", tween: [ "style", "${_pasikCopy3}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid265", tween: [ "style", "${_vlozte_novu_lancetu}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
            { id: "eid280", tween: [ "style", "${_vlozte_novu_lancetu}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid59", tween: [ "style", "${_glukomer2}", "top", '44.72%', { fromValue: '44.58%'}], position: 1000, duration: 1000 },
            { id: "eid80", tween: [ "style", "${_autolanceta}", "left", '65.83%', { fromValue: '21%'}], position: 2000, duration: 1000 },
            { id: "eid252", tween: [ "style", "${_g1a}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid276", tween: [ "style", "${_g1a}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid84", tween: [ "style", "${_nadobka_pasiky}", "left", '65.83%', { fromValue: '19.5%'}], position: 3000, duration: 1000 },
            { id: "eid177", tween: [ "style", "${_right2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid157", tween: [ "style", "${_right2}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid273", tween: [ "style", "${_right2}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid179", tween: [ "style", "${_vlozte_testovaci}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid159", tween: [ "style", "${_vlozte_testovaci}", "display", 'none', { fromValue: 'none'}], position: 16500, duration: 0 },
            { id: "eid168", tween: [ "style", "${_vlozte_testovaci}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
            { id: "eid203", tween: [ "style", "${_vlozte_testovaci}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
            { id: "eid89", tween: [ "style", "${_pasik}", "top", '60.28%', { fromValue: '41.94%'}], position: 3000, duration: 994 },
            { id: "eid220", tween: [ "style", "${_glukometer_sa_zapne}", "left", '41.67%', { fromValue: '41.67%'}], position: 22000, duration: 0 },
            { id: "eid197", tween: [ "style", "${_testovaciou_zonou}", "width", '49.17%', { fromValue: '49.17%'}], position: 19000, duration: 0 },
            { id: "eid228", tween: [ "style", "${_po_2_sekundach_sa}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
            { id: "eid239", tween: [ "style", "${_po_2_sekundach_sa}", "display", 'none', { fromValue: 'block'}], position: 25500, duration: 0 },
            { id: "eid282", tween: [ "style", "${_g1c}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid312", tween: [ "style", "${_g1c}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid305", tween: [ "style", "${__1-2_pre_makku2}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 2500 },
            { id: "eid155", tween: [ "style", "${_pasikCopy4}", "display", 'block', { fromValue: 'none'}], position: 3994, duration: 0 },
            { id: "eid145", tween: [ "style", "${_pasikCopy4}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid182", tween: [ "style", "${_testovaciou_zonou}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid161", tween: [ "style", "${_testovaciou_zonou}", "display", 'none', { fromValue: 'none'}], position: 16500, duration: 0 },
            { id: "eid191", tween: [ "style", "${_testovaciou_zonou}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
            { id: "eid206", tween: [ "style", "${_testovaciou_zonou}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
            { id: "eid81", tween: [ "style", "${_autolanceta}", "top", '28.47%', { fromValue: '43.42%'}], position: 2000, duration: 1000 },
            { id: "eid2", tween: [ "style", "${_package_clipart}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid149", tween: [ "style", "${_package_clipart}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid128", tween: [ "style", "${_pasikCopy2}", "height", '19.11%', { fromValue: '19.11%'}], position: 4000, duration: 0 },
            { id: "eid1", tween: [ "style", "${_rozbalime_glukomer}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid150", tween: [ "style", "${_rozbalime_glukomer}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid51", tween: [ "style", "${_glukomer2}", "width", '20.84%', { fromValue: '4.17%'}], position: 1000, duration: 1000 },
            { id: "eid293", tween: [ "style", "${__3_pre_strednu}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
            { id: "eid319", tween: [ "style", "${__3_pre_strednu}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid271", tween: [ "style", "${_left3}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid310", tween: [ "style", "${_left3}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid250", tween: [ "style", "${_g_2a}", "opacity", '1', { fromValue: '0'}], position: 16500, duration: 1500 },
            { id: "eid221", tween: [ "style", "${_glukometer_sa_zapne}", "width", '58.42%', { fromValue: '58.42%'}], position: 22000, duration: 0 },
            { id: "eid294", tween: [ "style", "${__4-5_pre_silnu}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
            { id: "eid320", tween: [ "style", "${__4-5_pre_silnu}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid248", tween: [ "style", "${_g_2a}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
            { id: "eid251", tween: [ "style", "${_g_2a}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
            { id: "eid119", tween: [ "style", "${_pasikCopy}", "left", '78.44%', { fromValue: '78.44%'}], position: 4000, duration: 0 },
            { id: "eid190", tween: [ "style", "${_drazkami_do_glukomera}", "opacity", '1', { fromValue: '0'}], position: 18500, duration: 1000 },
            { id: "eid120", tween: [ "style", "${_pasikCopy}", "top", '60.42%', { fromValue: '60.42%'}], position: 4000, duration: 0 },
            { id: "eid123", tween: [ "style", "${_pasikCopy3}", "left", '82.36%', { fromValue: '82.36%'}], position: 4000, duration: 0 },
            { id: "eid290", tween: [ "style", "${_zvolte_hlbku_prieniku}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
            { id: "eid316", tween: [ "style", "${_zvolte_hlbku_prieniku}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid85", tween: [ "style", "${_nadobka_pasiky}", "top", '58.44%', { fromValue: '47.5%'}], position: 3000, duration: 1000 },
            { id: "eid124", tween: [ "style", "${_pasikCopy3}", "top", '60.28%', { fromValue: '60.28%'}], position: 4000, duration: 0 },
            { id: "eid215", tween: [ "style", "${_glukomer3}", "left", '0%', { fromValue: '0%'}], position: 21500, duration: 0 },
            { id: "eid6", tween: [ "style", "${_glukomer2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid27", tween: [ "style", "${_glukomer2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid148", tween: [ "style", "${_glukomer2}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid302", tween: [ "style", "${__3_pre_strednu}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 2500 },
            { id: "eid377", tween: [ "style", "${_refresh7}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
            { id: "eid378", tween: [ "style", "${_refresh7}", "display", 'block', { fromValue: 'block'}], position: 25500, duration: 0 },
            { id: "eid373", tween: [ "style", "${_right7}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
            { id: "eid374", tween: [ "style", "${_right7}", "display", 'block', { fromValue: 'block'}], position: 25500, duration: 0 },
            { id: "eid180", tween: [ "style", "${_uistite_sa_ze_ho}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid163", tween: [ "style", "${_uistite_sa_ze_ho}", "display", 'none', { fromValue: 'none'}], position: 16500, duration: 0 },
            { id: "eid171", tween: [ "style", "${_uistite_sa_ze_ho}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
            { id: "eid204", tween: [ "style", "${_uistite_sa_ze_ho}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
            { id: "eid365", tween: [ "style", "${_left5}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
            { id: "eid368", tween: [ "style", "${_left5}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
            { id: "eid22", tween: [ "style", "${_rozbalime_glukomer}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid364", tween: [ "style", "${_right5}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
            { id: "eid367", tween: [ "style", "${_right5}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
            { id: "eid211", tween: [ "style", "${_right1}", "left", '91.67%', { fromValue: '91.67%'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_glukomer2}", "left", '38.74%', { fromValue: '16.41%'}], position: 1000, duration: 1000 },
            { id: "eid270", tween: [ "style", "${_right3}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid309", tween: [ "style", "${_right3}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid322", tween: [ "style", "${_right4}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid348", tween: [ "style", "${_right4}", "display", 'none', { fromValue: 'block'}], position: 16500, duration: 0 },
            { id: "eid372", tween: [ "style", "${_refresh6}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
            { id: "eid235", tween: [ "style", "${_refresh6}", "display", 'none', { fromValue: 'block'}], position: 25500, duration: 0 },
            { id: "eid371", tween: [ "style", "${_left6}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
            { id: "eid234", tween: [ "style", "${_left6}", "display", 'none', { fromValue: 'block'}], position: 25500, duration: 0 },
            { id: "eid173", tween: [ "style", "${_uistite_sa_ze_ho}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 1000 },
            { id: "eid181", tween: [ "style", "${_drazkami_do_glukomera}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid160", tween: [ "style", "${_drazkami_do_glukomera}", "display", 'none', { fromValue: 'none'}], position: 16500, duration: 0 },
            { id: "eid184", tween: [ "style", "${_drazkami_do_glukomera}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
            { id: "eid205", tween: [ "style", "${_drazkami_do_glukomera}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
            { id: "eid214", tween: [ "style", "${_glukomer3}", "opacity", '1', { fromValue: '0'}], position: 20500, duration: 1000 },
            { id: "eid91", tween: [ "style", "${_pasik}", "width", '3%', { fromValue: '0.84%'}], position: 3000, duration: 994 },
            { id: "eid88", tween: [ "style", "${_pasik}", "left", '75.83%', { fromValue: '20.17%'}], position: 3000, duration: 994 },
            { id: "eid346", tween: [ "style", "${_g1f}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 2000 },
            { id: "eid343", tween: [ "style", "${_spusta_sa_stlacenim}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
            { id: "eid357", tween: [ "style", "${_spusta_sa_stlacenim}", "display", 'none', { fromValue: 'block'}], position: 16500, duration: 0 },
            { id: "eid121", tween: [ "style", "${_pasikCopy4}", "left", '84.16%', { fromValue: '84.16%'}], position: 4000, duration: 0 },
            { id: "eid342", tween: [ "style", "${_g1f}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
            { id: "eid356", tween: [ "style", "${_g1f}", "display", 'none', { fromValue: 'block'}], position: 16500, duration: 0 },
            { id: "eid329", tween: [ "style", "${_a_tahajte_koniec_valca}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid353", tween: [ "style", "${_a_tahajte_koniec_valca}", "display", 'none', { fromValue: 'block'}], position: 16500, duration: 0 },
            { id: "eid307", tween: [ "style", "${__4-5_pre_silnu}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 2500 },
            { id: "eid217", tween: [ "style", "${_glukometer_sa_zapne}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
            { id: "eid236", tween: [ "style", "${_glukometer_sa_zapne}", "display", 'none', { fromValue: 'block'}], position: 25500, duration: 0 },
            { id: "eid260", tween: [ "style", "${_koniec_autolancety}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 1500 },
            { id: "eid244", tween: [ "style", "${_ciselny_kod}", "opacity", '0', { fromValue: '1'}], position: 23000, duration: 1000 },
            { id: "eid245", tween: [ "style", "${_ciselny_kod}", "opacity", '1', { fromValue: '0'}], position: 24000, duration: 1000 },
            { id: "eid269", tween: [ "style", "${_do_drzadla_lancety}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 1500 },
            { id: "eid366", tween: [ "style", "${_refresh5}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
            { id: "eid369", tween: [ "style", "${_refresh5}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
            { id: "eid306", tween: [ "style", "${_g1d}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 2500 },
            { id: "eid267", tween: [ "style", "${_vlozte_novu_lancetu}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 1500 },
            { id: "eid230", tween: [ "style", "${_po_2_sekundach_sa}", "opacity", '1', { fromValue: '0'}], position: 22000, duration: 1000 },
            { id: "eid231", tween: [ "style", "${_po_2_sekundach_sa}", "opacity", '0', { fromValue: '1'}], position: 23000, duration: 1000 },
            { id: "eid232", tween: [ "style", "${_po_2_sekundach_sa}", "opacity", '1', { fromValue: '0'}], position: 24000, duration: 1000 },
            { id: "eid304", tween: [ "style", "${_otocte_nastavitelnym_koncom}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 2500 },
            { id: "eid253", tween: [ "style", "${_odsroubujte_nastavitelny}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid277", tween: [ "style", "${_odsroubujte_nastavitelny}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid341", tween: [ "style", "${_g1e}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 2000 },
            { id: "eid288", tween: [ "style", "${_g1d}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
            { id: "eid314", tween: [ "style", "${_g1d}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid326", tween: [ "style", "${_refresh4}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid350", tween: [ "style", "${_refresh4}", "display", 'none', { fromValue: 'block'}], position: 16500, duration: 0 },
            { id: "eid324", tween: [ "style", "${_left4}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid349", tween: [ "style", "${_left4}", "display", 'none', { fromValue: 'block'}], position: 16500, duration: 0 },
            { id: "eid303", tween: [ "style", "${_cisla_k_sipke_na}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 2500 },
            { id: "eid308", tween: [ "style", "${_zvolte_hlbku_prieniku}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 2500 },
            { id: "eid87", tween: [ "style", "${_nadobka_pasiky}", "width", '10%', { fromValue: '3%'}], position: 3000, duration: 1000 },
            { id: "eid266", tween: [ "style", "${_do_drzadla_lancety}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
            { id: "eid281", tween: [ "style", "${_do_drzadla_lancety}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid125", tween: [ "style", "${_pasikCopy2}", "width", '3%', { fromValue: '3%'}], position: 4000, duration: 0 },
            { id: "eid122", tween: [ "style", "${_pasikCopy4}", "top", '59.5%', { fromValue: '59.5%'}], position: 4000, duration: 0 },
            { id: "eid175", tween: [ "style", "${_uistite_sa_ze_ho}", "top", '20.83%', { fromValue: '20.83%'}], position: 16500, duration: 0 },
            { id: "eid347", tween: [ "style", "${_spusta_sa_stlacenim}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 2000 },
            { id: "eid170", tween: [ "style", "${_vlozte_testovaci}", "opacity", '1', { fromValue: '0'}], position: 17500, duration: 1000 },
            { id: "eid268", tween: [ "style", "${_g1b}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 1500 },
            { id: "eid152", tween: [ "style", "${_refresh1}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid130", tween: [ "style", "${_pasikCopy4}", "height", '19.11%', { fromValue: '19.11%'}], position: 4000, duration: 0 },
            { id: "eid212", tween: [ "style", "${_glukomer3}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
            { id: "eid240", tween: [ "style", "${_glukomer3}", "display", 'none', { fromValue: 'block'}], position: 25500, duration: 0 },
            { id: "eid291", tween: [ "style", "${_cisla_k_sipke_na}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
            { id: "eid317", tween: [ "style", "${_cisla_k_sipke_na}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid117", tween: [ "style", "${_pasikCopy2}", "left", '79.98%', { fromValue: '79.98%'}], position: 4000, duration: 0 },
            { id: "eid338", tween: [ "style", "${_drzte_nastavitelny_koniec_v}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 2000 },
            { id: "eid258", tween: [ "style", "${_odsroubujte_nastavitelny}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 1500 },
            { id: "eid259", tween: [ "style", "${_g1a}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 1500 },
            { id: "eid50", tween: [ "style", "${_glukomer2}", "height", '43.75%', { fromValue: '8.75%'}], position: 1000, duration: 1000 },
            { id: "eid195", tween: [ "style", "${_testovaciou_zonou}", "top", '56.67%', { fromValue: '56.67%'}], position: 19000, duration: 0 },
            { id: "eid289", tween: [ "style", "${_otocte_nastavitelnym_koncom}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
            { id: "eid315", tween: [ "style", "${_otocte_nastavitelnym_koncom}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid272", tween: [ "style", "${_refresh3}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid311", tween: [ "style", "${_refresh3}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid286", tween: [ "style", "${_g1c}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 1500 },
            { id: "eid187", tween: [ "style", "${_drazkami_do_glukomera}", "width", '64.42%', { fromValue: '64.42%'}], position: 18500, duration: 0 },
            { id: "eid178", tween: [ "style", "${_refresh2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid158", tween: [ "style", "${_refresh2}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid275", tween: [ "style", "${_refresh2}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid340", tween: [ "style", "${_konce_kazdy_zvlast_a_citit}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 2000 },
            { id: "eid156", tween: [ "style", "${_pasikCopy}", "display", 'block', { fromValue: 'none'}], position: 3994, duration: 0 },
            { id: "eid142", tween: [ "style", "${_pasikCopy}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid5", tween: [ "style", "${_autolanceta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid26", tween: [ "style", "${_autolanceta}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid147", tween: [ "style", "${_autolanceta}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid222", tween: [ "style", "${_vsetky_segmenty}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
            { id: "eid237", tween: [ "style", "${_vsetky_segmenty}", "display", 'none', { fromValue: 'block'}], position: 25500, duration: 0 },
            { id: "eid129", tween: [ "style", "${_pasikCopy3}", "height", '19.11%', { fromValue: '19.11%'}], position: 4000, duration: 0 },
            { id: "eid328", tween: [ "style", "${_drzte_nastavitelny_koniec_v}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid352", tween: [ "style", "${_drzte_nastavitelny_koniec_v}", "display", 'none', { fromValue: 'block'}], position: 16500, duration: 0 },
            { id: "eid151", tween: [ "style", "${_right1}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid23", tween: [ "style", "${_package_clipart}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 }         ]
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
})(jQuery, AdobeEdge, "EDGE-glukomer");
