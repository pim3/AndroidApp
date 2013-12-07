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
            id:'nerovnaju',
            display:'none',
            type:'image',
            rect:['43%','66.7%','84.7%','55.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/nerovnaju.png','0px','0px']
         },
         {
            id:'aplikuj_roztok',
            display:'none',
            type:'image',
            rect:['1.5%','0%','71.5%','81.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/aplikuj_roztok.png','0px','0px']
         },
         {
            id:'kontakt_drazk_vnutr',
            display:'none',
            type:'image',
            rect:['2.3%','6.9%','74.8%','80%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/kontakt_drazk_vnutr.png','0px','0px']
         },
         {
            id:'next_to_2',
            type:'image',
            rect:['91.7%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'back_to_1',
            display:'none',
            type:'image',
            rect:['77%','61.4%','4.8%','8.2%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'back_to_2',
            display:'none',
            type:'image',
            rect:['0%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'kontakt_drazka',
            display:'none',
            type:'image',
            rect:['54.2%','66.9%','40.7%','34.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/kontakt_drazka.png','0px','0px']
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
            id:'pruzok_do_gluk',
            display:'none',
            type:'image',
            rect:['1.8%','-13.9%','91.7%','84.7%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/pruzok_do_gluk.png','0px','0px']
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
            id:'package_clipart_1',
            type:'image',
            rect:['0.3%','50.7%','26.7%','37.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/package%20clipart%20%281%29.png','0px','0px']
         },
         {
            id:'glukomer2',
            type:'image',
            rect:['9.8%','63.8%','5%','9.7%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/glukomer.png','0px','0px']
         },
         {
            id:'refresh1',
            type:'image',
            rect:['91.7%','0%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/refresh.png','0px','0px']
         },
         {
            id:'kod_pasika',
            display:'none',
            type:'image',
            rect:['0.7%','-6.8%','88.5%','67.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/kod_pasika.png','0px','0px']
         },
         {
            id:'porovnaj_kod',
            display:'none',
            type:'image',
            rect:['2.8%','5.4%','66.7%','55.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/porovnaj_kod.png','0px','0px']
         },
         {
            id:'pasiky',
            type:'image',
            rect:['28%','42.2%','12.5%','13.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/6b.png','0px','0px']
         },
         {
            id:'testovaci_pruzok',
            display:'none',
            type:'image',
            rect:['48.3%','73.6%','3.5%','25%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/3.png','0px','0px']
         },
         {
            id:'rozbalime-glukomer',
            type:'image',
            rect:['14.2%','0%','72.5%','60.3%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/rozbalime-glukomer.png','0px','0px']
         },
         {
            id:'glukomer',
            display:'none',
            type:'image',
            rect:['34.3%','18.6%','31.3%','50%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/glukomer.png','0px','0px']
         },
         {
            id:'pasik2',
            display:'none',
            type:'image',
            rect:['29.2%','75.1%','3.8%','21.2%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/3.png','0px','0px']
         },
         {
            id:'glukomer3',
            display:'none',
            type:'image',
            rect:['18.8%','37.5%','24.8%','43.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/glukomer.png','0px','0px']
         },
         {
            id:'monitor',
            display:'none',
            type:'image',
            rect:['27.3%','1.7%','51.3%','85%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/5.png','0px','0px']
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
            id:'back_to_3',
            display:'none',
            type:'image',
            rect:['0%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0px','0px']
         },
         {
            id:'_6b',
            display:'none',
            type:'image',
            rect:['51.7%','27.6%','44.2%','47.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/6b.png','0px','0px']
         },
         {
            id:'oboj_sipka',
            display:'none',
            type:'image',
            rect:['42.2%','35.7%','28.8%','26.3%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/oboj_sipka.png','0px','0px']
         },
         {
            id:'trefa',
            display:'none',
            type:'image',
            rect:['57.7%','42.1%','38.6%','33.1%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/trefa.png','0px','0px']
         },
         {
            id:'trefa2',
            display:'none',
            type:'image',
            rect:['14.3%','33.2%','41.3%','38.1%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/trefa.png','0px','0px']
         },
         {
            id:'right3',
            display:'none',
            type:'image',
            rect:['83.5%','63.3%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'refresh',
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
            id:'pasik_na_roztok',
            display:'none',
            type:'image',
            rect:['46.5%','37.8%','4.1%','29.2%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/3.png','0px','0px']
         },
         {
            id:'glukomer4',
            display:'none',
            type:'image',
            rect:['36%','2.4%','25.1%','42.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/glukomer.png','0px','0px']
         },
         {
            id:'krv',
            display:'none',
            type:'image',
            rect:['37.7%','47.9%','38.8%','38.1%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/krv.png','0px','0px']
         },
         {
            id:'roztok',
            display:'none',
            type:'image',
            rect:['58.8%','26.1%','38.8%','52.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/11c.png','0px','0px']
         },
         {
            id:'posledny',
            display:'none',
            type:'image',
            rect:['62.2%','13.3%','81.7%','70.1%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/posledny.png','0px','0px']
         },
         {
            id:'right',
            display:'none',
            type:'image',
            rect:['91.7%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/right.png','0px','0px']
         },
         {
            id:'vysledok',
            display:'none',
            type:'image',
            rect:['14.7%','-1.4%','105%','76.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/vysledok.png','0px','0px']
         },
         {
            id:'uloz2',
            display:'none',
            type:'image',
            rect:['-1.6%','40.3%','78.3%','62.1%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/texts/uloz2.png','0%','0%','100%','100%']
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
            id:'glukomer5',
            display:'none',
            type:'image',
            rect:['8.3%','6.1%','39.4%','80%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/glukomer.png','0px','0px']
         },
         {
            id:'vysledky',
            display:'none',
            type:'image',
            rect:['16.2%','27.5%','41.3%','49.3%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/vysledky.png','0px','0px']
         },
         {
            id:'xxxx2',
            type:'image',
            rect:['0%','-5.8%','83.7%','51.3%','auto','auto'],
            opacity:0.0078125,
            fill:["rgba(0,0,0,0)",'edge_includes/texts/xxxx.png','0px','0px']
         },
         {
            id:'glukomer6',
            display:'none',
            type:'image',
            rect:['57%','2.5%','39.4%','80%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/glukomer.png','0px','0px','80%','80%']
         },
         {
            id:'vysledky2',
            display:'none',
            type:'image',
            rect:['36%','35.8%','36.8%','37.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/vysledky.png','0px','0px','80%','80%']
         },
         {
            id:'trefa3',
            display:'none',
            type:'image',
            rect:['67.3%','44.3%','41.7%','37.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/trefa.png','0px','0px']
         },
         {
            id:'_8',
            type:'image',
            rect:['23%','62.4%','3.8%','10.1%','auto','auto'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/8.png','0px','0px']
         },
         {
            id:'left',
            display:'none',
            type:'image',
            rect:['0%','86.1%','8.3%','13.9%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'edge_includes/images/left.png','0%','0%','100%','100%']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_pasik2}": [
            ["style", "top", '75.14%'],
            ["style", "display", 'none'],
            ["style", "height", '21.2%'],
            ["style", "left", '29.17%'],
            ["style", "width", '3.84%']
         ],
         "${_monitor}": [
            ["style", "top", '42.5%'],
            ["style", "height", '21.2%'],
            ["style", "display", 'none'],
            ["style", "left", '22.67%'],
            ["style", "width", '16.91%']
         ],
         "${_xxxx2}": [
            ["style", "top", '-5.8%'],
            ["style", "height", '51.3%'],
            ["style", "opacity", '0.0078125'],
            ["style", "left", '0%'],
            ["style", "width", '83.7%']
         ],
         "${_posledny}": [
            ["style", "top", '13.33%'],
            ["style", "display", 'none'],
            ["style", "height", '70.14%'],
            ["style", "opacity", '0'],
            ["style", "left", '62.17%'],
            ["style", "width", '81.67%']
         ],
         "${__6b}": [
            ["style", "top", '27.64%'],
            ["style", "display", 'none'],
            ["style", "height", '47.5%'],
            ["style", "opacity", '0'],
            ["style", "left", '51.67%'],
            ["style", "width", '44.17%']
         ],
         "${_pasik_na_roztok}": [
            ["style", "top", '36.67%'],
            ["style", "display", 'none'],
            ["style", "height", '29.17%'],
            ["style", "left", '61.59%'],
            ["style", "width", '4.09%']
         ],
         "${_back_to_2}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_trefa2}": [
            ["style", "top", '33.19%'],
            ["style", "display", 'none'],
            ["style", "height", '38.06%'],
            ["style", "opacity", '0'],
            ["style", "left", '14.25%'],
            ["style", "width", '41.25%']
         ],
         "${_refresh1}": [
            ["style", "top", '0%'],
            ["style", "display", 'block'],
            ["style", "height", '13.89%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '91.67%'],
            ["style", "width", '8.34%']
         ],
         "${_vysledky2}": [
            ["style", "top", '18.89%'],
            ["style", "height", '44.24%'],
            ["style", "background-size", [80,80], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '61.67%'],
            ["style", "width", '48.25%']
         ],
         "${_glukomer5}": [
            ["style", "top", '16.94%'],
            ["style", "opacity", '0'],
            ["style", "left", '11.33%'],
            ["style", "display", 'none']
         ],
         "${_nerovnaju}": [
            ["style", "display", 'none'],
            ["style", "top", '66.67%'],
            ["style", "left", '43%'],
            ["style", "width", '84.67%']
         ],
         "${_refresh}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_next_to_2}": [
            ["style", "top", '86.11%'],
            ["style", "height", '13.89%'],
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '91.66%'],
            ["style", "width", '8.34%']
         ],
         "${_kontakt_drazk_vnutr}": [
            ["style", "top", '7.22%'],
            ["style", "display", 'none'],
            ["style", "height", '80%'],
            ["style", "opacity", '0'],
            ["style", "left", '2.33%'],
            ["style", "width", '74.84%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(209,233,232,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_glukomer4}": [
            ["style", "top", '2.36%'],
            ["style", "display", 'none'],
            ["style", "height", '42.5%'],
            ["style", "left", '51.09%'],
            ["style", "width", '25.09%']
         ],
         "${_left3}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_package_clipart_1}": [
            ["style", "top", '39.58%'],
            ["style", "height", '58.33%'],
            ["style", "display", 'block'],
            ["style", "left", '0.33%'],
            ["style", "width", '40.54%']
         ],
         "${_trefa}": [
            ["style", "top", '42.08%'],
            ["style", "display", 'none'],
            ["style", "height", '33.06%'],
            ["style", "opacity", '0'],
            ["style", "left", '57.67%'],
            ["style", "width", '38.59%']
         ],
         "${_kod_pasika}": [
            ["style", "top", '-10.42%'],
            ["style", "display", 'none'],
            ["style", "height", '58.06%'],
            ["style", "opacity", '0'],
            ["style", "left", '1.17%'],
            ["style", "width", '83.67%']
         ],
         "${_right}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.66%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_pruzok_do_gluk}": [
            ["style", "top", '-13.89%'],
            ["style", "display", 'none'],
            ["style", "height", '84.72%'],
            ["style", "opacity", '0'],
            ["style", "left", '1.83%'],
            ["style", "width", '91.67%']
         ],
         "${_back_to_3}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_back_to_1}": [
            ["style", "top", '86.11%'],
            ["style", "height", '13.89%'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '0%'],
            ["style", "width", '8.34%']
         ],
         "${_roztok}": [
            ["style", "top", '26.11%'],
            ["style", "display", 'none'],
            ["style", "height", '52.36%'],
            ["style", "left", '58.83%'],
            ["style", "width", '38.75%']
         ],
         "${_glukomer3}": [
            ["style", "top", '37.5%'],
            ["style", "display", 'none'],
            ["style", "height", '43.61%'],
            ["style", "left", '18.75%'],
            ["style", "width", '24.75%']
         ],
         "${_glukomer}": [
            ["style", "top", '18.61%'],
            ["style", "display", 'none'],
            ["style", "height", '50%'],
            ["style", "left", '34.33%'],
            ["style", "width", '31.25%']
         ],
         "${_kontakt_drazka}": [
            ["style", "top", '66.94%'],
            ["style", "display", 'none'],
            ["style", "height", '34.44%'],
            ["style", "opacity", '0'],
            ["style", "left", '54.17%'],
            ["style", "width", '40.67%']
         ],
         "${_vysledok}": [
            ["style", "top", '1.11%'],
            ["style", "display", 'none'],
            ["style", "height", '76.39%'],
            ["style", "opacity", '0'],
            ["style", "left", '6.17%'],
            ["style", "width", '105%']
         ],
         "${_oboj_sipka}": [
            ["style", "top", '35.69%'],
            ["style", "display", 'none'],
            ["style", "height", '26.25%'],
            ["style", "opacity", '0'],
            ["style", "left", '42.17%'],
            ["style", "width", '28.84%']
         ],
         "${_rozbalime-glukomer}": [
            ["style", "top", '-9.44%'],
            ["style", "display", 'block'],
            ["style", "height", '60.28%'],
            ["style", "opacity", '0'],
            ["style", "left", '11.58%'],
            ["style", "width", '72.5%']
         ],
         "${_next_to_4}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_left4}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_trefa3}": [
            ["style", "top", '44.31%'],
            ["style", "display", 'none'],
            ["style", "height", '37.82%'],
            ["style", "opacity", '0'],
            ["style", "left", '67.33%'],
            ["style", "width", '41.69%']
         ],
         "${_uloz2}": [
            ["style", "top", '33.05%'],
            ["style", "display", 'none'],
            ["style", "height", '51.25%'],
            ["style", "opacity", '0'],
            ["style", "left", '-1.25%'],
            ["style", "width", '76.34%']
         ],
         "${_krv}": [
            ["style", "top", '46.81%'],
            ["style", "display", 'none'],
            ["style", "height", '37.5%'],
            ["style", "opacity", '0'],
            ["style", "left", '52.92%'],
            ["style", "width", '38.75%']
         ],
         "${_glukomer2}": [
            ["style", "top", '63.75%'],
            ["style", "display", 'block'],
            ["style", "height", '10.08%'],
            ["style", "left", '14.98%'],
            ["style", "width", '5.6%']
         ],
         "${_testovaci_pruzok}": [
            ["style", "top", '73.61%'],
            ["style", "display", 'none'],
            ["style", "height", '25%'],
            ["style", "left", '48.25%'],
            ["style", "width", '3.51%']
         ],
         "${_right3}": [
            ["style", "top", '86.11%'],
            ["style", "height", '13.89%'],
            ["style", "display", 'none'],
            ["style", "left", '91.66%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_porovnaj_kod}": [
            ["style", "top", '5.42%'],
            ["style", "opacity", '0'],
            ["style", "left", '2.83%'],
            ["style", "display", 'none']
         ],
         "${_next_to_3}": [
            ["style", "top", '86.11%'],
            ["style", "height", '13.89%'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '91.67%'],
            ["style", "width", '8.34%']
         ],
         "${_aplikuj_roztok}": [
            ["style", "top", '0%'],
            ["style", "display", 'none'],
            ["style", "height", '93.61%'],
            ["style", "opacity", '0'],
            ["style", "left", '2.17%'],
            ["style", "width", '63.5%']
         ],
         "${_left}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${__8}": [
            ["style", "top", '62.42%'],
            ["style", "display", 'block'],
            ["style", "height", '10.08%'],
            ["style", "left", '23%'],
            ["style", "width", '3.75%']
         ],
         "${_vysledky}": [
            ["style", "top", '25.42%'],
            ["style", "height", '38.19%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '17.67%'],
            ["style", "width", '37.25%']
         ],
         "${_next_to_5}": [
            ["style", "top", '86.11%'],
            ["style", "display", 'none'],
            ["style", "height", '13.89%'],
            ["style", "left", '91.67%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '8.34%']
         ],
         "${_glukomer6}": [
            ["style", "top", '10.56%'],
            ["style", "display", 'none'],
            ["style", "background-size", [80,80], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '94.72%'],
            ["style", "opacity", '0'],
            ["style", "left", '54.92%'],
            ["style", "width", '51.76%']
         ],
         "${_pasiky}": [
            ["style", "top", '66.25%'],
            ["style", "display", 'block'],
            ["style", "height", '10.08%'],
            ["style", "opacity", '1'],
            ["style", "left", '17.75%'],
            ["style", "width", '9.01%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9884,
         autoPlay: true,
         labels: {
            "Start1": 0,
            "Start2": 2000,
            "loop": 2847,
            "loop_end": 3413,
            "Start3": 3434,
            "Start4": 4024,
            "start_loop": 5000,
            "end_loop": 5500,
            "Start5": 5628,
            "Start6": 7023,
            "StartP": 8086,
            "Blik": 9316,
            "blikE": 9884
         },
         timeline: [
            { id: "eid125", tween: [ "style", "${_kontakt_drazka}", "opacity", '0', { fromValue: '0'}], position: 2000, duration: 0 },
            { id: "eid129", tween: [ "style", "${_kontakt_drazka}", "opacity", '1', { fromValue: '0'}], position: 2847, duration: 566 },
            { id: "eid216", tween: [ "style", "${_porovnaj_kod}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid232", tween: [ "style", "${_porovnaj_kod}", "display", 'none', { fromValue: 'block'}], position: 5628, duration: 0 },
            { id: "eid264", tween: [ "style", "${_glukomer4}", "left", '51.09%', { fromValue: '51.09%'}], position: 6500, duration: 0, easing: "swing" },
            { id: "eid250", tween: [ "style", "${_krv}", "opacity", '1', { fromValue: '0'}], position: 6500, duration: 500, easing: "swing" },
            { id: "eid2", tween: [ "color", "${_Stage}", "background-color", 'rgba(209,233,232,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(209,233,232,1.00)'}], position: 0, duration: 0 },
            { id: "eid215", tween: [ "style", "${_kod_pasika}", "top", '-10.42%', { fromValue: '-10.42%'}], position: 4500, duration: 0 },
            { id: "eid187", tween: [ "style", "${_monitor}", "top", '42.5%', { fromValue: '42.5%'}], position: 4024, duration: 0 },
            { id: "eid253", tween: [ "style", "${_aplikuj_roztok}", "display", 'block', { fromValue: 'none'}], position: 5628, duration: 0, easing: "swing" },
            { id: "eid275", tween: [ "style", "${_aplikuj_roztok}", "display", 'none', { fromValue: 'block'}], position: 7023, duration: 0, easing: "swing" },
            { id: "eid98", tween: [ "style", "${_package_clipart_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid99", tween: [ "style", "${_package_clipart_1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "swing" },
            { id: "eid243", tween: [ "style", "${_roztok}", "left", '47.75%', { fromValue: '58.83%'}], position: 5628, duration: 872 },
            { id: "eid313", tween: [ "style", "${_vysledky}", "top", '26.53%', { fromValue: '25.42%'}], position: 7023, duration: 866 },
            { id: "eid309", tween: [ "style", "${_glukomer5}", "opacity", '1', { fromValue: '0'}], position: 7023, duration: 977 },
            { id: "eid80", tween: [ "style", "${_rozbalime-glukomer}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2000 },
            { id: "eid50", tween: [ "style", "${_next_to_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid52", tween: [ "style", "${_next_to_3}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "swing" },
            { id: "eid133", tween: [ "style", "${_next_to_3}", "display", 'none', { fromValue: 'block'}], position: 3434, duration: 0 },
            { id: "eid114", tween: [ "style", "${_next_to_3}", "display", 'none', { fromValue: 'none'}], position: 4024, duration: 0 },
            { id: "eid286", tween: [ "style", "${_glukomer5}", "display", 'block', { fromValue: 'none'}], position: 7023, duration: 0 },
            { id: "eid321", tween: [ "style", "${_glukomer5}", "display", 'none', { fromValue: 'block'}], position: 8086, duration: 0 },
            { id: "eid343", tween: [ "style", "${__8}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid344", tween: [ "style", "${__8}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid188", tween: [ "style", "${_monitor}", "left", '22.67%', { fromValue: '22.67%'}], position: 4024, duration: 0 },
            { id: "eid291", tween: [ "style", "${_vysledky}", "height", '38.19%', { fromValue: '38.19%'}], position: 7023, duration: 0 },
            { id: "eid327", tween: [ "style", "${_left}", "display", 'block', { fromValue: 'none'}], position: 8086, duration: 0 },
            { id: "eid268", tween: [ "style", "${_aplikuj_roztok}", "left", '2.17%', { fromValue: '2.17%'}], position: 6500, duration: 0, easing: "swing" },
            { id: "eid428", tween: [ "style", "${_xxxx2}", "opacity", '1', { fromValue: '0.0078125'}], position: 8086, duration: 914 },
            { id: "eid209", tween: [ "style", "${_kod_pasika}", "display", 'block', { fromValue: 'none'}], position: 4024, duration: 0 },
            { id: "eid233", tween: [ "style", "${_kod_pasika}", "display", 'none', { fromValue: 'block'}], position: 5628, duration: 0 },
            { id: "eid311", tween: [ "style", "${_vysledok}", "left", '6%', { fromValue: '6.17%'}], position: 7023, duration: 977 },
            { id: "eid260", tween: [ "style", "${_aplikuj_roztok}", "top", '0%', { fromValue: '0%'}], position: 6500, duration: 0, easing: "swing" },
            { id: "eid257", tween: [ "style", "${_pasik_na_roztok}", "top", '36.67%', { fromValue: '36.67%'}], position: 6500, duration: 0, easing: "swing" },
            { id: "eid49", tween: [ "style", "${_back_to_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid53", tween: [ "style", "${_back_to_1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "swing" },
            { id: "eid132", tween: [ "style", "${_back_to_1}", "display", 'none', { fromValue: 'block'}], position: 3434, duration: 0 },
            { id: "eid113", tween: [ "style", "${_back_to_1}", "display", 'none', { fromValue: 'none'}], position: 4024, duration: 0 },
            { id: "eid345", tween: [ "style", "${_vysledky2}", "display", 'block', { fromValue: 'none'}], position: 8086, duration: 0 },
            { id: "eid258", tween: [ "style", "${_krv}", "top", '46.81%', { fromValue: '46.81%'}], position: 6500, duration: 0, easing: "swing" },
            { id: "eid105", tween: [ "style", "${_glukomer2}", "top", '40.28%', { fromValue: '63.75%'}], position: 0, duration: 1976 },
            { id: "eid91", tween: [ "style", "${_pasiky}", "height", '42.5%', { fromValue: '10.08%'}], position: 0, duration: 1976 },
            { id: "eid169", tween: [ "style", "${_monitor}", "display", 'block', { fromValue: 'none'}], position: 4024, duration: 0 },
            { id: "eid235", tween: [ "style", "${_monitor}", "display", 'none', { fromValue: 'block'}], position: 5628, duration: 0 },
            { id: "eid315", tween: [ "style", "${_glukomer5}", "top", '18.33%', { fromValue: '16.94%'}], position: 7023, duration: 866 },
            { id: "eid401", tween: [ "style", "${_uloz2}", "height", '51.25%', { fromValue: '51.25%'}], position: 8086, duration: 0 },
            { id: "eid206", tween: [ "style", "${_trefa2}", "display", 'block', { fromValue: 'none'}], position: 4024, duration: 0 },
            { id: "eid190", tween: [ "style", "${_trefa2}", "display", 'block', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid231", tween: [ "style", "${_trefa2}", "display", 'none', { fromValue: 'block'}], position: 5628, duration: 0 },
            { id: "eid425", tween: [ "style", "${_uloz2}", "top", '33.05%', { fromValue: '33.05%'}], position: 8086, duration: 0 },
            { id: "eid341", tween: [ "style", "${__8}", "height", '60.28%', { fromValue: '10.08%'}], position: 0, duration: 1976 },
            { id: "eid124", tween: [ "style", "${_kontakt_drazk_vnutr}", "opacity", '0', { fromValue: '0'}], position: 2000, duration: 0 },
            { id: "eid127", tween: [ "style", "${_kontakt_drazk_vnutr}", "opacity", '1', { fromValue: '0'}], position: 2407, duration: 440 },
            { id: "eid383", tween: [ "style", "${_vysledky2}", "left", '61.67%', { fromValue: '61.67%'}], position: 8086, duration: 0 },
            { id: "eid384", tween: [ "style", "${_vysledky2}", "left", '61.67%', { fromValue: '61.67%'}], position: 9316, duration: 0 },
            { id: "eid126", tween: [ "style", "${_pruzok_do_gluk}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 847 },
            { id: "eid351", tween: [ "style", "${_uloz2}", "display", 'block', { fromValue: 'none'}], position: 8086, duration: 0 },
            { id: "eid208", tween: [ "style", "${_pasik2}", "display", 'block', { fromValue: 'none'}], position: 4024, duration: 0 },
            { id: "eid225", tween: [ "style", "${_pasik2}", "display", 'none', { fromValue: 'block'}], position: 5628, duration: 0 },
            { id: "eid339", tween: [ "style", "${__8}", "left", '80.82%', { fromValue: '23%'}], position: 0, duration: 1976 },
            { id: "eid325", tween: [ "style", "${_posledny}", "opacity", '0', { fromValue: '0'}], position: 7023, duration: 0 },
            { id: "eid326", tween: [ "style", "${_posledny}", "opacity", '1', { fromValue: '0'}], position: 7300, duration: 700 },
            { id: "eid319", tween: [ "style", "${_posledny}", "display", 'block', { fromValue: 'none'}], position: 7023, duration: 0 },
            { id: "eid324", tween: [ "style", "${_posledny}", "display", 'none', { fromValue: 'block'}], position: 8086, duration: 0 },
            { id: "eid368", tween: [ "style", "${_vysledky2}", "width", '48.25%', { fromValue: '48.25%'}], position: 9316, duration: 0 },
            { id: "eid285", tween: [ "style", "${_vysledky}", "display", 'block', { fromValue: 'none'}], position: 7023, duration: 0 },
            { id: "eid320", tween: [ "style", "${_vysledky}", "display", 'none', { fromValue: 'block'}], position: 8086, duration: 0 },
            { id: "eid239", tween: [ "style", "${_left3}", "display", 'block', { fromValue: 'none'}], position: 5628, duration: 0 },
            { id: "eid274", tween: [ "style", "${_left3}", "display", 'none', { fromValue: 'block'}], position: 7023, duration: 0, easing: "swing" },
            { id: "eid292", tween: [ "style", "${_vysledky}", "width", '37.25%', { fromValue: '37.25%'}], position: 7023, duration: 0 },
            { id: "eid338", tween: [ "style", "${_rozbalime-glukomer}", "left", '11.58%', { fromValue: '11.58%'}], position: 0, duration: 0 },
            { id: "eid332", tween: [ "style", "${_package_clipart_1}", "width", '40.54%', { fromValue: '40.54%'}], position: 0, duration: 0 },
            { id: "eid406", tween: [ "style", "${_uloz2}", "left", '-1.42%', { fromValue: '-1.25%'}], position: 8086, duration: 0 },
            { id: "eid119", tween: [ "style", "${_kontakt_drazk_vnutr}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid136", tween: [ "style", "${_kontakt_drazk_vnutr}", "display", 'none', { fromValue: 'block'}], position: 4024, duration: 0 },
            { id: "eid182", tween: [ "style", "${_monitor}", "height", '21.2%', { fromValue: '21.2%'}], position: 4024, duration: 0 },
            { id: "eid237", tween: [ "style", "${_right3}", "left", '91.66%', { fromValue: '91.66%'}], position: 5628, duration: 0 },
            { id: "eid242", tween: [ "style", "${_roztok}", "display", 'block', { fromValue: 'none'}], position: 5628, duration: 0 },
            { id: "eid270", tween: [ "style", "${_roztok}", "display", 'none', { fromValue: 'block'}], position: 7023, duration: 0, easing: "swing" },
            { id: "eid183", tween: [ "style", "${_monitor}", "width", '16.91%', { fromValue: '16.91%'}], position: 4024, duration: 0 },
            { id: "eid240", tween: [ "style", "${_pasik_na_roztok}", "display", 'block', { fromValue: 'none'}], position: 5628, duration: 0 },
            { id: "eid273", tween: [ "style", "${_pasik_na_roztok}", "display", 'none', { fromValue: 'block'}], position: 7023, duration: 0, easing: "swing" },
            { id: "eid283", tween: [ "style", "${_left4}", "display", 'block', { fromValue: 'none'}], position: 7023, duration: 0, easing: "swing" },
            { id: "eid322", tween: [ "style", "${_left4}", "display", 'none', { fromValue: 'block'}], position: 8086, duration: 0 },
            { id: "eid202", tween: [ "style", "${_glukomer3}", "display", 'block', { fromValue: 'none'}], position: 4024, duration: 0 },
            { id: "eid224", tween: [ "style", "${_glukomer3}", "display", 'none', { fromValue: 'block'}], position: 5628, duration: 0 },
            { id: "eid269", tween: [ "style", "${_krv}", "left", '52.5%', { fromValue: '53%'}], position: 6500, duration: 0, easing: "swing" },
            { id: "eid101", tween: [ "style", "${_glukomer2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid103", tween: [ "style", "${_glukomer2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid266", tween: [ "style", "${_pasik_na_roztok}", "left", '61.59%', { fromValue: '61.59%'}], position: 6500, duration: 0, easing: "swing" },
            { id: "eid255", tween: [ "style", "${_aplikuj_roztok}", "opacity", '1', { fromValue: '0'}], position: 5628, duration: 872, easing: "swing" },
            { id: "eid221", tween: [ "style", "${__6b}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 500 },
            { id: "eid330", tween: [ "style", "${_package_clipart_1}", "height", '58.33%', { fromValue: '58.33%'}], position: 0, duration: 0 },
            { id: "eid386", tween: [ "style", "${_vysledky2}", "top", '18.89%', { fromValue: '18.89%'}], position: 8086, duration: 0 },
            { id: "eid387", tween: [ "style", "${_vysledky2}", "top", '18.89%', { fromValue: '18.89%'}], position: 9316, duration: 0 },
            { id: "eid51", tween: [ "style", "${_next_to_2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "swing" },
            { id: "eid261", tween: [ "style", "${_refresh}", "display", 'block', { fromValue: 'none'}], position: 5628, duration: 0, easing: "swing" },
            { id: "eid276", tween: [ "style", "${_refresh}", "display", 'none', { fromValue: 'block'}], position: 7023, duration: 0, easing: "swing" },
            { id: "eid367", tween: [ "style", "${_vysledky2}", "height", '44.24%', { fromValue: '44.24%'}], position: 9316, duration: 0 },
            { id: "eid110", tween: [ "style", "${_glukomer2}", "left", '42%', { fromValue: '14.98%'}], position: 0, duration: 1976 },
            { id: "eid236", tween: [ "style", "${_right3}", "display", 'block', { fromValue: 'none'}], position: 5628, duration: 0 },
            { id: "eid277", tween: [ "style", "${_right3}", "display", 'none', { fromValue: 'block'}], position: 7023, duration: 0, easing: "swing" },
            { id: "eid316", tween: [ "style", "${_vysledky}", "left", '21.84%', { fromValue: '17.67%'}], position: 7023, duration: 866 },
            { id: "eid252", tween: [ "style", "${_krv}", "height", '37.5%', { fromValue: '37.5%'}], position: 7000, duration: 0, easing: "swing" },
            { id: "eid360", tween: [ "style", "${_glukomer6}", "opacity", '0', { fromValue: '0'}], position: 8086, duration: 0 },
            { id: "eid362", tween: [ "style", "${_glukomer6}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 816 },
            { id: "eid318", tween: [ "style", "${_right}", "display", 'block', { fromValue: 'none'}], position: 7023, duration: 0 },
            { id: "eid317", tween: [ "style", "${_right}", "display", 'none', { fromValue: 'block'}], position: 8086, duration: 0 },
            { id: "eid135", tween: [ "style", "${_next_to_4}", "display", 'block', { fromValue: 'none'}], position: 3434, duration: 0 },
            { id: "eid138", tween: [ "style", "${_next_to_4}", "display", 'none', { fromValue: 'block'}], position: 4024, duration: 0 },
            { id: "eid376", tween: [ "style", "${_trefa3}", "display", 'block', { fromValue: 'none'}], position: 9316, duration: 0 },
            { id: "eid402", tween: [ "style", "${_uloz2}", "width", '76.34%', { fromValue: '76.34%'}], position: 8086, duration: 0 },
            { id: "eid76", tween: [ "style", "${_pasiky}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "swing" },
            { id: "eid84", tween: [ "style", "${_pasiky}", "top", '43.06%', { fromValue: '66.25%'}], position: 0, duration: 955 },
            { id: "eid75", tween: [ "style", "${_pasiky}", "top", '46.1%', { fromValue: '43.06%'}], position: 955, duration: 1021, easing: "swing" },
            { id: "eid92", tween: [ "style", "${_pasiky}", "top", '66.11%', { fromValue: '46.1%'}], position: 1976, duration: 24, easing: "swing" },
            { id: "eid218", tween: [ "style", "${_porovnaj_kod}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 500 },
            { id: "eid55", tween: [ "style", "${_refresh1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "swing" },
            { id: "eid94", tween: [ "style", "${_pasiky}", "width", '32.51%', { fromValue: '9.01%'}], position: 0, duration: 1976 },
            { id: "eid77", tween: [ "style", "${_rozbalime-glukomer}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid78", tween: [ "style", "${_rozbalime-glukomer}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid203", tween: [ "style", "${__6b}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid230", tween: [ "style", "${__6b}", "display", 'none', { fromValue: 'block'}], position: 5628, duration: 0 },
            { id: "eid118", tween: [ "style", "${_kontakt_drazka}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid131", tween: [ "style", "${_kontakt_drazka}", "display", 'none', { fromValue: 'block'}], position: 3434, duration: 0 },
            { id: "eid111", tween: [ "style", "${_glukomer2}", "width", '25.7%', { fromValue: '5.6%'}], position: 0, duration: 1976 },
            { id: "eid342", tween: [ "style", "${__8}", "width", '15.76%', { fromValue: '3.75%'}], position: 0, duration: 1976 },
            { id: "eid200", tween: [ "style", "${_trefa2}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 500 },
            { id: "eid117", tween: [ "style", "${_pruzok_do_gluk}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid137", tween: [ "style", "${_pruzok_do_gluk}", "display", 'none', { fromValue: 'block'}], position: 4024, duration: 0 },
            { id: "eid211", tween: [ "style", "${_kod_pasika}", "opacity", '1', { fromValue: '0'}], position: 4024, duration: 476 },
            { id: "eid359", tween: [ "style", "${_vysledky2}", "opacity", '0', { fromValue: '0'}], position: 8086, duration: 0 },
            { id: "eid361", tween: [ "style", "${_vysledky2}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 816 },
            { id: "eid244", tween: [ "style", "${_roztok}", "top", '24.44%', { fromValue: '26.11%'}], position: 5628, duration: 872 },
            { id: "eid310", tween: [ "style", "${_vysledky}", "opacity", '1', { fromValue: '0'}], position: 7023, duration: 977 },
            { id: "eid262", tween: [ "style", "${_aplikuj_roztok}", "height", '93.61%', { fromValue: '93.61%'}], position: 6500, duration: 0, easing: "swing" },
            { id: "eid212", tween: [ "style", "${_kod_pasika}", "height", '58.06%', { fromValue: '58.06%'}], position: 4500, duration: 0 },
            { id: "eid312", tween: [ "style", "${_vysledok}", "top", '-10%', { fromValue: '1.11%'}], position: 7023, duration: 977 },
            { id: "eid204", tween: [ "style", "${_back_to_3}", "display", 'block', { fromValue: 'none'}], position: 4024, duration: 0 },
            { id: "eid226", tween: [ "style", "${_back_to_3}", "display", 'none', { fromValue: 'block'}], position: 5628, duration: 0 },
            { id: "eid223", tween: [ "style", "${_nerovnaju}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid227", tween: [ "style", "${_nerovnaju}", "display", 'none', { fromValue: 'block'}], position: 5628, duration: 0 },
            { id: "eid213", tween: [ "style", "${_kod_pasika}", "width", '83.67%', { fromValue: '83.67%'}], position: 4500, duration: 0 },
            { id: "eid278", tween: [ "style", "${_vysledok}", "display", 'block', { fromValue: 'none'}], position: 7023, duration: 0, easing: "swing" },
            { id: "eid323", tween: [ "style", "${_vysledok}", "display", 'none', { fromValue: 'block'}], position: 8086, duration: 0 },
            { id: "eid134", tween: [ "style", "${_back_to_2}", "display", 'block', { fromValue: 'none'}], position: 3434, duration: 0 },
            { id: "eid139", tween: [ "style", "${_back_to_2}", "display", 'none', { fromValue: 'block'}], position: 4024, duration: 0 },
            { id: "eid189", tween: [ "style", "${_oboj_sipka}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid234", tween: [ "style", "${_oboj_sipka}", "display", 'none', { fromValue: 'block'}], position: 5628, duration: 0 },
            { id: "eid130", tween: [ "style", "${_testovaci_pruzok}", "top", '61.94%', { fromValue: '73.61%'}], position: 3434, duration: 566 },
            { id: "eid372", tween: [ "style", "${_glukomer6}", "width", '51.76%', { fromValue: '51.76%'}], position: 9316, duration: 0 },
            { id: "eid284", tween: [ "style", "${_kontakt_drazk_vnutr}", "top", '7.22%', { fromValue: '7.22%'}], position: 2511, duration: 0 },
            { id: "eid83", tween: [ "style", "${_pasiky}", "left", '30%', { fromValue: '17.75%'}], position: 0, duration: 955 },
            { id: "eid74", tween: [ "style", "${_pasiky}", "left", '57.16%', { fromValue: '30%'}], position: 955, duration: 1021, easing: "swing" },
            { id: "eid93", tween: [ "style", "${_pasiky}", "left", '66%', { fromValue: '57.16%'}], position: 1976, duration: 24, easing: "swing" },
            { id: "eid263", tween: [ "style", "${_aplikuj_roztok}", "width", '63.5%', { fromValue: '63.5%'}], position: 6500, duration: 0, easing: "swing" },
            { id: "eid377", tween: [ "style", "${_trefa3}", "opacity", '1', { fromValue: '0'}], position: 9316, duration: 568 },
            { id: "eid241", tween: [ "style", "${_glukomer4}", "display", 'block', { fromValue: 'none'}], position: 5628, duration: 0 },
            { id: "eid272", tween: [ "style", "${_glukomer4}", "display", 'none', { fromValue: 'block'}], position: 7023, duration: 0, easing: "swing" },
            { id: "eid207", tween: [ "style", "${_trefa}", "display", 'block', { fromValue: 'none'}], position: 4024, duration: 0 },
            { id: "eid191", tween: [ "style", "${_trefa}", "display", 'block', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid229", tween: [ "style", "${_trefa}", "display", 'none', { fromValue: 'block'}], position: 5628, duration: 0 },
            { id: "eid314", tween: [ "style", "${_glukomer5}", "left", '15.5%', { fromValue: '11.33%'}], position: 7023, duration: 866 },
            { id: "eid112", tween: [ "style", "${_glukomer2}", "height", '51.16%', { fromValue: '10.08%'}], position: 0, duration: 1976 },
            { id: "eid238", tween: [ "style", "${_right3}", "top", '86.11%', { fromValue: '86.11%'}], position: 5628, duration: 0 },
            { id: "eid120", tween: [ "style", "${_testovaci_pruzok}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid140", tween: [ "style", "${_testovaci_pruzok}", "display", 'none', { fromValue: 'block'}], position: 4024, duration: 0 },
            { id: "eid100", tween: [ "style", "${_glukomer}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid168", tween: [ "style", "${_glukomer}", "display", 'none', { fromValue: 'block'}], position: 4024, duration: 0 },
            { id: "eid280", tween: [ "style", "${_vysledok}", "opacity", '1', { fromValue: '0'}], position: 7023, duration: 977, easing: "swing" },
            { id: "eid369", tween: [ "style", "${_glukomer6}", "height", '94.72%', { fromValue: '94.72%'}], position: 9316, duration: 0 },
            { id: "eid201", tween: [ "style", "${_trefa}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 500 },
            { id: "eid337", tween: [ "style", "${_rozbalime-glukomer}", "top", '-9.44%', { fromValue: '-9.44%'}], position: 0, duration: 0 },
            { id: "eid352", tween: [ "style", "${_glukomer6}", "display", 'block', { fromValue: 'none'}], position: 8086, duration: 0 },
            { id: "eid222", tween: [ "style", "${_oboj_sipka}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 500 },
            { id: "eid426", tween: [ "style", "${_uloz2}", "opacity", '1', { fromValue: '0'}], position: 8086, duration: 914 },
            { id: "eid214", tween: [ "style", "${_kod_pasika}", "left", '1.17%', { fromValue: '1.17%'}], position: 4500, duration: 0 },
            { id: "eid205", tween: [ "style", "${_next_to_5}", "display", 'block', { fromValue: 'none'}], position: 4024, duration: 0 },
            { id: "eid228", tween: [ "style", "${_next_to_5}", "display", 'none', { fromValue: 'block'}], position: 5628, duration: 0 },
            { id: "eid245", tween: [ "style", "${_krv}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0, easing: "swing" },
            { id: "eid271", tween: [ "style", "${_krv}", "display", 'none', { fromValue: 'block'}], position: 7023, duration: 0, easing: "swing" },
            { id: "eid340", tween: [ "style", "${__8}", "top", '22.99%', { fromValue: '62.42%'}], position: 0, duration: 1976 },
            { id: "eid331", tween: [ "style", "${_package_clipart_1}", "top", '39.58%', { fromValue: '39.58%'}], position: 0, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-Glukomer_kalibracia");
