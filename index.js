var product = [{
    id: 1,
    img: 'https://down-th.img.susercontent.com/file/sg-11134201-22100-78m5rw1q8siv19',
    name: 'ເສື້ອ ດຳລ້ວນ ຟຣີ',
    price: 20000,
    description: 'BEN10 Alien Force Black Boys Crocs',
    type: 'shirt'
}, {
    id: 2,
    img: 'https://th.bing.com/th/id/OIP.g2vNdsCpP1X1wt9FsBIMCQHaHa?rs=1&pid=ImgDetMain',
    name: 'ເສື້ອ ລາຍດອກໄມ ຟຣິິ',
    price: 70000,
    description: 'Adidas shirt Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
    type: 'shirt'
}, {
    id: 3,
    img: 'https://th.bing.com/th/id/OIP.IPLlxbSaMdd5ig2fRUsiMgHaJ4?rs=1&pid=ImgDetMain',
    name: 'ໂສ້ງ ຊົງເອ',
    price: 30000,
    description: 'Adidas shoe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
    type: 'trousers'
}, {
    id: 4,
    img: 'https://th.bing.com/th/id/OIP.PDhdXJpXMrF42ChgZZ8hNQHaKi?w=1450&h=2063&rs=1&pid=ImgDetMain',
    name: 'ໂສ້ງ ຊ້າງ',
    price: 30000,
    description: 'Adidas shoe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
    type: 'trousers'
},{
    id: 5,
    img: 'https://cf.shopee.co.th/file/08f03d521b7e35972374a1f6dd56073a',
    name: 'ສະລິບ benten',
    price: 30000,
    description: 'Adidas shoe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
    type: 'pants'
},{
    id: 4,
    img: 'https://images-na.ssl-images-amazon.com/images/I/616llIXYnQL.jpg',
    name: 'ສະລິບ spider-man',
    price: 30000,
    description: 'Adidas shoe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
    type: 'pants'
},{
    id: 4,
    img: 'https://th.bing.com/th/id/OIP.o77mnNcoZlBtftStU4K50AHaHa?rs=1&pid=ImgDetMain',
    name: 'ເກີບ benten',
    price: 30000,
    description: 'Adidas shoe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
    type: 'shoe'
},{
    id: 4,
    img: 'https://th.bing.com/th/id/OIP.4e_apozIC-lc7tPBSczIBwHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain',
    name: 'ເກີບ benten',
    price: 30000,
    description: 'BEN10 Alien Force Black Boys Crocs',
    type: 'shoe'
}];

// [{},{},{}] // length = 3

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } KIP</p>
                </div>`;
    }
    $("#productlist").html(html);

})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchsomething(elem) {
    // console.log('#'+elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < product.length; i++) {
        if( product[i].name.includes(value) ) {
            html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } KIP</p>
                </div>`;
        }
    }
    if(html == '') {
        $("#productlist").html(`<p>Not found product</p>`);
    } else {
        $("#productlist").html(html);
    }

}

function searchproduct(param) {
    console.log(param)
    $(".product-items").css('display', 'none')
    if(param == 'all') {
        $(".product-items").css('display', 'block')
    }
    else {
        $("."+param).css('display', 'block')
    }
}

var productindex = 0;
function openProductDetail(index) {
    productindex = index;
    console.log(productindex)
    $("#modalDesc").css('display', 'flex')
    $("#mdd-img").attr('src', product[index].img);
    $("#mdd-name").text(product[index].name)
    $("#mdd-price").text( numberWithCommas(product[index].price) + ' KIP')
    $("#mdd-desc").text(product[index].description)
}

function closeModal() {
    $(".modal").css('display','none')
}

var cart = [];
function addtocart() {
    var pass = true;

    for (let i = 0; i < cart.length; i++) {
        if( productindex == cart[i].index ) {
            console.log('found same product')
            cart[i].count++;
            pass = false;
        }
    }

    if(pass) {
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1
        };
        // console.log(obj)
        cart.push(obj)
    }
    console.log(cart)

    Swal.fire({
        icon: 'success',
        title: 'Add ' + product[productindex].name + ' to cart !'
    })
    $("#cartcount").css('display','flex').text(cart.length)
}

function openCart() {
    $('#modalCart').css('display','flex')
    rendercart();
}

function rendercart() {
    if(cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="cartlist-items">
                        <div class="cartlist-left">
                            <img src="${cart[i].img}" alt="">
                            <div class="cartlist-detail">
                                <p style="font-size: 1.5vw;">${cart[i].name}</p>
                                <p style="font-size: 1.2vw;">${ numberWithCommas(cart[i].price * cart[i].count) } KIP</p>
                            </div>
                        </div>
                        <div class="cartlist-right">
                            <p onclick="deinitems('-', ${i})" class="btnc">-</p>
                            <p id="countitems${i}" style="margin: 0 20px;">${cart[i].count}</p>
                            <p onclick="deinitems('+', ${i})" class="btnc">+</p>
                        </div>
                    </div>`;
        }
        $("#mycart").html(html)
    }
    else {
        $("#mycart").html(`<p>Not found product list</p>`)
    }
}

function deinitems(action, index) {
    if(action == '-') {
        if(cart[index].count > 0) {
            cart[index].count--;
            $("#countitems"+index).text(cart[index].count)

            if(cart[index].count <= 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Are you sure to delete?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel'
                }).then((res) => {
                  if(res.isConfirmed) {
                     cart.splice(index, 1) 
                     console.log(cart)
                     rendercart();
                     $("#cartcount").css('display','flex').text(cart.length)
                     
                     if(cart.length <= 0) {
                        $("#cartcount").css('display','none')
                     }
                  }  
                  else {
                    cart[index].count++;
                    $("#countitems"+index).text(cart[index].count)
                    rendercart();
                  }
                })
            }
            rendercart();
        }
        
    }
    else if(action == '+') {
        cart[index].count++;
        $("#countitems"+index).text(cart[index].count)
        rendercart();
    }
}