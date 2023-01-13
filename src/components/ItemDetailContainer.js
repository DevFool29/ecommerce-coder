import { useState, useEffect } from "react";
import z1 from '../img/z1.png'
import z2 from '../img/z2.png'
import z4 from '../img/z4.png'
import z5 from '../img/z5.png'
import z8 from '../img/z8.png'

const productsData= [
  { id: 1,
    title: 'Zapatillas Samba OG',
    brand: 'ADIDAS',
    description: 'ESTILO CLÁSICO E ICÓNICO PARA USO DIARIO',
    price: 78,
    pictureUrl: z1
  },
  { id: 2,
    title: 'Zapatillas Forum 84 Home Alone 2',
    brand: 'ADIDAS',
    description: 'PREPÁRATE PARA REVOLUCIONARLO TODO',
    price: 156.40,
    pictureUrl: z2
  },
  { id: 4,
    title: 'Nike Court Legacy Canvas',
    brand: 'Nike',
    description: 'Estas zapatillas urbanas Nike rinden tributo a la cultura del tenis.',
    price: 52.19,
    pictureUrl: z4
  },
  { id: 5,
    title: 'Nike Court Borough Low 2',
    brand: 'Nike',
    description: 'Court Borough Low 2 son unas zapatillas urbanas de niño que combinan comodidad y el estilo.',
    price: 109.63,
    pictureUrl: z5
  },
  { id: 8,
    title: 'Puma Zapatillas Hombre TRC',
    brand: 'Puma',
    description: 'La tecnología Trinomic causó furor en la década de 1990. La amortiguación, la flexibilidad y la estabilidad se convirtieron en funciones imprescindibles que se plasmaron en el icónico logotipo del triángulo. ',
    price: 130,
    pictureUrl: z8
  },
]

const ItemDetailContainer = () => {

  const[product, setProduct] = useState({})

  const getProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(JSON.stringify(productsData));
    }, 2000)
  })

  useEffect(() => {
    getProduct.then(response => {
      console.log(response);
      setProduct(response);
    }).catch(error => console.log(error))
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default ItemDetailContainer