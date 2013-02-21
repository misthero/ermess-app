
/* Setting project environment indicator */
Tiggzi.env = "bundle";
Tiggzi.getProjectGUID = function() {
    return '2d3d4fda-2512-4610-ae2b-c86de0a14001';
}
Tiggzi.getTargetPlatform = function() {
    return '0';
}

function navigateTo(outcome, useAjax) {
    Tiggzi.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Tiggzi.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Tiggzi.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Tiggzi.setDetailContent(pageUrl);
}
/**********************
 * SECURITY CONTEXTS  *
 **********************/
/*******************************
 *      SERVICE SETTINGS        *
 ********************************/
/*************************
 *      SERVICES          *
 *************************/
var news = new Tiggr.RestService({
    'url': 'http://www.ermess.it/',
    'dataType': 'xml',
    'type': 'get',
});
createSpinner("files/resources/lib/jquerymobile/images/ajax-loader.gif");
Tiggr.AppPages = [{
    "name": "News",
    "location": "#j_35"
}, {
    "name": "Prenota",
    "location": "#j_0"
}, {
    "name": "index",
    "location": "#j_43"
}];
j_43_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'logo': 'j_47',
        'Pulsantoni': 'j_48',
        'regbutt': 'j_49',
        'contactbutt': 'j_50',
        'prenotabutt': 'j_52',
        'newsbutt': 'j_51',
        'registergrid': 'j_53',
        'gridnamelab': 'j_54',
        'nomelabel': 'j_55',
        'gridnameinp': 'j_56',
        'name': 'j_57',
        'gridmaillab': 'j_58',
        'maillabel': 'j_59',
        'gridmailinp': 'j_60',
        'regmail': 'j_61',
        'gridtellab': 'j_62',
        'tellabel': 'j_63',
        'gridtelinp': 'j_64',
        'regtel': 'j_65',
        'gridteslab': 'j_66',
        'teslabel': 'j_67',
        'gridtesinp': 'j_68',
        'regtes': 'j_69',
        'gridregsend': 'j_70',
        'regsendbutt': 'j_71',
        'contactpanel': 'j_72'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'j_43';
    /*************************
     * NONVISUAL COMPONENTS  *
     *************************/
    var datasources = [];
    // Tiggzi Push-notification registration service
    /************************
     * EVENTS AND HANDLERS  *
     ************************/
    j_43_beforeshow = function() {
        Tiggr.CurrentScreen = 'j_43';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_3671_onLoad = j_43_onLoad = function() {
        screen_3671_elementsExtraJS();
        j_43_windowEvents();
        screen_3671_elementsEvents();
    }
    // screen window events
    screen_3671_windowEvents = j_43_windowEvents = function() {
        $('#j_43').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
		 $('#registrapage').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
		 $('#contattopage').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
		 $('#j_0').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
		$('#prenotaForm').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
		$('#j_35').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_3671_elementsExtraJS = j_43_elementsExtraJS = function() {
        // screen (screen-3671) extra code
    }
    // screen elements handler
    screen_3671_elementsEvents = j_43_elementsEvents = function() {
        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
        $('#j_46 [name="prenotabutt"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('Prenota', {
                        transition: 'flip',
                        reverse: false
                    });
                }
            },
        });
        $('#j_46 [name="newsbutt"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('News', {
                        transition: 'flip',
                        reverse: false
                    });
                }
            },
        });
    }
    $("#j_43").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_43_beforeshow();
    });
    if (runBeforeShow) {
        j_43_beforeshow();
    } else {
        j_43_onLoad();
    }
}
$("#j_43").die("pageinit").live("pageinit", function(event, ui) {
    Tiggzi.processSelectMenu($(this));
    j_43_js();
});
j_0_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'pulman': 'j_4',
        'treno': 'j_5',
        'trenonotte': 'j_6',
        'aereo': 'j_7',
        'aereonotte': 'j_8',
        'travelgrid': 'j_9',
        'mobilegridcell_8': 'j_10',
        'mobilelabel1_14': 'j_11',
        'mobilegridcell_10': 'j_12',
        'mobiletextinput1_15': 'j_13',
        'mobilegridcell_12': 'j_14',
        'mobilelabel1_16': 'j_15',
        'mobilegridcell_13': 'j_16',
        'mobiletextinput1_17': 'j_17',
        'mobilegridcell_18': 'j_18',
        'mobilelabel1_20': 'j_19',
        'mobilegridcell_19': 'j_20',
        'selectconcer': 'j_21',
        'mobileselectmenuitem1': 'j_22',
        'mobilegridcell_23': 'j_23',
        'pernottalabel': 'j_25',
        'pernottatoggle': 'j_24',
        'mobilegridcell_27': 'j_26',
        'mobilelabel1_28': 'j_27',
        'numeronotti': 'j_28',
        'mobilegridcell_30': 'j_29',
        'mobilelabel1_31': 'j_30',
        'mobiletextinput1_32': 'j_31',
        'backbutton': 'j_32'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'j_0';
    /*************************
     * NONVISUAL COMPONENTS  *
     *************************/
    var datasources = [];
    // Tiggzi Push-notification registration service
    /************************
     * EVENTS AND HANDLERS  *
     ************************/
    j_0_beforeshow = function() {
        Tiggr.CurrentScreen = 'j_0';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_33F5_onLoad = j_0_onLoad = function() {
        screen_33F5_elementsExtraJS();
        j_0_windowEvents();
        screen_33F5_elementsEvents();
    }
    // screen window events
    screen_33F5_windowEvents = j_0_windowEvents = function() {
        $('#j_0').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_33F5_elementsExtraJS = j_0_elementsExtraJS = function() {
        // screen (screen-33F5) extra code
        $("#j_21").parent().find("a.ui-btn").attr("tabindex", "8");
        $("#j_24").parent().find("a.ui-slider-handle").attr("tabindex", "9");
    }
    // screen elements handler
    screen_33F5_elementsEvents = j_0_elementsEvents = function() {
        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
        $('.backbutton').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('index', {
                        transition: 'flip',
                        reverse: true
                    });
                }
            },
        });
    }
    $("#j_0").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_0_beforeshow();
    });
    if (runBeforeShow) {
        j_0_beforeshow();
    } else {
        j_0_onLoad();
    }
}
$("#j_0").die("pageinit").live("pageinit", function(event, ui) {
    Tiggzi.processSelectMenu($(this));
    j_0_js();
});
j_35_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_2': 'j_36',
        'mobilegridcell_3': 'j_37',
        'mobilelabel1_7': 'j_38',
        'mobilegridcell_5': 'j_39',
        'mobilelabel1_8': 'j_40',
        'backbutt': 'j_41'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'j_35';
    /*************************
     * NONVISUAL COMPONENTS  *
     *************************/
    var datasources = [];
	restservice1 = new Tiggr.DataSource(news, {
        'onComplete': function(jqXHR, textStatus) {
            $t.refreshScreenFormElements("j_43");
			console.log(restservice1);
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['rss', 'channel', 'item'],
            'ID': 'mobilegrid_2',
            'SET': [{
                'PATH': ['title'],
                'ID': 'mobilelabel1_7',
                'ATTR': '@'
            }, {
                'PATH': ['description'],
                'ID': 'mobilelabel1_8',
                'ATTR': '@'
            }]
        }],
        'requestMapping': [{
            'PATH': ['cat'],
            'ATTR': '55'
        }, {
            'PATH': ['feed'],
            'ATTR': 'rss2'
        }]
    });
    datasources.push(restservice1);
	
   /* restservice1 = new Tiggr.DataSource(news, {
        'onComplete': function(jqXHR, textStatus) {
            $t.refreshScreenFormElements("j_43");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['rss', 'channel', 'item[0]', 'title'],
            'ID': 'mobilelabel1_7',
            'ATTR': '@'
        }, {
            'PATH': ['rss', 'channel', 'item[0]', 'description'],
            'ID': 'mobilelabel1_8',
            'ATTR': '@'
        }],
        'requestMapping': [{
            'PATH': ['cat'],
            'ATTR': '55'
        }, {
            'PATH': ['feed'],
            'ATTR': 'rss2'
        }]
    });
    datasources.push(restservice1);*/
    // Tiggzi Push-notification registration service
    /************************
     * EVENTS AND HANDLERS  *
     ************************/
    j_35_beforeshow = function() {
        Tiggr.CurrentScreen = 'j_35';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_1C85_onLoad = j_35_onLoad = function() {
        screen_1C85_elementsExtraJS();
        try {
            restservice1.execute({})
        } catch (ex) {
            console.log(ex.name + '  ' + ex.message);
            hideSpinner();
        };
        j_35_windowEvents();
        screen_1C85_elementsEvents();
    }
    // screen window events
    screen_1C85_windowEvents = j_35_windowEvents = function() {
        $('#j_35').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_1C85_elementsExtraJS = j_35_elementsExtraJS = function() {
        // screen (screen-1C85) extra code
    }
    // screen elements handler
    screen_1C85_elementsEvents = j_35_elementsEvents = function() {
        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
        $('#j_35 [name="backbutt"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('index', {
                        transition: 'flip',
                        reverse: true
                    });
                }
            },
        });
    }
    $("#j_35").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_35_beforeshow();		
    });
    if (runBeforeShow) {
        j_35_beforeshow();
    } else {
        j_35_onLoad();
    }
}
$("#j_35").die("pageinit").live("pageinit", function(event, ui) {
    Tiggzi.processSelectMenu($(this));
    j_35_js();
});

$('#j_49').live('click',function(e){
	e.preventDefault();
	var target = $(this).attr('href');
	$.mobile.changePage( target, {
		transition: "flip",
		reverse: false,
	});	
})

$('#j_50').live('click',function(e){
	e.preventDefault();
	var target = $(this).attr('href');
	$.mobile.changePage( target, {
		transition: "flip",
		reverse: false,
	});	
})

$('.mybackbutton').live('click',function(e){
	e.preventDefault();
	var target = $(this).attr('href');
	$.mobile.changePage( target, {
		transition: "flip",
		reverse: true,
	});	
})

var viaggioscelto = '';
var pernot = false;


$('#pernottatoggle').slider(); 
$('#pernottatoggle').slider("refresh");

/*function checkConnectivity() {
	var networkState = navigator.network.connection.type;
	var states = {};
	states[Connection.UNKNOWN] = 'Unknown connection';
	states[Connection.ETHERNET] = 'Ethernet connection';
	states[Connection.WIFI] = 'WiFi connection';
	states[Connection.CELL_2G] = 'Cell 2G connection';
	states[Connection.CELL_3G] = 'Cell 3G connection';
	states[Connection.CELL_4G] = 'Cell 4G connection';
	states[Connection.NONE] = 'No network connection';
	
	alert('Connection type: ' + states[networkState]);

	if ((states[networkState] == 'No network connection') || (states[networkState] == 'Unknown connection')){
		return false;
	} else {
		return true;
	}
}*/



function checkConnectivity(actualPage){
	if (navigator.network){
		if(navigator.network.connection.type == Connection.NONE){
			goback = true;
			$('#popup').text('Impossibile connettersi! Verifica la tua connessione e riavvia l\'applicazione.')
			$('#popup').popup('open');
		}
	}
}

var firstTime=true;
var goback = false;
var closebutton = '<div class="closebutton">Chiudi</div>';

$('.closebutton').live('click', function(){
	$(this).parent().popup('close');
})

$('[data-role=page]').live('pageshow', function (event, ui) {
	var actualPage = $(this).attr('id');

	if (firstTime) {
		$('#popup').popup();
		firstTime=false;
		$( "#popup" ).on({
		   popupafterclose: function(event, ui) {
				if (goback == true) {
					$.mobile.changePage( '#j_43', {
						transition: "flip",
						reverse: true,
					});
					goback = false;
				}
				$(this).removeClass('closeadded');
		   },
		   popupbeforeposition : function() {
			if (!$(this).hasClass('closeadded')) {
				$(this).append(closebutton);
				$(this).addClass('closeadded');
			}
			
			
		   }
		});
	}

	if (viaggioscelto != '' && actualPage == 'prenotaForm') { //nella pagina di prenotazione cambio il loghetto in alto e il pulsante on off
		var pernottatoggle = $("#pernottatoggle");
		//console.log('pernotto: '+pernotto);
		/*pernottatoggle.live('change',function(){
			console.log($(this).val());
		})*/
		
		//console.log('viaggio in: '+viaggioscelto+' - pernotto: '+pernotto)
		if (pernot == true) {
			//$('.toggleClass').slider();	
			//pernottatoggle.slider({val:1}).slider('refresh');
			pernottatoggle[0].selectedindex = 0;
			pernottatoggle.slider('refresh');
		} else {
			//$('.toggleClass').slider();
			pernottatoggle[0].selectedindex = 1;
			//pernottatoggle.slider({val:0}).slider('refresh');
			pernottatoggle.slider('refresh');
		}
		pernottatoggle.slider('refresh');
		//console.log(pernottatoggle.val());
		
		
		//aria-valuenow="on" aria-valuetext=" Si " title=" Si "
		
	}
	var inner = $('.inner', this);
	var altezza = $(this).height();
	altezza = altezza - parseInt(inner.css('marginTop')) - parseInt(inner.css('marginBottom'));
	$('.inner', this).css('minHeight',altezza+'px');
	
	if(actualPage == 'registrapage' || actualPage == 'j_0' || actualPage == 'j_35' ) {
		checkConnectivity(actualPage);
	}
});

var travelclass="";

$('.travelbutton').live('click',function(){
	var target = $(this).attr('href');
	var scelta=$(this).attr('name');
	travelclass = scelta;
	
	switch(scelta){
		case 'pulman':
			viaggioscelto = scelta;
			pernot = false;
			break;
		case 'treno':
			viaggioscelto = scelta;
			pernot = false;
			break;
		case 'trenonotte':
			viaggioscelto = 'treno';
			pernot = true;
			break;
		case 'aereo':
			viaggioscelto = scelta;
			pernot = false;
			break;
		case 'aereonotte':
			viaggioscelto = 'aereo';
			pernot = true;
			break;
		default:
		  //
	}
	
	$('#prenotaForm .header .sidelogo').removeClass('pulman treno trenonotte aereo aereonotte').addClass(travelclass);
	
	$.mobile.changePage( target, {
		transition: "flip",
		reverse: false,
	});	
})

/*
$(document).delegate('div[data-role=page]', 'pageshow', function () {
	var altezza = $(this).height();
	$('.inner', this).css('height',altezza+'px');
	console.log($('.inner',this));
   // alert($(this).height());
});*/

/* FETCH FORMS RESULTS */

/* form di registrazione */

$('#regsendbutt').live('click',function(){
	var name = $('input[name=name]').val(),
		mail = $('input[name=regmail]').val(),
		tess =$('input[name=regtes]').val(),
		tel =$('input[name=regtel]').val(),
		privacy =$('input[name=regprivacy]').is(':checked');
		

	var data = {
		name:name,
		mail:mail,
		tess:tess,
		tel:tel,
		privacy:privacy,
		mobile:'true',
		register:"true"
	}

	$.post('http://www.ermess.it/vascomobileapp/handleforms.php', data, function(data){
		if (data.success){
			//alert(data.msg);
			$('#popup').text(data.msg);
			$('#popup').popup('open');
		} else {
			$('#popup').text('Spiacenti ci sono stati degli errori nel processare la richiesta');
			$('#popup').popup('open');
		}
		
	}, 'json' );
	
})

/* form di prenotazione */

$('#sendprenota').live('click',function(){
	
	var mezzo = viaggioscelto,
		pernotto,
		nome = $('input[name=travelname]').val(),
		email = $('input[name=travelmail]').val(),
		tel = $('input[name=traveltel]').val(),
		city = $('input[name=travelcity]').val(),
		concert = $('select[name=travelconcert]').val(),
		startdate = $('input[name=startDate]').val(),
		enddate = $('input[name=endDate]').val(),
		nights = $('input[name=numeronotti]').val(),
		budget= $('input[name=travelbudget]').val(),
		privacy =$('input[name=travelprivacy]').is(':checked'),
		tess = $('input[name=traveltess]').val();
		if (nights == '' || nights == undefined) {
			nights = 0;
		};
		
	if($("#pernottatoggle").val() == 'on') {
		pernotto = 'si';
	} else {
		pernotto = 'no';
	}
		
	var data = {
		mezzo : mezzo,
		pernotto : pernotto,
		nome : nome,
		email : email,
		tel : tel,
		tess : tess,
		city : city,
		concert : concert,
		startdate : startdate,
		enddate : enddate,
		nights : nights,
		budget : budget,
		privacy : privacy,
		mobile : 'true',
		prenota : "true"
	}

	$.post('http://www.ermess.it/vascomobileapp/handleforms.php', data, function(data){
		if (data.success){
			$('#popup').text(data.msg);
			$('#popup').popup('open');
		} else {
			$('#popup').text('Spiacenti ci sono stati degli errori nel processare la richiesta');
			$('#popup').popup('open');
		}
		
	}, 'json' );

})




/* SPINNING WHEEL */

var dateChoosen;

function openBirthDate() {
	//SpinningWheel.close();
	if (SpinningWheel.slotData.length == 0) {
		var now = new Date();
		var days = { };
		var years = { };
		var months = { 1: 'Gen', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'Mag', 6: 'Giu', 7: 'Lug', 8: 'Ago', 9: 'Set', 10: 'Ott', 11: 'Nov', 12: 'Dic' };
		
		for( var i = 1; i < 32; i += 1 ) {
			days[i] = i;
		}
		for( i = now.getFullYear()-0; i < now.getFullYear()+1; i += 1 ) {
			years[i] = i;
		}	
		SpinningWheel.addSlot(days, 'right', 12);	
		SpinningWheel.addSlot(months, '', 4);	
		SpinningWheel.addSlot(years, 'right', 1999);		
		SpinningWheel.setCancelAction(cancel);
		SpinningWheel.setDoneAction(done);	
		SpinningWheel.open();
	}
	
}

function done() {
	var results = SpinningWheel.getSelectedValues();
	dateChoosen.val(results.values.join(' '));
	//console.log('valori: '+results.values);
	//console.log('key: '+results.keys);
}

function cancel() {
	SpinningWheel.close();
}

$('input.date').live('click', function(){
	dateChoosen = $(this);
	openBirthDate();
})

