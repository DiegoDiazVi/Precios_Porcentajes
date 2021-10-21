
function calculaPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioTotal = (precio * porcentajePrecioConDescuento)/100;
    return precioTotal;
}


function ButtonPriceDiscount() {
    const cupones = ["Halloween","Navidad","Verano"];
    
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;
    
    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;
    
    let descuentoCupon; 
    if (cuponValue === cupones[0]) {
        descuentoCupon = 10;
        
    }else if (cuponValue=== cupones[1]) {
        descuentoCupon = 20;
    }
    else if (cuponValue === cupones[2]) {
        descuentoCupon = 15;
    }else{
        descuentoCupon = 0; 
    }
    let descuentoTotal = descuentoCupon + parseInt(discountValue);
    let priceTotal = calculaPrecioConDescuento(priceValue,descuentoTotal);
    const resultTotal = document.getElementById("ResultPrice");
    resultTotal.innerText = "El precio total es: $" + priceTotal+ " 💸";
}