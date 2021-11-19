let cpt = document.createElement('div');
subm= document.getElementsByTagName('footer');
subm[0].insertAdjacentElement('beforeBegin', cpt);
$(document).ready(function() {

$(document).mousemove(function(e) {

if(e.pageY <= 5)
{

cpt.innerHTML = '<div style="width: 300px; height: 150px; text-align: center; padding: 15px; border: 3px solid #0000cc; border-radius: 10px; color: #0000cc; position: fixed; top: 0; right: 0; bottom: 0; left: 0; margin: auto;background: black;z-index: 500;" id="closed"><h1>Не уходите</h1><h3>Заполните <a href="https://резюме-образец.рф/online-konstruktor-rezume.html#form-1">резюме</a></div>' ;
}

});

});

