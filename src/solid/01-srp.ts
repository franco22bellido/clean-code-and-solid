(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    class ProductService {

        getProduct (id : number) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailter {
        private masterEmail: string = 'franco@google.com';

        sendEmail( emailList : string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes', template);
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        
        private productService : ProductService;
        private mailer : Mailter;

        constructor( _productService: ProductService, _mailer: Mailter){
            this.productService = _productService;
            this.mailer = _mailer;
        }

        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct(id)
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail(['eduardo@google.com'], 'to-clients');
        }
    }
    
    class CartBloc {
        private itemsInCart : Object[] = [];

        AddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }


    const _mailer = new Mailter();
    const _productService = new ProductService();
    const productBloc = new ProductBloc(_productService, _mailer);
    const cartBloc = new CartBloc();
    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.AddToCart(10);








})();