import {
  Component,
  NgModule,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Examplev2Component } from './examplev2/examplev2.component';
import { ExampleComponent } from './example/example.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Examplev4Component } from './examplev4/examplev4.component';
import { AuthorListComponent } from './author/author-list-component';
import { ToggleComponent } from './toggle/toggle.component';
import { BindingComponent } from './binding/binding.component';
import { ContentProjectionComponent } from './contentProjection/contentProjection.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsGroupComponent } from './tabs/tabs_group.component';
import { TabsPanelComponent } from './tabs/tabs_panel.component';
import { CounterComponent } from './counter/counter.component';
import { TabsContentDirective } from './tabs/tabs_content.directive';
import { I_Product, ProductService } from './service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DetailsArticleComponent } from './detailsArticle/detailsArticle.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Examplev2Component,
    ExampleComponent,
    FormsModule,
    CommonModule,
    NgFor,
    Examplev4Component,
    AuthorListComponent,
    ToggleComponent,
    BindingComponent,
    ContentProjectionComponent,
    TabsComponent,
    TabsGroupComponent,
    TabsPanelComponent,
    CounterComponent,
    TabsContentDirective,
    HttpClientModule,
    HomeComponent,
    DetailsArticleComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  binding = 'Angular';

  title = 'challengeAngularTest';

  object = {
    name: 'Hello example',
    age: 18,
  };

  inputType = 'text';

  value = 'Xin chào!';

  handler = (e: any) => {
    console.log(e.value);
  };

  data = [
    { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 22, email: 'charlie@example.com' },
    { id: 4, name: 'David', age: 28, email: 'david@example.com' },
    { id: 5, name: 'Eva', age: 26, email: 'eva@example.com' },
    { id: 6, name: 'Frank', age: 35, email: 'frank@example.com' },
    { id: 7, name: 'Grace', age: 29, email: 'grace@example.com' },
    { id: 8, name: 'Hannah', age: 27, email: 'hannah@example.com' },
    { id: 9, name: 'Isaac', age: 24, email: 'isaac@example.com' },
    { id: 10, name: 'Jack', age: 31, email: 'jack@example.com' },
  ];

  languages = ['JavaScript', 'C#', 'Java'];

  toggleBackGround = false;
  toggleBorder = false;

  @ViewChild(Examplev4Component, { static: false })
  examplev4Component!: Examplev4Component;

  currentProgress = 1;

  nameChange: string = '';

  checked: boolean = true;
  checked1: boolean = true;
  checked2: boolean = true;
  checked3: boolean = true;
  showLast: boolean = false;

  @ViewChildren('toggleComps') toggleComps:
    | QueryList<ToggleComponent>
    | undefined;
  @ViewChild('toggleComp') toggleComp: ToggleComponent | undefined;

  constructor(private productService: ProductService) {}

  
observer = {
  next: (value: unknown) => {
    console.log(value);
  },
  error: (error: unknown) => {
    console.log(error);
  },
  complete: () => {
    console.log('complete');
  },
};

  ngOnInit() {
    this.toggleComps?.changes?.subscribe(
      (comps: QueryList<ToggleComponent>) => {
        console.log(comps); // Bây giờ nó sẽ console.log ra danh sách các toggle components
      }
    );

    this.productService.data$.subscribe({
      next: (products: I_Product[]) => {
        console.log(products);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete')
      }
    })

  }

  handleClickGetProduct () {
    this.productService.getData();
  }


  ngAfterViewInit() {
    this.toggleComps?.changes?.subscribe(
      (comps: QueryList<ToggleComponent>) => {
        console.log(comps); // Bây giờ nó sẽ console.log ra danh sách các toggle components
      }
    );
  }

  handleClickToggle = () => {
    this.toggleComp?.handleToggle();
  };

  counter = 1;

  navs = ['Active', 'Link 1', 'Link 2'];

  currentIndex: number = 0;

  // console.log(mockProductComponent.cartService.calculateTotal());
  

}

interface productModel {
  sku: string;
  name: string;
  price: number;
}

interface CartItem {
  product: productModel;
  quality: number;
}

interface ICartService {
  selectedProducts: CartItem[];
  calculateTotal(): number;
  addToCart(): void;
}

class CartService implements ICartService {
  selectedProducts: CartItem[] = [];
  calculateTotal(): number {
    return this.selectedProducts.reduce(
      (total, item) => item.product.price * item.quality + total,
      0
    );
  }

  addToCart(): void {
    // logic
  }


  

}

class ProductComponent {
  // cartService: CartService = new CartService()
  constructor(public cartService: ICartService) {}
}

const cartService = new CartService();

const productComponent: ProductComponent = new ProductComponent(cartService);

// console.log(productComponent.cartService.calculateTotal());

class MockCartService implements ICartService {
  selectedProducts: CartItem[] = [];
  calculateTotal(): number {
    return 1;
  }

  addToCart(): void {
    // logic
  }
}
// Mục đính tạo này để không dùng cartService để tránh việc dùng dữ liệu chính để test
const mockCartService = new MockCartService();

const mockProductComponent: ProductComponent = new ProductComponent(
  mockCartService
);
