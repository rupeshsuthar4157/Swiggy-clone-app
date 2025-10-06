export interface BreakfastItemes {
  name: string;
  description?: string;
  location?: string;
  src: string[];  // array of images
  heading: string;
  rating?: number;
  income?: string;
  kg?: string;
  box?: string;
  box2?: string;
}

export const breakfastImag: BreakfastItemes[] = [
  {
    name: "zeno bistro lounge",
    description: "North Indian • Baverages",
    location: "Hotel Raghu Mahal, Subhash Nagar, Udaipur",
    src: [
      "https://b.zmtcdn.com/data/pictures/5/20906865/cb855f67bf50d406fa2acdea57197ea8.jpg?fit=around|750:500&crop=750:500;*,*",
      "https://udaipurdarpan.com/wp-content/uploads/2023/03/soul-bistro-view.jpg",
      "https://udaipurdarpan.com/wp-content/uploads/2024/05/zeno-bistro-club-lounge-udaipur-1024x683.jpg",
      "https://b.zmtcdn.com/data/pictures/5/20906865/627d32b1cb636ab6f55664f3ca8253de.jpg?fit=around|750:500&crop=750:500;*,*",
      "https://b.zmtcdn.com/data/pictures/5/20906865/0fb243ea01ca6e0022cee0cd1a61cfa5.jpg?fit=around|960:500&crop=960:500;*,*"
    ],
    heading: "Bakers Blend cafe & Patisserie",
    rating: 4.7,
    income: "₹1500 for two",
    kg: "0.7 kg",
    box: "Book Table",
    box2: "Breakfast Combo",
  },
  {
    name: "Bakers Blend cafe & Patisserie",
    description: "Chinese • continenl",
    location: "Madhuban Udhipur",
    src: [
      "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1707377417/eed4ceb9a8f6f932717e8cfc013f1c0d.jpg",
      "https://b.zmtcdn.com/data/pictures/7/20481977/0329b17878022c1bc0d60c0c4bf5e68f.jpg?fit=around|960:500&crop=960:500;*,*",
      "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1707377412/ac8f7f72196587f3d8c8b59041fc2e68.jpg",
      "https://dt4l9bx31tioh.cloudfront.net/eazymedia/restaurant/697035/restaurant020240720105804.jpg?width=750&height=436&mode=crop",
      "https://b.zmtcdn.com/data/pictures/7/20481977/7a1be34713c6a67bc549a69ad274f1d4.jpg"
    ],
    heading: "Best Breakfast in Jaipur",
    rating: 4.5,
    income: "₹2000 for two",
    kg: "0.7 kg",
    box: "Book Table",
    box2: "Special Offer",
  },
  {
    name: "Mathara - The Heights",
    description: "Continental • North Indian",
    location: "Bengaluru",
    src: [
      "https://dt4l9bx31tioh.cloudfront.net/eazymedia/restaurant/687706/restaurant020230323073147.jpg?width=818&height=450&mode=crop",
      "https://dt4l9bx31tioh.cloudfront.net/eazymedia/restaurant/687706/restaurant1120230323073147.jpg?width=818&height=450&mode=crop",

      "https://plus.unsplash.com/premium_photo-1670984940779-3e7440b20356?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661433201283-fcb240e88ad4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    heading: "Vegas 69 Bar and Lounge",
    rating: 3.9,
    income: "₹1300 for two",


    kg: "0.6 km",
    box: "Reserve Now",
    box2: "Happy Hours",
  },
  {
    name: "Vegas 69 Bar and Lounge",
    description: "North Indian • Baverages",
    location: "Hotel Raghu Mahal, Subhash Nagar, Udaipur",
    src: [
      "https://img.restaurantguru.com/r84a-Vegas-69-Udaipur-best-club-and-bar-in-udaipur-view-2022-12.jpg",
      "https://discotech.me/wp-content/uploads/2020/04/vegas-banner-min-1-3.png",
      "https://img.restaurantguru.com/rbe7-Vegas-69-Udaipur-best-club-and-bar-in-udaipur-image.jpg",
      "https://img.restaurantguru.com/r9df-Vegas-69-Bar-and-Restaurant-bar-counter.jpg",
      "https://www.vegas24seven.com/wp-content/uploads/2025/09/Clique-BL_Banquette1_credit-Clint-Jenkins.jpg"
    ],
    heading: "Classic American Breakfast",
    rating: 4.7,
    income: "₹1500 for two",
    kg: "1.7 kg",
    box: "Reserve Now",
    box2: "Happy Hours",
  },
  {
    name: "Kebabs & Curries Company",
    description: "Mughlai • North Indian",
    location: "Madhuwan Building, Shobhagpura, Udaipur",
    src: [
      "https://b.zmtcdn.com/data/pictures/0/19155720/c914febc4d93a32854c76e825cf00dff.jpeg?fit=around|960:500&crop=960:500;*,*",
      "https://b.zmtcdn.com/data/pictures/5/20911885/975c9ffc8fd821a2cabf0ccdc5b097eb.jpeg?fit=around|750:500&crop=750:500;*,*",
      "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/5/9/6c46ccda-41ec-4c30-965b-a31a8f7ce05b_image359b52dc60e59458283ffec39c32cecdb.JPG",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/fa/f3/31/ambience-of-kebabs-curries.jpg?w=900&h=500&s=1",
      "https://b.zmtcdn.com/data/pictures/0/19041160/8a4e98d34bcfae09c365ac4fb9180fb0.jpg",
    ],
    heading: "Kebabs & Curries Company",
    rating: 4.4,
    income: "₹1000 for two",
    kg: "2.4 kg",
    box: "Reserve Now",
    box2: "20% Off",
  },
  {
    name: "The F3 Bar",
    description: "Continental • Pizza",
    location: "Radisson Udaipur, Ashok Nagar, Udaipur",
    src: [
      "https://b.zmtcdn.com/data/pictures/8/18702168/31341b6076a0bf1c4b29999312456648.jpg?fit=around|750:500&crop=750:500;*,*",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/21/e9/eb/f3.jpg?w=900&h=500&s=1",
      "https://b.zmtcdn.com/data/pictures/8/18702168/c284e44eca1c8c2ace6aeda48d1ac2e5.jpg?fit=around|960:500&crop=960:500;*,*",
      "https://b.zmtcdn.com/data/pictures/3/18701303/a7f538a6ef19c514c98902e1c61d3ff0_featured_v2.jpg",
      "https://dt4l9bx31tioh.cloudfront.net/eazymedia/restaurant/691259/restaurant020231019061802.jpg?width=750&height=436&mode=crop"
    ],
    heading: "Continental Paradise",
    rating: 4.7,
    income: "₹3000 for two",
    kg: "0.6 kg",
    box: "Book Table",
    box2: "Weekend Special",
  },
  {
    name: "Innara Restaurant",
    description: "North Indian • Chinese",
    location: "Oriental Palace Resorts, Subhash Nagar, Udaipur",
    src: [
      "https://b.zmtcdn.com/data/pictures/0/21146550/5fdd7b416574a306e0c9dbbac3900833.jpg?fit=around|750:500&crop=750:500;*,*",
      "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL01XRWpyN0xoUXBLTUVmTHZkOC1pZ1EiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0=",
      "https://morsels.com.au/wp-content/uploads/Inara/DSCF4623_DxO.jpg",
      "https://b.zmtcdn.com/data/pictures/4/21577124/7b75fe46a395c9a9b3c35405f4be5c85.png?fit=around|960:500&crop=960:500;*,*",
      "https://images.trvl-media.com/lodging/95000000/94730000/94722400/94722355/b8b51e2a.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    ],
    heading: "Taste of Japan in Delhi",
    rating: 4.4,
    income: "₹1000 for two",
    kg: "1.2 kg",
    box: "Book Table",
    box2: "Chef Special",
  },
  {
    name: "Martini Bistro",
    description: "North Indian • Asian",
    location: "Shobhagpura, Udaipur",
    src: [
      "https://dt4l9bx31tioh.cloudfront.net/eazymedia/restaurant/697586/restaurant020240808051505.jpg?width=750&height=436&mode=crop=",
      "https://resizer.otstatic.com/v3/photos/68445313-3?width=1280&height=720&webp=true",
      "https://b.zmtcdn.com/data/pictures/9/21544209/17316867634c0ced73-e037-4ee1-9c43-97cf8c2b693c.jpg?fit=around|750:500&crop=750:500;*,*",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9d/18/50/salle-a-manger-dining.jpg?w=900&h=-1&s=1",
      "https://content3.jdmagicbox.com/v2/comp/udaipur-rajasthan/x8/9999px294.x294.240105201658.u6x8/catalogue/martini-bistro-hiran-magri-udaipur-rajasthan-restaurants-x05jh82f69.jpg",
    ],
    heading: "Taste of Japan in Delhi",
    rating: 4.9,
    income: "₹1200 for two",
    kg: "1.9 kg",
    box: "Book Table",
    box2: "Chef Special",
  },
  {
    name: "The Artist House",
    description: "Chinese • North Indian",
    location: "Nada Khada, Udaipur",
    src: [
      "https://images.staybook.in/The-Artist-House-Udaipur/The-Artist-House-Udaipur_Facade_2.jpg",
      "https://b.zmtcdn.com/data/pictures/7/19168797/1b2af8a7b05e8ffd8710795097f68913.jpg?fit=around|750:500&crop=750:500;*,*",
      "https://b.zmtcdn.com/data/pictures/7/19168797/5f85ccec23c574ea13660dcb057fb47e.jpg?fit=around|750:500&crop=750:500;*,*",
      "https://b.zmtcdn.com/data/pictures/chains/0/20707560/0d633c680287c776a88a6291245708ab.jpeg",
      "https://b.zmtcdn.com/data/pictures/7/19168797/d9d2b7afe66cb65044ff36e737702c6d.jpg?fit=around|750:500&crop=750:500;*,*",
    ],
    heading: "Taste of Japan in Delhi",
    rating: 4.2,
    income: "₹1000 for two",
    kg: "2.8 kg",
    box: "Book Table",
    box2: "Chef Special",
  },


];
