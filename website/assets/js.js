function change_suffix(){
    document.getElementById('result').value = "변환중...";   
    
    var spell_chk = spellchk;
    console.log(spell_chk);
    var origin = document.getElementById('origin').value;
    var before = document.getElementById('before').value;
    var after = document.getElementById('after').value;
    var spellchk_mode = spell_chk ? 1 : 0;
    console.log(spellchk_mode);
    const api_url = 'https://api.종결어미.site/api/v1?sc=' + spellchk_mode + '&txt=' + origin + '&before=' + before + '&after=' + after;
    const headers = new Headers({
      'Content-Type': 'text/xml',
    });
    fetch(api_url,  headers ).then((resp) => {
        return resp.json();
    }).then((json) => {
        if (!json) return false;
        console.log(json);

        document.getElementById('result').value = json['result'];     

    }).catch(() => {
        document.getElementById('result').value = "변환실패!";   
    })
}

function copy_result(){
    var copytxt = document.getElementById('result');
    copytxt.select();
    copytxt.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("복사성공!\n" + copytxt.value);
}
