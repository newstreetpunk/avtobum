function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 50);
    }
}

defer(function() {

$(function(){
    $('#rent-start-date, #rent-end-date, input[type=checkbox], #marka, #rent-start-time, #rent-end-time').change(function() {
        calc();
    });
    
    $('.location-tab .tabnav a').click(function(){
        calc(); 
    });
});
var mas_week = new Array(),
    mas_model0 = new Array(),
    mas_model1 = new Array(),
    mas_model2 = new Array(),
    mas_model3 = new Array(),
    mas_model4 = new Array(),
    mas_model5 = new Array(),
    mas_zalog = new Array(),
    mas_dtp = new Array();
//Renault Logan AT

     mas_model0[18] = 130;  // pr-6
     // pr-0
     mas_model1[18] = 1650;  // pr-2
     mas_model2[18] = 1650;  // pr-2
     mas_model3[18] = 1500; 
     mas_model4[18] = 1400; 
     mas_model5[18] = 1200; 
     mas_week[18] = 1050; 
     mas_zalog[18] = 7000; 
     mas_dtp[18] = 500; 

//Fiat Albea (A/C)

     mas_model0[20] = 130;  // pr-6
     // pr-0
     mas_model1[20] = 1650;  // pr-2
     mas_model2[20] = 1650;  // pr-2
     mas_model3[20] = 1500; 
     mas_model4[20] = 1400; 
     mas_model5[20] = 1200; 
     mas_week[20] = 1000; 
     mas_zalog[20] = 7000; 
     mas_dtp[20] = 500; 

//Renault Logan MT

     mas_model0[22] = 140;  // pr-6
     // pr-0
     mas_model1[22] = 1750;  // pr-2
     mas_model2[22] = 1750;  // pr-2
     mas_model3[22] = 1600; 
     mas_model4[22] = 1500; 
     mas_model5[22] = 1250; 
     mas_week[22] = 1100; 
     mas_zalog[22] = 7000; 
     mas_dtp[22] = 500; 

//Daewoo Matiz

     mas_model0[23] = 90;  // pr-6
     // pr-0
     mas_model1[23] = 1100;  // pr-2
     mas_model2[23] = 1100;  // pr-2
     mas_model3[23] = 1000; 
     mas_model4[23] = 900; 
     mas_model5[23] = 800; 
     mas_week[23] = 750; 
     mas_zalog[23] = 6000; 
     mas_dtp[23] = 500; 

//Lada Largus

     mas_model0[26] = 140;  // pr-6
     // pr-0
     mas_model1[26] = 1750;  // pr-2
     mas_model2[26] = 1750;  // pr-2
     mas_model3[26] = 1600; 
     mas_model4[26] = 1500; 
     mas_model5[26] = 1250; 
     mas_week[26] = 1100; 
     mas_zalog[26] = 7000; 
     mas_dtp[26] = 500; 

//Mitsubishi Lancer X (MT)

     mas_model0[30] = 160;  // pr-6
     // pr-0
     mas_model1[30] = 2100;  // pr-2
     mas_model2[30] = 2100;  // pr-2
     mas_model3[30] = 1900; 
     mas_model4[30] = 1750; 
     mas_model5[30] = 1650; 
     mas_week[30] = 1500; 
     mas_zalog[30] = 7000; 
     mas_dtp[30] = 700; 

//Renault Fluence черный

     mas_model0[32] = 200;  // pr-6
     // pr-0
     mas_model1[32] = 2500;  // pr-2
     mas_model2[32] = 2500;  // pr-2
     mas_model3[32] = 2300; 
     mas_model4[32] = 2200; 
     mas_model5[32] = 2100; 
     mas_week[32] = 2000; 
     mas_zalog[32] = 10000; 
     mas_dtp[32] = 700; 

//Renault Fluence белый

     mas_model0[61] = 200;  // pr-6
     // pr-0
     mas_model1[61] = 2500;  // pr-2
     mas_model2[61] = 2500;  // pr-2
     mas_model3[61] = 2300; 
     mas_model4[61] = 2200; 
     mas_model5[61] = 2100; 
     mas_week[61] = 2000; 
     mas_zalog[61] = 10000; 
     mas_dtp[61] = 700; 

//Hyundai Accent

     mas_model0[90] = 140;  // pr-6
     // pr-0
     mas_model1[90] = 1750;  // pr-2
     mas_model2[90] = 1750;  // pr-2
     mas_model3[90] = 1600; 
     mas_model4[90] = 1500; 
     mas_model5[90] = 1250; 
     mas_week[90] = 1100; 
     mas_zalog[90] = 7000; 
     mas_dtp[90] = 500; 

//Nissan Almera AT

     mas_model0[91] = 155;  // pr-6
     // pr-0
     mas_model1[91] = 2000;  // pr-2
     mas_model2[91] = 2000;  // pr-2
     mas_model3[91] = 1850; 
     mas_model4[91] = 1700; 
     mas_model5[91] = 1500; 
     mas_week[91] = 1400; 
     mas_zalog[91] = 7000; 
     mas_dtp[91] = 700; 

//Renault Sandero AT

     mas_model0[107] = 140;  // pr-6
     // pr-0
     mas_model1[107] = 1750;  // pr-2
     mas_model2[107] = 1750;  // pr-2
     mas_model3[107] = 1600; 
     mas_model4[107] = 1500; 
     mas_model5[107] = 1250; 
     mas_week[107] = 1100; 
     mas_zalog[107] = 7000; 
     mas_dtp[107] = 500; 

//Nissan Almera MT

     mas_model0[112] = 150;  // pr-6
     // pr-0
     mas_model1[112] = 1900;  // pr-2
     mas_model2[112] = 1900;  // pr-2
     mas_model3[112] = 1750; 
     mas_model4[112] = 1600; 
     mas_model5[112] = 1400; 
     mas_week[112] = 1300; 
     mas_zalog[112] = 7000; 
     mas_dtp[112] = 700; 

//Suzuki Liana 4WD

     mas_model0[128] = 140;  // pr-6
     // pr-0
     mas_model1[128] = 1750;  // pr-2
     mas_model2[128] = 1750;  // pr-2
     mas_model3[128] = 1600; 
     mas_model4[128] = 1500; 
     mas_model5[128] = 1250; 
     mas_week[128] = 1100; 
     mas_zalog[128] = 7000; 
     mas_dtp[128] = 500; 

//Renault Sandero MT

     mas_model0[132] = 130;  // pr-6
     // pr-0
     mas_model1[132] = 1650;  // pr-2
     mas_model2[132] = 1650;  // pr-2
     mas_model3[132] = 1500; 
     mas_model4[132] = 1400; 
     mas_model5[132] = 1200; 
     mas_week[132] = 1050; 
     mas_zalog[132] = 7000; 
     mas_dtp[132] = 500; 

//Toyota Land Cruiser 100 4WD

     mas_model0[136] = 280;  // pr-6
     // pr-0
     mas_model1[136] = 3700;  // pr-2
     mas_model2[136] = 3700;  // pr-2
     mas_model3[136] = 3500; 
     mas_model4[136] = 3300; 
     mas_model5[136] = 3100; 
     mas_week[136] = 2900; 
     mas_zalog[136] = 20000; 
     mas_dtp[136] = 1000; 

//Mitsubishi ASX

     mas_model0[144] = 200;  // pr-6
     // pr-0
     mas_model1[144] = 2500;  // pr-2
     mas_model2[144] = 2500;  // pr-2
     mas_model3[144] = 2300; 
     mas_model4[144] = 2200; 
     mas_model5[144] = 2100; 
     mas_week[144] = 2000; 
     mas_zalog[144] = 10000; 
     mas_dtp[144] = 700; 

//Toyota Camry

     mas_model0[146] = 280;  // pr-6
     // pr-0
     mas_model1[146] = 3700;  // pr-2
     mas_model2[146] = 3700;  // pr-2
     mas_model3[146] = 3500; 
     mas_model4[146] = 3300; 
     mas_model5[146] = 3100; 
     mas_week[146] = 2900; 
     mas_zalog[146] = 20000; 
     mas_dtp[146] = 1000; 

//Renault Duster 4WD

     mas_model0[148] = 200;  // pr-6
     // pr-0
     mas_model1[148] = 2500;  // pr-2
     mas_model2[148] = 2500;  // pr-2
     mas_model3[148] = 2300; 
     mas_model4[148] = 2200; 
     mas_model5[148] = 2100; 
     mas_week[148] = 2000; 
     mas_zalog[148] = 10000; 
     mas_dtp[148] = 700; 

//Renault Fluence

     mas_model0[149] = 160;  // pr-6
     // pr-0
     mas_model1[149] = 2100;  // pr-2
     mas_model2[149] = 2100;  // pr-2
     mas_model3[149] = 1900; 
     mas_model4[149] = 1750; 
     mas_model5[149] = 1650; 
     mas_week[149] = 1600; 
     mas_zalog[149] = 7000; 
     mas_dtp[149] = 700; 

//Mitsubishi Lancer X (AT)

     mas_model0[153] = 170;  // pr-6
     // pr-0
     mas_model1[153] = 2200;  // pr-2
     mas_model2[153] = 2200;  // pr-2
     mas_model3[153] = 2000; 
     mas_model4[153] = 1900; 
     mas_model5[153] = 1800; 
     mas_week[153] = 1700; 
     mas_zalog[153] = 7000; 
     mas_dtp[153] = 700; 

//Hyundai Grand Starex

     mas_model0[158] = 300;  // pr-6
     // pr-0
     mas_model1[158] = 3900;  // pr-2
     mas_model2[158] = 3900;  // pr-2
     mas_model3[158] = 3700; 
     mas_model4[158] = 3500; 
     mas_model5[158] = 3300; 
     mas_week[158] = 3000; 
     mas_zalog[158] = 20000; 
     mas_dtp[158] = 1000; 

//Fiat Albea

     mas_model0[160] = 100;  // pr-6
     // pr-0
     mas_model1[160] = 1300;  // pr-2
     mas_model2[160] = 1300;  // pr-2
     mas_model3[160] = 1200; 
     mas_model4[160] = 1100; 
     mas_model5[160] = 900; 
     mas_week[160] = 800; 
     mas_zalog[160] = 7000; 
     mas_dtp[160] = 500; 

//Hyundai Sonata

     mas_model0[162] = 190;  // pr-6
     // pr-0
     mas_model1[162] = 2400;  // pr-2
     mas_model2[162] = 2400;  // pr-2
     mas_model3[162] = 2200; 
     mas_model4[162] = 2100; 
     mas_model5[162] = 2000; 
     mas_week[162] = 1900; 
     mas_zalog[162] = 10000; 
     mas_dtp[162] = 700; 

//Volkswagen Tiguan

     mas_model0[164] = 200;  // pr-6
     // pr-0
     mas_model1[164] = 2500;  // pr-2
     mas_model2[164] = 2500;  // pr-2
     mas_model3[164] = 2300; 
     mas_model4[164] = 2200; 
     mas_model5[164] = 2100; 
     mas_week[164] = 2000; 
     mas_zalog[164] = 10000; 
     mas_dtp[164] = 700; 

//Hummer Н2 4WD

     mas_model0[168] = 350;  // pr-6
     // pr-0
     mas_model1[168] = 4700;  // pr-2
     mas_model2[168] = 4700;  // pr-2
     mas_model3[168] = 4500; 
     mas_model4[168] = 4300; 
     mas_model5[168] = 4200; 
     mas_week[168] = 4100; 
     mas_zalog[168] = 25000; 
     mas_dtp[168] = 1000; 

//Ford Focus III

     mas_model0[170] = 160;  // pr-6
     // pr-0
     mas_model1[170] = 2100;  // pr-2
     mas_model2[170] = 2100;  // pr-2
     mas_model3[170] = 1900; 
     mas_model4[170] = 1750; 
     mas_model5[170] = 1650; 
     mas_week[170] = 1600; 
     mas_zalog[170] = 7000; 
     mas_dtp[170] = 700; 

//Mitsubishi Pajero 3.0 4WD

     mas_model0[175] = 320;  // pr-6
     // pr-0
     mas_model1[175] = 4300;  // pr-2
     mas_model2[175] = 4300;  // pr-2
     mas_model3[175] = 4100; 
     mas_model4[175] = 3900; 
     mas_model5[175] = 3700; 
     mas_week[175] = 3500; 
     mas_zalog[175] = 25000; 
     mas_dtp[175] = 1000; 

//ВАЗ 2114

     mas_model0[177] = 80;  // pr-6
     mas_model0[177] = 80;  // pr-0
     mas_model1[177] = 1000;  // pr-2
     mas_model2[177] = 1000;  // pr-2
     mas_model3[177] = 900; 
     mas_model4[177] = 800; 
     mas_model5[177] = 700; 
     mas_week[177] = 600; 
     mas_zalog[177] = 6000; 
     mas_dtp[177] = 500; 

//Mitsubishi L200 4WD

     mas_model0[178] = 250;  // pr-6
     // pr-0
     mas_model1[178] = 3500;  // pr-2
     mas_model2[178] = 3500;  // pr-2
     mas_model3[178] = 3300; 
     mas_model4[178] = 3100; 
     mas_model5[178] = 2900; 
     mas_week[178] = 2700; 
     mas_zalog[178] = 20000; 
     mas_dtp[178] = 1000; 

//ГАЗ 330202

     mas_model0[198] = 140;  // pr-6
     // pr-0
     mas_model1[198] = 1750;  // pr-2
     mas_model2[198] = 1750;  // pr-2
     mas_model3[198] = 1600; 
     mas_model4[198] = 1500; 
     mas_model5[198] = 1250; 
     mas_week[198] = 1100; 
     mas_zalog[198] = 7000; 
     mas_dtp[198] = 500; 

//Ford Thunderbird кабриолет

     mas_model0[203] = 500;  // pr-6
     // pr-0
     mas_model1[203] = 4700;  // pr-2
     mas_model2[203] = 4700;  // pr-2
     mas_model3[203] = 4500; 
     mas_model4[203] = 4300; 
     mas_model5[203] = 4200; 
     mas_week[203] = 4100; 
     mas_zalog[203] = 25000; 
     mas_dtp[203] = 1000; 

//Volkswagen Tiguan 4WD

     mas_model0[205] = 240;  // pr-6
     // pr-0
     mas_model1[205] = 3300;  // pr-2
     mas_model2[205] = 3300;  // pr-2
     mas_model3[205] = 3100; 
     mas_model4[205] = 2900; 
     mas_model5[205] = 2700; 
     mas_week[205] = 2500; 
     mas_zalog[205] = 10000; 
     mas_dtp[205] = 1000; 

//Toyota RAV4

     mas_model0[207] = 240;  // pr-6
     // pr-0
     mas_model1[207] = 3300;  // pr-2
     mas_model2[207] = 3300;  // pr-2
     mas_model3[207] = 3100; 
     mas_model4[207] = 2900; 
     mas_model5[207] = 2700; 
     mas_week[207] = 2500; 
     mas_zalog[207] = 10000; 
     mas_dtp[207] = 1000; 

//Кемпер Bailey Ranger

     // pr-6
     // pr-0
     mas_model1[209] = 1000;  // pr-2
     mas_model2[209] = 1000;  // pr-2
     mas_model3[209] = 1000; 
     mas_model4[209] = 750; 
     mas_model5[209] = 500; 
     mas_week[209] = 500; 
     mas_zalog[209] = 10000; 
     mas_dtp[209] = 500; 

//Lada Priora

     mas_model0[211] = 100;  // pr-6
     // pr-0
     mas_model1[211] = 1300;  // pr-2
     mas_model2[211] = 1300;  // pr-2
     mas_model3[211] = 1200; 
     mas_model4[211] = 1100; 
     mas_model5[211] = 900; 
     mas_week[211] = 800; 
     mas_zalog[211] = 6000; 
     mas_dtp[211] = 500; 

//Прицеп "Атлет" (8213 В5)

     // pr-6
     // pr-0
     mas_model1[213] = 700;  // pr-2
     mas_model2[213] = 700;  // pr-2
     mas_model3[213] = 700; 
     mas_model4[213] = 700; 
     mas_model5[213] = 700; 
     mas_week[213] = 700; 
     mas_zalog[213] = 5000; 
     mas_dtp[213] = 500; 

//Hyundai SOLARIS

     mas_model0[215] = 150;  // pr-6
     mas_model0[215] = 150;  // pr-0
     mas_model1[215] = 1900;  // pr-2
     mas_model2[215] = 1900;  // pr-2
     mas_model3[215] = 1750; 
     mas_model4[215] = 1600; 
     mas_model5[215] = 1400; 
     mas_week[215] = 1300; 
     mas_zalog[215] = 7000; 
     mas_dtp[215] = 700; 

//BMW X3

     mas_model0[216] = 320;  // pr-6
     // pr-0
     mas_model1[216] = 4100;  // pr-2
     mas_model2[216] = 4100;  // pr-2
     mas_model3[216] = 3900; 
     mas_model4[216] = 3700; 
     mas_model5[216] = 3500; 
     mas_week[216] = 3300; 
     mas_zalog[216] = 25000; 
     mas_dtp[216] = 1000; 

//Volvo XC70

     mas_model0[217] = 340;  // pr-6
     // pr-0
     mas_model1[217] = 4600;  // pr-2
     mas_model2[217] = 4600;  // pr-2
     mas_model3[217] = 4400; 
     mas_model4[217] = 4200; 
     mas_model5[217] = 4100; 
     mas_week[217] = 4000; 
     mas_zalog[217] = 25000; 
     mas_dtp[217] = 1000; 

//Lada Kalina

     mas_model0[218] = 100;  // pr-6
     mas_model0[218] = 100;  // pr-0
     mas_model1[218] = 1300;  // pr-2
     mas_model2[218] = 1300;  // pr-2
     mas_model3[218] = 1200; 
     mas_model4[218] = 1100; 
     mas_model5[218] = 900; 
     mas_week[218] = 800; 
     mas_zalog[218] = 6000; 
     mas_dtp[218] = 500; 

//KIA Sportage

     mas_model0[219] = 240;  // pr-6
     // pr-0
     mas_model1[219] = 3300;  // pr-2
     mas_model2[219] = 3300;  // pr-2
     mas_model3[219] = 3100; 
     mas_model4[219] = 2900; 
     mas_model5[219] = 2700; 
     mas_week[219] = 2500; 
     mas_zalog[219] = 10000; 
     mas_dtp[219] = 1000; 

//Peugeot 308

     mas_model0[220] = 170;  // pr-6
     // pr-0
     mas_model1[220] = 2200;  // pr-2
     mas_model2[220] = 2200;  // pr-2
     mas_model3[220] = 2000; 
     mas_model4[220] = 1900; 
     mas_model5[220] = 1800; 
     mas_week[220] = 1700; 
     mas_zalog[220] = 7000; 
     mas_dtp[220] = 700; 

//Пвх лодка Delta 320 мк

     // pr-6
     // pr-0
     mas_model1[221] = 700;  // pr-2
     mas_model2[221] = 700;  // pr-2
     mas_model3[221] = 700; 
     mas_model4[221] = 700; 
     mas_model5[221] = 700; 
     mas_week[221] = 700; 
     mas_zalog[221] = 5000; 
    

//Эвакуатор подкатной

     // pr-6
     // pr-0
     mas_model1[222] = 800;  // pr-2
     mas_model2[222] = 800;  // pr-2
     mas_model3[222] = 800; 
     mas_model4[222] = 800; 
     mas_model5[222] = 800; 
     mas_week[222] = 800; 
     mas_zalog[222] = 5000; 
     mas_dtp[222] = 500; 

//KIA Rio

     mas_model0[223] = 155;  // pr-6
     // pr-0
     mas_model1[223] = 2000;  // pr-2
     mas_model2[223] = 2000;  // pr-2
     mas_model3[223] = 1850; 
     mas_model4[223] = 1700; 
     mas_model5[223] = 1500; 
     mas_week[223] = 1400; 
     mas_zalog[223] = 7000; 
     mas_dtp[223] = 700; 

//Renault Sandero Stepway MT

     mas_model0[229] = 160;  // pr-6
     // pr-0
     mas_model1[229] = 2100;  // pr-2
     mas_model2[229] = 2100;  // pr-2
     mas_model3[229] = 1900; 
     mas_model4[229] = 1750; 
     mas_model5[229] = 1650; 
     mas_week[229] = 1600; 
     mas_zalog[229] = 7000; 
     mas_dtp[229] = 700; 

 //получаем цены автомобилей








    function setInputDateEd() {
        
        var today = new Date(),
            tomorrow = new Date();

        today.setMinutes(0);
        tomorrow.setMinutes(0);
        tomorrow.setDate(today.getDate() + 1);
            
        var d = today.getDate(),
            m = today.getMonth()+1, 
            y = today.getFullYear(),
            h = today.getHours(),
            dtm = tomorrow.getDate(),
            mtm = tomorrow.getMonth()+1, 
            ytm = tomorrow.getFullYear(),
            data = "",
            datetm = "";

        if(h<8) h=8;
        if(h>19) h=19;


        h = h < 10 ? '0' + h : h;
        d = d < 10 ? '0' + d : d;
        m = m < 10 ? '0' + m : m;
        datenow = d+"."+m+"."+y+" "+h+":00";

        dtm = dtm < 10 ? '0' + dtm : dtm;
        mtm = mtm < 10 ? '0' + mtm : mtm;
        datetm = dtm+"."+mtm+"."+ytm+" "+h+":00";
        
        return {
            today: today,
            tomorrow: tomorrow,
            hour: h,
            startDate: datenow,
            endDate: datetm,
        };
    };


function setInputDate(){
    var today = new Date(),
        tomorrow = new Date();

    tomorrow.setDate(today.getDate() + 1);
        
    var d = today.getDate(),
        m = today.getMonth()+1, 
        y = today.getFullYear(),
        h = today.getHours(),
        dtm = tomorrow.getDate(),
        mtm = tomorrow.getMonth()+1, 
        ytm = tomorrow.getFullYear(),
        data = "",
        datetm = "",
        rsd = document.querySelector("#rent-start-date"),
        red = document.querySelector("#rent-end-date");
    
    if(h<8) h=8;
    if(h>19) h=19;
    $("#rent-start-time").val(h);
    $("#rent-end-time").val(h);

    d = d < 10 ? '0' + d : d;
    m = m < 10 ? '0' + m : m;
    data = y+"-"+m+"-"+d;

    dtm = dtm < 10 ? '0' + dtm : dtm;
    mtm = mtm < 10 ? '0' + mtm : mtm;
    datetm = ytm+"-"+mtm+"-"+dtm;

    rsd.value = data;
    rsd.min = data;
    red.min = data;
    
    red.value = datetm;
};

setInputDate();
  
var orderData = {};
      
window.calc = function() {
      
    orderData = {};

    if ($('#marka').val()==0) {
      $('#marka-styler .jq-selectbox__select-text').css('color','#ff0000');
    } else {
      $('#marka-styler .jq-selectbox__select-text').css('color','#808080');
    }
    if ($('#rent-end-date').val()==0) {
      $('#rent-end-date').css('color','#ff0000');
      $('#calcBron').hide();
      $('#price-z').html('0 руб.');
      $('#price-p').html('0 руб.');
    } else {
      $('#rent-end-date').css('color','#808080');
    }
    if($('#rent-start-date').val()==0) {
      $('#rent-start-date').css('color','#ff0000');
      $('#calcBron').hide();
      $('#price-z').html('0 руб.');
      $('#price-p').html('0 руб.');
    } else {
      $('#rent-start-date').css('color','#808080');
    }
      
    orderData['Автомобиль'] = $('#marka').find('option:selected').text();
      
    var model = parseInt($('#marka').val()),
        rst = parseInt($('#rent-start-time').find('option:selected').val()),
        ret = parseInt($('#rent-end-time').find('option:selected').val()),
        rsd = $('#rent-start-date').val(),
        red = $('#rent-end-date').val(),
        date2 = new Date(rsd),
        date1 = new Date(red),
        timeDiff = -(date2.getTime() - date1.getTime()),
        countDay = Math.floor(timeDiff / (1000 * 3600 * 24)),
        rentTime = (ret+countDay*24)-rst,
        koff = rentTime % 24,
        price = 0,
        dopSumma = 0;
    
    $('#rent-start-date').attr('max', red); 
    $('#rent-end-date').attr('min', rsd);

    if(ret>rst && countDay > 0) {
        if (koff > 5) {
            // Если аренда больше 1 суток + 5 часов - то это 2 суток.
            countDay += 1;
        }
        else {
            // Если аренда больше 1 суток (24 часа), но меньше 1 сутки + 5 часов (29 часов) - то сумма аренды 1 сутки + 100 рублей/час (не важно какая машина)
            price += (100 * koff);
        }
    }
    if(model != 0 && rentTime > 0) {
        if(rentTime<3) { 
            // минимум 3 часа
            price += mas_model0[model]*3;
        } 
        else if(rentTime>2 && rentTime<9) { 
            // Если аренда меньше 8 часов - то ставка почасовая (у каждой машины своя)
            price += mas_model0[model] * rentTime;
        } 
        else if(countDay == 1 || (rentTime > 8 && countDay == 0)) { 
            // Если аренда больше 8 часов - то это 1 сутки
            price += mas_model1[model];
        }
        else if(countDay>1 && countDay<4) { 
            price += mas_model2[model] * countDay;
        }
        else if(countDay>3 && countDay<7) { 
            price += mas_model3[model] * countDay;
        }
        else if(countDay>6 && countDay<16) { 
            price += mas_model4[model] * countDay;
        }
        else if(countDay>15 && countDay<31) { 
            price += mas_model5[model] * countDay;
        }
        else if(countDay>30) { 
            price += mas_week[model] * countDay;
        }
          
        var zalog = mas_zalog[model];
         
        $('#price-z').html(zalog+' руб.');
      
        // if (rsd == red) { 
          
            // $('select[name="rent-end-time"] option').removeAttr('disabled');
            // $('select[name="rent-end-time"] option').removeAttr('selected');
            // $('select[name="rent-end-time"]').siblings('.jq-selectbox__dropdown').find('ul').find('li').css('display', 'block');
          
            // for (var i = 0; i <= $('select[name="rent-start-time"] option:selected').index(); i++){
                // $('select[name="rent-end-time"] option').eq(i).attr('disabled', 'disabled');
                // $('select[name="rent-end-time"] option').eq($('select[name="rent-start-time"] option:selected').index()).attr('selected', 'selected');
                // $('select[name="rent-end-time"]').siblings('.jq-selectbox__dropdown').find('ul').find('li').eq(i).css('display', 'none');
                // $('select[name="rent-end-time"]').siblings('.jq-selectbox__select').text($('select[name="rent-start-time"]').siblings('.jq-selectbox__select').text());
            // }
              
            /*
            if (ret < rst) {
                $('select[name="rent-end-time"]').siblings('.jq-selectbox__select').find('.jq-selectbox__select-text').text('');
                $('#calcBron').hide();
            }
            */
        // }
      
  
        var dop_servs = [];
          
        $('input[type=checkbox]:checked').each(function() {
            var valueDop = $(this).attr('data-prodid'),
                dtEd = $(this).attr('data-ed'),
                dtp = mas_dtp[model],
                title = $(this).attr('value');

            if(valueDop=='protection') {
                dopSumma += parseInt( dtp * ( (countDay == 0) ? 1 : countDay ) );
            } else if(title == 'Без ограничения по пробегу') {
                dopSumma += parseInt( ( valueDop / 100 ) * price );
            } else {
                if(dtEd=='рубли') {
                    dopSumma += + parseInt(valueDop);
                } else if(dtEd=='рубли/сутки'){ 
                    dopSumma += parseInt( valueDop * ( (countDay == 0) ? 1 : countDay ) );
                }
            }

            var str = $(this).parent().find('label').text().trim();
            if (str) dop_servs.push(str);

        });
          
      
        if (dop_servs.length) {
            orderData['Доп услуги'] = dop_servs.join(' / ');
        }

        var rentTimeS = $('select[name="rent-start-time"]').find('option:selected').attr('data-rst') || 0;
        var rentTimeE = $('select[name="rent-end-time"]').find('option:selected').attr('data-ret') || 0;

        orderData['Срок аренды'] = $('#rent-start-time').find('option:selected').text() + ' ' + $('#rent-start-date').val() + ' — ' + $('#rent-end-time').find('option:selected').text() + ' ' + $('#rent-end-date').val();

        dopSumma += parseInt(rentTimeS) + parseInt(rentTimeE);

        var location_price = parseInt($('#location-in .location-tab .tabnav li.ui-tabs-selected').data('pprice'));

        orderData['Место доставки авто'] = $('#location-in .ui-tabs-panel').not('.ui-tabs-hide').find('textarea').val();

        location_price += parseInt($('#location-to .location-tab .tabnav li.ui-tabs-selected').data('pprice'));

        price += location_price;

        orderData['Место сдачи авто'] = $('#location-to .ui-tabs-panel').not('.ui-tabs-hide').find('textarea').val();

        console.log('price: ' + price + ', dopSumma: ' + dopSumma + ', location_price: ' + location_price + ', rentTime: ' + rentTime + ', countDay: ' + countDay + ', koff: ' + koff + ", model: " + model);     
        

        price = parseInt(price) + parseInt(dopSumma);       

        if (!price) return;
        $('#price-p').html(price+' руб.');
        $('#calcBron').show();

        orderData['Стоимость проката'] = price; 
        orderData['Возвратный залог'] = zalog;

        var data_el = $('.new_order__data');
        data_el.html('');
        $.each(orderData, function(key, val) {
            if (key == 'Стоимость проката' || key == 'Возвратный залог') return;
            data_el.append('<div class="info_row"><span class="info__key">'+key+'</span><span class="info__value">'+val+'</span></div>');
        });
        $('.info__itogo span').text('≈ '+ price +' руб.');
        $('.info__subitogo span').text('≈ '+ zalog +' руб.');
        $('#neworderdata').val(JSON.stringify(orderData));
  
    } else {
        $('#calcBron').hide();
        $('#price-z').html('0 руб.');
        $('#price-p').html('0 руб.');
    }
}


});




/*
$('[name="rent-start-time"], [name="rent-end-date"]').on('change', function(){      
    var start_id = $('[name="rent-start-time"]').find('option:selected').val();     
    var end_text = $('#rent-end-time-styler').find('.jq-selectbox__dropdown ul li').eq(+start_id + 1).text();
    
    $('[name="rent-end-time"]').find('option').removeAttr('selected', '');
    $('[name="rent-end-time"]').find('option').eq(+start_id + 1).attr('selected', 'selected');      
    $('[name="rent-end-time"]').trigger('change');
    
    $('#rent-end-time-styler').find('.jq-selectbox__select-text').text(end_text);
});
*/







/* Если это дев страница на сайте, то... скрипты со старой версии сайта */
if(window.location.href.indexOf("https://avtobum63.ru/dev.html") != -1) {
    /**/
    //$("#stillHaveQuestions").hide();  
    $(".questions").click(function show_popup() {
        $("#stillHaveQuestions").fadeIn(500);
        $('#slideout').fadeIn();
    }); 
        
    
    $(".review").hide();
    $(".callback").click(function show_popup() {
        $(".review").fadeIn(500);
    });
    $(".popup_close").click(function() {
        $(".review").fadeOut(300);
    });
    $('#calcBron').click(function(){
        var valueDop = '';
        $('#avto_param').val($('#marka option:selected').html());
        $('#srok_param').val($('#srok').val());
        $('input[type=checkbox]:checked').each(function() {
            valueDop = valueDop + $(this).val() + ', ';
        });
        $('#list_param').val(valueDop);
    });

    $('.call').click(function(){
        $('#slideout').fadeIn();
        $('#callback').fadeIn();
    });
    
    
    $(".questions, .call-keys").click(function() {
        $("#stillHaveQuestions").fadeIn();
        $('#slideout').fadeIn();
    }); 
    
    $('#calcBron').click(function(){
        //$('#pricesform').fadeIn();
        $('#calculator').stop(true, true).fadeOut(function(){
            window.calc();
            $("#new_order").fadeIn();
        });
        $('#slideout').fadeIn();
    });

    $('#new_order form').submit(function(event) {
        event.preventDefault();
        var form = $(this);
        var phone_el = form.find('input[name="phone"]');
        phone_el.removeClass('error');
        if (!phone_el.val()) {
            phone_el.addClass('error');
            return;
        }
        var approve = form.find('input[name="agree"]');
        approve.removeClass('error');
        if (!approve.is(':checked')) {
            approve.addClass('error');
            return;
        }
        var form_msg = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "/assets/templates/site/send.php",
            data: form_msg,
            success: function(response) {
                if (response == "ok") {
                    $('#new_order').fadeOut();
                    $('#thank').fadeIn();
                }
            },
            complete: function() {
                console.log(arguments);
            }
        });
    });

    $('.new_order__right__back').click(function(e){
        e.preventDefault();
        $('#new_order').stop(true, true).fadeOut(function(){
            $("#calculator").fadeIn();
        });
    });

    $('.header-banner, .visible_mobile').click(function(){
        $('#slideout').fadeIn();
        $('#calculator').fadeIn();
    });

    $('body').on('click','.product .bron, .bronInfo .bron',function(){
            $('#slideout').fadeIn();
            $('#feedback').fadeIn();
            var num=$(this).attr('rel');
            $('#avtonum').val(num);
        });
    $('.bronCar').click(function(){
        $('#slideout').fadeIn();
        $('#order').fadeIn();
        var num=$(this).attr('rel');$('#avtonum').val(num);
    });


    
    $('.close').click(function(){
        $('#slideout').fadeOut();
        $('.feedback').fadeOut();
        $('#thank').fadeOut();
        $('#thank_review').fadeOut();
        $('#thank_callback').fadeOut();
        $('#thank_feedback').fadeOut();
        $('#thank_question').fadeOut();
        $('#calculator').fadeOut();
        $('#new_order').fadeOut();
    });

    $('.close-w').click(function() {
        $('#pricesform').fadeOut();
    });

    $('#slideout').click(function(){
        $('#slideout').fadeOut();
        $('.feedback').fadeOut();
        $('#thank').fadeOut();
        $('#thank_question').fadeOut();
        $('#calculator').fadeOut();
        $('#pricesform').fadeOut();
        $('#new_order').fadeOut();
    });

    $('.bronInfo .bron').click(function(){
        //console.log('test1');
        if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('reserv_click');
        if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/reserv_click');
    });
    
    $('#form-five input, #form-five textarea').focusout(function(){
        if($(this).val().length >= 3){
            //console.log('test2');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('reserv_dannih');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/reserv_dannih');
        }
    });
    
    $('#form-five .submit').click(function(){
        //console.log('test3');
        if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('reserv_good');
        if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/reserv_good');
    });     
    
    $('#form-seven input, #form-seven textarea').focusout(function(){
        if($(this).val().length >= 3){
            //console.log('test2');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('reserv_dannih');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/reserv_dannih');
        }
    });
    
    $('#form-seven .submit').click(function(){
        //console.log('test3');
        if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('reserv_good');
        if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/reserv_good');
    }); 
    
    $('.header-banner, .visible_mobile').click(function(){
        //console.log('test4');
        if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('calcform_click');
        if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/calcform_click');

        $('body').addClass('fixed');

    }); 
    $('#calculator .form a.close, #slideout, #new_order a.close, .new_order__left button').on('click', function(){
        $('body').removeClass('fixed');
    });     
     
    $('#rent-start-date, #rent-end-date, input[type=checkbox], #marka, #rent-start-time, #rent-end-time').change(function(){
        //console.log('test5');
        if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('calcform_check');
        if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/calcform_check');
    });

    $('.location-tab .tabnav a').click(function(){
        //console.log('test5');
        if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('calcform_check');
        if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/calcform_check');
    });

    $('.form #calcBron').click(function(){
        //console.log('test6');
        if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('calcform_zabron');
        if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/calcform_zabron');
    });     

    $('#new_order form input').focusout(function(){
        if($(this).val().length >= 3){
            //console.log('test7');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('calcform_nabor');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/calcform_nabor');
        }
    });
     
    $('#new_order form').submit(function(){
        //console.log('test8');
        if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('calcform_good');
        if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/calcform_good');
    });
    
    $(".slide .call").click(function(){
        //console.log('test8');
        if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('zvonok_click');
        if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/zvonok_click');
    });
    
    $('#form-one input').focusout(function(){
        if($(this).val().length >= 3){
            //console.log('test9');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('zvonok_nabor');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/zvonok_nabor');
        }
    }); 
    
    $('#form-one .submit').click(function(){
        //console.log('test10');
        if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('zvonok_good');
        if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/zvonok_good');
    }); 
    
    $('#form-pay input').focusout(function(){
        if($(this).val().length >= 3){
            //console.log('test11');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('oplata_nabor');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/oplata_nabor');
        }
    }); 

    $('#submit-pay').click(function(){
        //console.log('test12');
        if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('oplata_good');
        if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/oplata_good');
    }); 
    
    $('#form-four input, #form-four textarea').focusout(function(){
        if($(this).val().length >= 3){
            //console.log('test13');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('vopros_nabor');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/vopros_nabor');
        }
    });     
    
    $('#form-four .submit').click(function(){
        //console.log('test14');
        if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('vopros_good');
        if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/vopros_good');
    }); 
    
    $('#form-three input').focusout(function(){
        if($(this).val().length >= 3){
            //console.log('test15');
            if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('otziv_nabor');
            if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/otziv_nabor');
        }
    }); 

    $('#form-three .btn.btn-left').click(function(){
        //console.log('test16');
        if(typeof yaCounter28702351 !== 'undefined') yaCounter28702351.reachGoal('otziv_good');
        if(typeof ga !== 'undefined') ga('send', 'pageview', '/virtual/otziv_good');
    }); 
    /**/
} /* end dev script */