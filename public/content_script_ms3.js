const usrname = 'alunde'
const today = new Date()
const tomorrow = new Date(today)
// tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setDate(tomorrow.getDate()) // so nemam ara

const dd = String(tomorrow.getDate()).padStart(2, '0');
const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
const yyyy = tomorrow.getFullYear();
const date = dd+'/' + mm+'/'+yyyy;

if (window.location == 'https://ms3.dhl.com/') {
	document.getElementsByName("username")[0].value = usrname;
	document.getElementsByName("password")[0].value = "Kapecnenem@1973";
	document.getElementsByName("country")[0].value = "LV";

function fnSubmit()
    {
	    username = document.forms[0].username.value;
	    var URL = './login.do';
	    URL = URL + "?username="+username;
	    document.forms[0].action = URL
	    document.forms[0].submit()
    
    }

fnSubmit();


}


setTimeout(() => {
	if (window.location == `https://ms3.dhl.com/login.do?username=${usrname}`) {
	document.getElementsByName('body1')[0].contentDocument.getElementsByName('org_loc')[0].value = "RIX";
	document.getElementsByName('body1')[0].contentDocument.getElementsByName('dest_loc')[0].value = "POZ";
	document.getElementsByName('body1')[0].contentDocument.getElementsByName('glob_prod_code')[0].value ='';
	document.getElementsByName('body1')[0].contentDocument.getElementsByName('dept_date')[0].value = date;
	document.getElementsByName('body1')[0].contentDocument.getElementsByName('domestic')[0].checked = false;
	

	document.getElementsByName('body1')[0].contentDocument.getElementsByClassName('buttonBig1')[1].click();

	setTimeout(() => {
		document.getElementsByName('body1')[0].contentDocument.getElementById('checkbox0').click();
		document.getElementsByName('body1')[0].contentDocument.getElementsByName('eta_time1')[0].value = '00';
		document.getElementsByName('body1')[0].contentDocument.getElementsByClassName('buttonBig1')[2].click();
		setTimeout(() => {
			document.getElementsByName('body1')[0].contentDocument.getElementsByClassName('buttonBig1')[1].click();
			
		}, 4000);
	}, 2000)
}
}, 2000)