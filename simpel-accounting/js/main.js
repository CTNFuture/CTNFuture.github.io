 function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }

var x = 4528293;
var x1 = commaSeparateNumber(x);
document.getElementById("Revenue").innerHTML = x1;


jQuery(document).ready(function($){
	var $lateral_menu_trigger = $('#cd-menu-trigger'),
		$content_wrapper = $('main'),
		$navigation = $('header');

	//open-close lateral menu clicking on the menu icon
	$lateral_menu_trigger.on('click', function(event){
		event.preventDefault();
		
		$lateral_menu_trigger.toggleClass('is-clicked');
		$navigation.toggleClass('lateral-menu-is-open');
		$content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
			$('body').toggleClass('overflow-hidden');
		});
		$('#cd-lateral-nav').toggleClass('lateral-menu-is-open');
		
		//check if transitions are not supported - i.e. in IE9
		if($('html').hasClass('no-csstransitions')) {
			$('body').toggleClass('overflow-hidden');
		}
	});

	//close lateral menu clicking outside the menu itself
	$content_wrapper.on('click', function(event){
		if( !$(event.target).is('#cd-menu-trigger, #cd-menu-trigger span') ) {
			$lateral_menu_trigger.removeClass('is-clicked');
			$navigation.removeClass('lateral-menu-is-open');
			$content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
			$('#cd-lateral-nav').removeClass('lateral-menu-is-open');
			//check if transitions are not supported
			if($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('overflow-hidden');
			}

		}
	});

	//open (or close) submenu items in the lateral menu. Close all the other open submenu items.
	$('.item-has-children').children('a').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
	});

	$("#1click").click(function() {
	  $(".page").css("display", "none");
    $("#1").css({"display": "block", "animation": "fadein 1s", "-moz-animation": "fadein 1s", "-webkit-animation": "fadein 1s", "-o-animation": "fadein 1s"});
});

	$("#2click").click(function() {
	  $(".page").css("display", "none");
    $("#2").css({"display": "block", "animation": "fadein 1s", "-moz-animation": "fadein 1s", "-webkit-animation": "fadein 1s", "-o-animation": "fadein 1s"});
});
	
	$("#3click").click(function() {
	  $(".page").css("display", "none");
    $("#3").css({"display": "block", "animation": "fadein 1s", "-moz-animation": "fadein 1s", "-webkit-animation": "fadein 1s", "-o-animation": "fadein 1s"});
});

	$("#4click").click(function() {
	  $(".page").css("display", "none");
    $("#4").css({"display": "block", "animation": "fadein 1s", "-moz-animation": "fadein 1s", "-webkit-animation": "fadein 1s", "-o-animation": "fadein 1s"});
});

	$("#5click").click(function() {
	  $(".page").css("display", "none");
    $("#5").css({"display": "block", "animation": "fadein 1s", "-moz-animation": "fadein 1s", "-webkit-animation": "fadein 1s", "-o-animation": "fadein 1s"});
});
	
	
});


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


var close = 0;

var Rother =            120546;
var Rsalestax =        3223129;
var Rpropertytax =      546815;
var Rothertax =         186243;
var Rtaxes = Rsalestax + Rpropertytax + Rothertax;
var RchargeServices =   451564;
var Revenue = RchargeServices + Rtaxes + Rother;

var Egeneral =         1215612;
var Epolice_retirement_pensions = 1543009;
var Epolice_retirement_private = 15456;
var Epolice_retirement = Epolice_retirement_pensions + Epolice_retirement_private;
var Epolice_salaries = 1111548;
var Epolice = Epolice_retirement + Epolice_salaries;
var Estreets =          489516;
var Erecreation =       165849;
var Ecommunitydev =      56495;
var Eeconmicdev =        23546;
var Ecommunityser =      84956;
var Einterest =         123231;
var Ewaste =            145415;
var Ewater =            156849;
var Esewer =            189561;
var Expenses = Egeneral + Epolice + Estreets + Erecreation + Ecommunitydev + Eeconmicdev + Ecommunityser + Einterest + Ewaste + Ewater + Esewer;

var Profit = Revenue - Expenses;

var Extraordinary_Gain = 517217;
var Extraordinary_Loss = 0;

var Total_Cash_Profit = Profit + Extraordinary_Gain + Extraordinary_Loss;

var AccuredRevenue =    217829;
var AccuredExpenses =  1224142;

$("#Revenue").html(numberWithCommas(Revenue));
$(".Revenue").html(numberWithCommas(Revenue));
$("#Expenses").html(" " + numberWithCommas(Expenses));
$(".Expenses").html(" " + numberWithCommas(Expenses));

$("#profit_number").html(numberWithCommas(Profit));
$(".profit_number").html(numberWithCommas(Math.round(Profit/10000)*10000));

$(".Rother").html(numberWithCommas(Rother));
$(".RchargeServices").html(numberWithCommas(RchargeServices));
$(".Rsalestax").html(numberWithCommas(Rsalestax));
$(".Rpropertytax").html(numberWithCommas(Rpropertytax));
$(".Rothertax").html(numberWithCommas(Rothertax));

$(".Egeneral").html(numberWithCommas(Egeneral));
$(".Epolice_retirement_pensions").html(numberWithCommas(Epolice_retirement_pensions));
$(".Epolice_retirement_private").html(numberWithCommas(Epolice_retirement_private));
$(".Epolice_retirement").html(numberWithCommas(Epolice_retirement));
$(".Epolice_salaries").html(numberWithCommas(Epolice_salaries));
$(".Epolice").html(numberWithCommas(Epolice));
$(".Estreets").html(numberWithCommas(Estreets));
$(".Erecreation").html(numberWithCommas(Erecreation));
$(".Ecommunitydev").html(numberWithCommas(Ecommunitydev));
$(".Eeconmicdev").html(numberWithCommas(Eeconmicdev));
$(".Ecommunityser").html(numberWithCommas(Ecommunityser));
$(".Einterest").html(numberWithCommas(Einterest));
$(".Ewaste").html(numberWithCommas(Ewaste));
$(".Ewater").html(numberWithCommas(Ewater));
$(".Esewer").html(numberWithCommas(Esewer));

$(".Rtaxes").html(numberWithCommas(Rtaxes));

$("#Extraordinary_Gain").html(numberWithCommas(Extraordinary_Gain));
$("#Total_Cash_Profit").html(" " + "<span class='doubleUnderline'>" + numberWithCommas(Total_Cash_Profit) + "</span>");

$("#AccuredRevenue").html(numberWithCommas(AccuredRevenue));
$("#AccuredExpenses").html(numberWithCommas(AccuredExpenses));

$("#ProfitSummary").html(numberWithCommas((Math.round(Profit/100)*100)));


var Acash = 1928409;
var Ainventory = 251603;
var Ainvestments = 19132;
var AinterestRec = 56235;

var AallAccRec = 658243;
var AestUncollectable = 50625;
var AaccountsRec = AallAccRec - AestUncollectable;

var Aprepaiditems = 64851;

var Aland = 8015685;

var AbuildingsHistoricCost = 25618594;
var AbuildingsAccDepreciation = 18645985;
var Abuildings = AbuildingsHistoricCost - AbuildingsAccDepreciation;


var AequipmentHistoricCost = 85648;
var AequipmentAccDepreciation = 81546;
var Aequipment = AequipmentHistoricCost - AequipmentAccDepreciation;


var AintangiblesHistoricCost = 16894;
var AintangiblesAccAmortization = 10456;
var Aintangibles = AequipmentHistoricCost - AintangiblesAccAmortization;

var Aproperty = Aland + Abuildings + Aequipment + Aintangibles;

var Assets = Acash + Ainventory + Ainvestments + AinterestRec + AallAccRec + AaccountsRec + Aprepaiditems + Aproperty;

$(".Acash").html(numberWithCommas(Acash));
$(".Ainventory").html(numberWithCommas(Ainventory));
$(".Ainvestments").html(numberWithCommas(Ainvestments));
$(".AinterestRec").html(numberWithCommas(AinterestRec));
$(".AestUncollectable").html(numberWithCommas(AestUncollectable));
$(".AallAccRec").html(numberWithCommas(AallAccRec));
$(".AestUncollectable").html(numberWithCommas(AestUncollectable));
$(".AaccountsRec").html(numberWithCommas(AaccountsRec));
$(".Aprepaiditems").html(numberWithCommas(Aprepaiditems));
$(".Aland").html(numberWithCommas(Aland));
$(".AbuildingsHistoricCost").html(numberWithCommas(AbuildingsHistoricCost));
$(".AbuildingsAccDepreciation").html(numberWithCommas(AbuildingsAccDepreciation));
$(".Abuildings").html(numberWithCommas(Abuildings));
$(".AequipmentHistoricCost").html(numberWithCommas(AequipmentHistoricCost));
$(".AequipmentAccDepreciation").html(numberWithCommas(AequipmentAccDepreciation));
$(".Aequipment").html(numberWithCommas(Aequipment));
$(".AintangiblesHistoricCost").html(numberWithCommas(AequipmentHistoricCost));
$(".AintangiblesAccAmortization").html(numberWithCommas(AintangiblesAccAmortization));
$(".Aintangibles").html(numberWithCommas(Aintangibles));
$(".Aproperty").html(numberWithCommas(Aproperty));
$(".Assets").html(numberWithCommas(Assets));


var LaccPay = 821564;
var LwagesPay = 542612;
var LinterestPay = 2246562;

var LloansDue1Year = 1961364;
var LloansOver1Year = 10213022;
var Lloans = LloansOver1Year + LloansDue1Year;

var Liabilities = LaccPay + LwagesPay + LinterestPay + Lloans;

$(".LaccPay").html(numberWithCommas(LaccPay));
$(".LwagesPay").html(numberWithCommas(LwagesPay));
$(".LinterestPay").html(numberWithCommas(LinterestPay));
$(".LloansDue1Year").html(numberWithCommas(LloansDue1Year));
$(".LloansOver1Year").html(numberWithCommas(LloansOver1Year));
$(".Lloans").html(numberWithCommas(Lloans));
$(".Liabilities").html(numberWithCommas(Liabilities));


var Beg_Cash =         1103938;
var Loans =            1100000;
var End_Cash = Beg_Cash + Loans + Total_Cash_Profit;

var End_Other_Assets = Assets - Acash;
var End_Total_Assets = End_Other_Assets + End_Cash;

var End_Total_Liabilities = Liabilities;
var Net_Worth = End_Total_Assets - End_Total_Liabilities;

$("#Beg_Cash").html(numberWithCommas(Beg_Cash));
$(".Total_Cash_Profit").html(numberWithCommas(Total_Cash_Profit));

$("#Loans").html(numberWithCommas(Loans));
$(".End_Cash").html(numberWithCommas(End_Cash));

$(".End_Other_Assets").html(numberWithCommas(End_Other_Assets));
$(".End_Total_Assets").html(numberWithCommas(End_Total_Assets));

$(".End_Total_Liabilities").html(numberWithCommas(End_Total_Liabilities));
$(".Net_Worth").html(numberWithCommas(  Math.round(Net_Worth/100000)*100000  ));


$("#networth_number").html(numberWithCommas(Math.round(Net_Worth)));



$('.expand').click(function() {
  $('ul', $(this).parent()).eq(0).toggle();
});

/* $( ".revPie" ).click(function() {
 var other = 150395;
  var chart = new CanvasJS.Chart("chartContainer",
	{
		title:{
			text: "Revenue"
		},
    animationEnabled: true,
    legend:{
		verticalAlign: "bottom",
		horizontalAlign: "center",
		fontSize: 20,
		fontFamily: "Helvetica"
		},
	
		theme: "theme2",
		data: [
		{
			type: "pie",
			startAngle: -90,
			showInLegend: true,
			toolTipContent:"{legendText}<br>{amount}<br>{y}%<br>",
			dataPoints: [
        {  y: 83.24, legendText:"Taxes", amount: Rtaxes},
				{  y: 16.76, legendText:"Charge for Service", amount: RchargeServices}
			]
		}
		]
	});
	chart.render();
	

	
	
}); */






$(document).ready(function() {
    $('#financials').show();
});



  var num = 1;
  var w_num = 300;

  var chartsActive = 0;
var priorYears = 0;


$( "#2011" ).click(function() {

  $('.page-wrap').css("width", "1200px");
  

setTimeout(function () {
    $("#containerPYs").fadeIn('slow', function() {
      
  $('.PYs.4').fadeIn();
  $('.PYs.3').fadeIn();
  $('.PYs.2').fadeIn();
  $('.PYs.1').fadeIn();
      
    });}, 1000);
});


$( "#current" ).click(function() {

setTimeout(function () {
    $("#containerPYs").fadeOut('slow', function() {
      
  $('.PYs.4').fadeOut();
  $('.PYs.3').fadeOut();
  $('.PYs.2').fadeOut();
  $('.PYs.1').fadeOut();
  if (chartsActive == 0)  {$('.page-wrap').css("width", "480px");}
      
    });}, 1000);
    priorYears = 0;
    
});
    

$( "#minus_button" ).click(function() {
  if (num != 1) {num = num - 1;}
  else if (num == 1) {$('#minus_button').hide();}
  $('.PYs.'+num).hide();
  if (w_num != 300) {w_num = w_num - 300; close = close - 1;}
  if (w_num <= 500) {w_num = 500;}
  $('.page-wrap').css("width", w_num+"px");
});






var revCount = 0;

$( ".revPie" ).click(function() {
  
if (revCount == 0) {

revCount = 1;




$(".page-wrap").css({"width": "1200px"});
    $("#containerProfits").css({"display": "none"});

setTimeout(function () {
    $("#container").fadeIn('slow', function() {$("#container").css({"display": "inline"}); $("#containerProfits").css({"display": "none"}); });}, 1000);

setTimeout(function () {
  $(function () {

    var colors = Highcharts.getOptions().colors,
        categories = ['Other Revenues', 'Charge for Services', 'Taxes'],
        data = [
          {
            y: Rother,
            color: colors[0],
            drilldown: {
                name: 'Other Revenues',
                categories: ['Other Revenues'],
                data: [Rother],
                color: colors[0]
            }
        },
          {
            y: RchargeServices,
            color: colors[1],
            drilldown: {
                name: 'Charge for Services',
                categories: ['Charge for Services'],
                data: [RchargeServices],
                color: colors[1]
            }
        }, {
            y: Rtaxes,
            color: colors[2],
            drilldown: {
                name: 'Taxes',
                categories: ['Sales Tax', 'Property Tax', 'Other Taxes'],
                data: [Rsalestax, Rpropertytax, Rothertax],
                color: colors[2]
            }
        }],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }

    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Revenue'
        },
        subtitle: {
            text: ''
        },
        yAxis: {
            title: {
                text: 'Total percent'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valuePrefix: '$'
        },
        series: [{
            name: 'Revenues',
            data: browserData,
            size: '80%',
            dataLabels: {
                formatter: function () {
                    return Math.round(this.y/Revenue*1000)/10 > 50 ? this.point.name + '<br>' + Math.round(this.y/Revenue*1000)/10 + '%' : null;
                },
                color: '#000000',
                distance: -120
            }
        }, {
            name: 'Revenues',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: { enabled: true,
                formatter: function () {
                    // display only if larger than 100000
                    return Math.round(this.y/Revenue*1000)/10 > 1 ? '<b>' + this.point.name + ':</b> ' + Math.round(this.y/Revenue*1000)/10 + '%' : null;
                }
            }
        }]
    });
});

}, 1000);



} else {
    revCount = 0;

    $("#container").css({"display": "none"});
    
}

});
  



var expCount = 0;

$( ".expPie" ).click(function() {
  
if (expCount == 0) {

expCount = 1;


$(".page-wrap").css({"width": "1200px"});

    $("#containerProfits").css({"display": "none"});



setTimeout(function () {
    $("#containerExp").fadeIn('slow', function() {$("#containerExp").css({"display": "inline"});  $("#containerProfits").css({"display": "none"}); });}, 1000);

setTimeout(function () {
  $(function () {

    var colors = Highcharts.getOptions().colors,
        categories = ['General Government', 'Police', 'Streets', 'Recreation', 'Community Development', 'Economic Development', 'Community Services', 'Interest', 'Waste', 'Water', 'Sewer'],
        data = [
          {
            y: Egeneral,
            color: colors[10],
            drilldown: {
                name: 'General Government',
                categories: ['General Government'],
                data: [Egeneral],
                color: colors[10]
            }
        },
          {
            y: Epolice,
            color: colors[8],
            drilldown: {
                name: 'Police',
                categories: ['Police Salaries', 'Police Retirement'],
                data: [Epolice_salaries, Epolice_retirement],
                color: colors[8]
            }
        }, {
            y: Estreets,
            color: colors[2],
            drilldown: {
                name: 'Streets',
                categories: ['Streets'],
                data: [Estreets],
                color: colors[2]
            }
        }, {
            y: Erecreation,
            color: colors[3],
            drilldown: {
                name: 'Recreation',
                categories: ['Recreation'],
                data: [Erecreation],
                color: colors[3]
            }
        }, {
            y: Ecommunitydev,
            color: colors[4],
            drilldown: {
                name: 'Community Development',
                categories: ['Community Development'],
                data: [Ecommunitydev],
                color: colors[4]
            }
        }, {
            y: Eeconmicdev,
            color: colors[5],
            drilldown: {
                name: 'Economic Development',
                categories: ['Economic Development'],
                data: [Eeconmicdev],
                color: colors[5]
            }
        }, {
            y: Ecommunityser,
            color: colors[6],
            drilldown: {
                name: 'Community Services',
                categories: ['Community Services'],
                data: [Ecommunityser],
                color: colors[6]
            }
        }, {
            y: Einterest,
            color: colors[6],
            drilldown: {
                name: 'Interest',
                categories: ['Interest'],
                data: [Einterest],
                color: colors[6]
            }
        }, {
            y: Ewaste,
            color: colors[7],
            drilldown: {
                name: 'Waste',
                categories: ['Waste'],
                data: [Ewaste],
                color: colors[7]
            }
        }, {
            y: Ewater,
            color: colors[1],
            drilldown: {
                name: 'Water',
                categories: ['Water'],
                data: [Ewater],
                color: colors[1]
            }
        }, {
            y: Esewer,
            color: colors[9],
            drilldown: {
                name: 'Sewer',
                categories: ['Sewer'],
                data: [Esewer],
                color: colors[9]
            }
        }],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }

    // Create the chart
    $('#containerExp').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Expenses'
        },
        subtitle: {
            text: ''
        },
        yAxis: {
            title: {
                text: 'Total percent'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valuePrefix: '$'
        },
        series: [{
            name: 'Expenses',
            data: browserData,
            size: '80%',
            dataLabels: {
                formatter: function () {
                    return Math.round(this.y/Expenses*1000)/10 > 50 ? this.point.name + '<br>' + Math.round(this.y/Expenses*1000)/10 + '%' : null;
                },
                color: '#000000',
                distance: -120
            }
        }, {
            name: 'Expenses',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: { enabled: true,
                formatter: function () {
                    // display only if larger than 100000
                    return Math.round(this.y/Expenses*1000)/10 > 1 ? '<b>' + this.point.name + ':</b> ' + Math.round(this.y/Expenses*1000)/10 + '%' : null;
                }
            }
        }]
    });
});

}, 1000);



} else {
    expCount = 0;
    $("#containerExp").css({"display": "none"});
    
}

});






var assetsCount = 0;

$( ".expAssets" ).click(function() {
  
if (assetsCount == 0) {

assetsCount = 1;


$(".page-wrap").css({"width": "1200px"});
    $("#containerNetWorth").css({"display": "none"});



setTimeout(function () {
    $("#containerAssets").fadeIn('slow', function() {$("#containerAssets").css({"display": "inline"}); $("#containerNetWorth").css({"display": "none"}); });}, 1000);

setTimeout(function () {
  $(function () {

    var colors = Highcharts.getOptions().colors,
        categories = ['Cash', 'Inventory', 'Investments', 'Interest Receivable', 'Accounts Receivable', 'Prepaid items', 'Property'],
        data = [
          {
            y: Acash,
            color: colors[10],
            drilldown: {
                name: 'Cash',
                categories: ['Cash'],
                data: [Acash],
                color: colors[10]
            }
        },
          {
            y: Ainventory,
            color: colors[8],
            drilldown: {
                name: 'Inventory',
                categories: ['Inventory'],
                data: [Ainventory],
                color: colors[8]
            }
        }, {
            y: Ainvestments,
            color: colors[2],
            drilldown: {
                name: 'Investments',
                categories: ['Investments'],
                data: [Ainvestments],
                color: colors[2]
            }
        }, {
            y: AinterestRec,
            color: colors[3],
            drilldown: {
                name: 'Interest Receivable',
                categories: ['Interest Receivable'],
                data: [AinterestRec],
                color: colors[3]
            }
        }, {
            y: AaccountsRec,
            color: colors[4],
            drilldown: {
                name: 'Accounts Receivable',
                categories: ['Accounts Receivable'],
                data: [AallAccRec],
                color: colors[4]
            }
        }, {
            y: Aprepaiditems,
            color: colors[5],
            drilldown: {
                name: 'Prepaid items',
                categories: ['Prepaid items'],
                data: [Aprepaiditems],
                color: colors[5]
            }
        }, {
            y: Aproperty,
            color: colors[6],
            drilldown: {
                name: 'Property',
                categories: ['Land', 'Buildings', 'Equipment', 'Intangibles'],
                data: [Aland, Abuildings, Aequipment, Aintangibles],
                color: colors[6]
            }
        }],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }

    // Create the chart
    $('#containerAssets').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Assets'
        },
        subtitle: {
            text: ''
        },
        yAxis: {
            title: {
                text: 'Total percent'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valuePrefix: '$'
        },
        series: [{
            name: 'Assets',
            data: browserData,
            size: '80%',
            dataLabels: {
                formatter: function () {
                    return Math.round(this.y/Assets*1000)/10 > 50 ? this.point.name + '<br>' + Math.round(this.y/Assets*1000)/10 + '%' : null;
                },
                color: '#000000',
                distance: -120
            }
        }, {
            name: 'Assets',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: { enabled: true,
                formatter: function () {
                    // display only if larger than 100000
                    return Math.round(this.y/Assets*1000)/10 > 1 ? '<b>' + this.point.name + ':</b> ' + Math.round(this.y/Assets*1000)/10 + '%' : null;
                }
            }
        }]
    });
});

}, 1000);



} else {
    assetsCount = 0;
    $("#containerAssets").css({"display": "none"});
    
}

});





var liabCount = 0;

$( ".expLiabilities" ).click(function() {
  
if (liabCount == 0) {

liabCount = 1;

$(".page-wrap").css({"width": "1200px"});
    $("#containerNetWorth").css({"display": "none"});


setTimeout(function () {
    $("#containerLiab").fadeIn('slow', function() {$("#containerLiab").css({"display": "inline"});   $("#containerNetWorth").css({"display": "none"}); });}, 1000);

setTimeout(function () {
  $(function () {

    var colors = Highcharts.getOptions().colors,
        categories = ['Accounts Payable', 'Wages', 'Interest', 'Loans'],
        data = [
          {
            y: LaccPay,
            color: colors[10],
            drilldown: {
                name: 'Accounts Payable',
                categories: ['Accounts Payable'],
                data: [LaccPay],
                color: colors[10]
            }
        },
          {
            y: LwagesPay,
            color: colors[8],
            drilldown: {
                name: 'Wages',
                categories: ['Wages'],
                data: [LwagesPay],
                color: colors[8]
            }
        }, {
            y: LinterestPay,
            color: colors[2],
            drilldown: {
                name: 'Interest',
                categories: ['Interest'],
                data: [LinterestPay],
                color: colors[2]
            }
        }, {
            y: Lloans,
            color: colors[3],
            drilldown: {
                name: 'Loans',
                categories: ['Due within 1 year', 'Due later than 1 year'],
                data: [LloansDue1Year, LloansOver1Year],
                color: colors[3]
            }
        }],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }

    // Create the chart
    $('#containerLiab').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Liabilities'
        },
        subtitle: {
            text: ''
        },
        yAxis: {
            title: {
                text: 'Total percent'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valuePrefix: '$'
        },
        series: [{
            name: 'Liabilities',
            data: browserData,
            size: '80%',
            dataLabels: {
                formatter: function () {
                    return Math.round(this.y/Liabilities*1000)/10 > 50 ? this.point.name + '<br>' + Math.round(this.y/Liabilities*1000)/10 + '%' : null;
                },
                color: '#000000',
                distance: -120
            }
        }, {
            name: 'Liabilities',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: { enabled: true,
                formatter: function () {
                    // display only if larger than 100000
                    return Math.round(this.y/Liabilities*1000)/10 > 1 ? '<b>' + this.point.name + ':</b> ' + Math.round(this.y/Liabilities*1000)/10 + '%' : null;
                }
            }
        }]
    });
});

}, 1000);



} else {
    liabCount = 0;
    $("#containerLiab").css({"display": "none"});
    
}

});











$( "#2011" ).click(function() {
  
if (priorYears == 0) {

priorYears = 1;



setTimeout(function () {
    $("#containerPYs").fadeIn('slow', function() {$("#containerPYs").css({"display": "inline"});});}, 1000);

setTimeout(function () {
  
  $(function () {
    $('#containerPYs').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Profits & Net Worth: Year to Year'
        },
        xAxis: {
            categories: ['2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
          title: {
            text: 'Dollars'
          }
          
        },
        credits: {
            enabled: true
        },
        series: [{
            name: 'Profit',
            data: [790000, 120000, -206000, -706000, -792746],
            color: Highcharts.getOptions().colors[2],
            negativeColor: Highcharts.getOptions().colors[8]
        }, {
            name: 'Net Worth',
            data: [3001000, 3123000, 3112000, 2425000, 2141531],
            color: Highcharts.getOptions().colors[11]
        }]
    });
});
  
}, 1000);



} else {
    priorYears = 0;

    
}

});


$( "#minus_button" ).click(function() {
  
      $("#containerPYs").css({"display": "none"});
          priorYears = priorYears - 1;
          if (priorYears <= 0) {priorYears = 0;}
  
});





var profitChart = 0;

$( ".profitBars" ).click(function() {
  
if (profitChart == 0) {

profitChart = 1;
close = close + 1;
chartsActive = chartsActive + 1;


$(".page-wrap").css({"width": "1200px"});
$(".profit_number").html(numberWithCommas(Profit));
$("#RevandExp").fadeIn( "slow", function() {});

if (revCount == 0 && expCount == 0) {

setTimeout(function () {
    $("#containerProfits").fadeIn('slow', function() {$("#containerProfits").css({"display": "inline"});});}, 1000);

setTimeout(function () {
  
  $(function () {
    $('#containerProfits').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Earnings this Year'
        },
        xAxis: {
            categories: ['Revenue', 'Expenses', 'Profit Margin: ' + Math.round( (Profit / Revenue)*1000)/10 + '%']
        },
        yAxis: {
          title: {
            text: 'Dollars'
          }
          
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Profits',
            showInLegend: false,
            data: [{y: Revenue, color: 'green'}, {y: Expenses, color: 'red'}, {y: Profit, color: 'black'}],
            color: Highcharts.getOptions().colors[2],
            negativeColor: Highcharts.getOptions().colors[8]
        }]
    });
});
  
}, 1000);

}

} else {
    profitChart = 0;
    close = close - 1;
    chartsActive = chartsActive - 1;
    $("#RevandExp").css({"display": "none"});
    $("#containerProfits").css({"display": "none"});
    $(".profit_number").html(numberWithCommas(Math.round(Profit/10000)*10000));
    if (close == 0 && priorYears == 0 ) {$(".page-wrap").css({"width": "480px"});}
}



});






var networthChart = 0;

$( ".networthBars" ).click(function() {
  
if (networthChart == 0) {

networthChart = 1;
    close = close + 1;
    chartsActive = chartsActive + 1;
    


$(".page-wrap").css({"width": "1200px"});
$(".Net_Worth").html(numberWithCommas(Net_Worth));
$("#AssandLia").fadeIn( "slow", function() {});

if (liabCount == 0 && assetsCount == 0) {

setTimeout(function () {
    $("#containerNetWorth").fadeIn('slow', function() {$("#containerNetWorth").css({"display": "inline"});});}, 1000);

setTimeout(function () {
  
  $(function () {
    $('#containerNetWorth').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Net Worth End of Year'
        },
        xAxis: {
            categories: ['Assets', 'Liabilities', 'Net Worth: ' + Math.round( (Net_Worth / Assets)*1000)/10 + '%']
        },
        yAxis: {
          title: {
            text: 'Dollars'
          }
          
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Net Worth',
            showInLegend: false,
            data: [{y: Assets, color: 'yellow'}, {y: Liabilities, color: 'orange'}, {y: Net_Worth, color: 'grey'}],
            color: Highcharts.getOptions().colors[2],
            negativeColor: Highcharts.getOptions().colors[8]
        }]
    });
});
  
}, 1000);

}




} else {
    networthChart = 0;
        close = close - 1;
        chartsActive = chartsActive - 1;
    $("#containerNetWorth").css({"display": "none"});
    $("#AssandLia").css({"display": "none"});
    $(".Net_Worth").html(numberWithCommas(  Math.round(Net_Worth/100000)*100000  ));
        if (close == 0  && priorYears == 0 ) {$(".page-wrap").css({"width": "480px"});}
}




});

