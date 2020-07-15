var local_ARRAY = []
var init_img_count = 0
function init() {

    axios
        .get('https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050')
        .then(function (res) {
            local_ARRAY = res.data.img
            console.log(local_ARRAY)
            loadimage(res.data.img)
            document.getElementsByClassName("loading")[0].style.display = 'none';
        })
        .catch(function (err) {
            console.log(err)
        })
}

function loadimage(imgarr_in) {
    // console.log(imgarr_in.length)
    // for (var i = 0; i < imgarr_in.length; i++) {        
    // }
    var img_count = imgarr_in.length;
    console.log(img_count)
    var html_img = imgarr_in[init_img_count]
    html_img = '<img src="' + html_img + '" >'
    document.getElementsByClassName('imgbox')[0].innerHTML = html_img

}
function rentIMG() {
    var html_img = local_ARRAY[init_img_count]
    html_img = '<img src="' + html_img + '" >'
    document.getElementsByClassName('imgbox')[0].innerHTML = html_img
}
function switch_img(xx) {

    switch (xx) {
        case 'turn_left':
            if (init_img_count > 0) {
                init_img_count--
                rentIMG()
            } else {

            }

            break;
        case 'turn_right':
            if (init_img_count < local_ARRAY.length-1) {
                init_img_count++
                rentIMG()
            } else {

            }

            break;
    }
    console.log(init_img_count)
    document.getElementById('changetxt').innerHTML=(init_img_count+1)+'/'+local_ARRAY.length

}

init()

document.getElementsByClassName('leftbtn')[0].addEventListener('click', function (e) {
    console.log("left")
    switch_img('turn_left')
})
document.getElementsByClassName('rightbtn')[0].addEventListener('click', function (e) {
    console.log("right")
    switch_img('turn_right')
})