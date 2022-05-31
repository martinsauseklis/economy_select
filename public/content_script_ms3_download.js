document.childNodes[0].childNodes[1].childNodes[1][0].click();
// document.getElementsByClassName('buttonBig1')[0].click();

function fnAccept()
{
let str ;
	for (i=0; i< document.forms[0].format.length; i++) {
        if (document.forms[0].format[i].checked) {
            str = document.forms[0].format[i].value;
            break;
        }
    }
    //alert ("str is"+str+"opener isss"+opener);
    opener.fnSetFormat (str);
    //alert ("after str is"+str+"opener isss"+opener);
    window.close();
};

fnAccept();

