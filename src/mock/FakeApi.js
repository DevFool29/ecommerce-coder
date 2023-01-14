import z1 from '../img/z1.png';
import z2 from '../img/z2.png';
import z4 from '../img/z4.png';
import z5 from '../img/z5.png'
import z8 from '../img/z8.png'

export const productsData= [
    { id: 1,
      title: 'Zapatillas Samba OG',
      brand: 'adidas',
      description: 'Su confección súper duradera agrega una suela de goma que aporta tracción. Son la opción perfecta para tu fanático del calzado deportivo.',
      price: 78,
      pictureUrl: z1
    },
    { id: 2,
      title: 'Zapatillas Forum 84 Home Alone 2',
      brand: 'adidas',
      description: 'Zapatillas inspiradas en el icono de los aros de los 80 pero con colores brillantes y atrevidos. Incorpora una suela de goma para una óptima tracción ycuello acolchado de corte bajo para más confort.',
      price: 156,
      pictureUrl: z2
    },
    { id: 4,
      title: 'Nike Court Legacy Canvas',
      brand: 'nike',
      description: 'La combinación de varias texturas crea un diseño liviano yduradero que brinda a los pies jóvenes una sensación de comodidad. Además, su configuración de amortiguación flexible se combina con un cómodo cinturón de fijación, adecuado para deportes.',
      price: 52,
      pictureUrl: z4
    },
    { id: 5,
      title: 'Nike Court Borough Low 2',
      brand: 'nike',
      description: 'Zapatillas urbanas que llevarán su estilo urbano a otro nivel. Inspiradas en el mundo del básquet, cuentan con una superficie sintética y añaden unas perforaciones en la parte delantera para darle más ventilación a sus pies.',
      price: 103,
      pictureUrl: z5
    },
    { id: 8,
      title: 'Puma Zapatillas Hombre TRC',
      brand: 'puma',
      description: 'La tecnología Trinomic causó furor en la década de 1990. La amortiguación, la flexibilidad y la estabilidad se convirtieron en funciones imprescindibles que se plasmaron en el icónico logotipo del triángulo. ',
      price: 130,
      pictureUrl: z8
    },
  ]

export const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productsData);
    }, 1000)
  })

