import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  useTheme,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LaptopIcon from '@mui/icons-material/Laptop';
import SmartphoneIcon from '@mui/icons-material/Phone';
import WatchIcon from '@mui/icons-material/Watch';
import HeadphonesIcon from '@mui/icons-material/Headset';
import CameraIcon from '@mui/icons-material/Camera';

const productsData = {
  laptop: [
    { id: 1, name: 'Gaming Laptop', description: 'High-performance laptop', image: "https://img.freepik.com/premium-photo/laptop-with-gaming-headset-screen_853645-16366.jpg?semt=ais_hybrid" },
    { id: 2, name: 'Business Laptop', description: 'Sleek and professional', image: "https://i.rtings.com/assets/products/K8myoAQQ/hp-spectre-x360-14-2024/design-small.jpg?format=auto" },
    { id: 3, name: 'Personal Use Laptop', description: 'Most Liking Laptop', image: "https://png.pngtree.com/thumb_back/fw800/background/20241016/pngtree-laptop-mockup-on-a-wooden-table-with-a-tropical-beach-background-image_16398493.jpg" },
    { id: 4, name: 'For Kids Use', description: 'Good Looking', image: "https://p.turbosquid.com/ts-thumb/dW/NDlOMS/ONzjPMPC/laptopsonyvaioeseriespink_2/jpg/1382021084/1920x1080/fit_q87/2c72071ba5ced2dabc65c90a6d0e87ffbf76a205/laptopsonyvaioeseriespink_2.jpg" },
    { id: 5, name: 'Portable Laptop', description: 'Compact and lightweight', image: "https://www.pcworld.com/wp-content/uploads/2024/05/ASUS_ROG_Zephyrus_G14_GA402_1.jpg?quality=50&strip=all" },
    { id: 6, name: 'Convertible Laptop', description: '2-in-1 hybrid laptop', image: "https://news.lenovo.com/wp-content/uploads/2022/12/16_Ideapad_Pro_5i_Hero_Family-e1671470792489.jpg" },
    { id: 7, name: 'Touchscreen Laptop', description: 'Responsive touchscreen for multitasking', image: "https://img.freepik.com/premium-photo/closeup-hands-using-digital-tablet-with-stylus-pen-with-blurred-background_132358-58459.jpg" },
    { id: 8, name: 'High Performance Laptop', description: 'Ultimate gaming experience', image: "https://static.vecteezy.com/system/resources/thumbnails/035/546/654/small_2x/ai-generated-vibrant-display-high-performance-gaming-ai-generated-laptop-template-photo.jpg" }
  ],
  smartphone: [
    { id: 1, name: 'Latest Smartphone', description: 'Top-notch smartphone features', image: "https://24newshd.tv/digital_images/large/2024-11-19/how-to-choose-right-smartphone-for-your-needs-best-low-cost-and-highly-efficient-smartphones-in-paki-1732037992-7901.png" },
    { id: 2, name: 'Affordable Smartphone', description: 'Budget-friendly smartphone', image: "https://image.made-in-china.com/202f0j00hdHWlmcoMbkD/Good-Condition-Original-Smart-Phone-12-PRO-with-6-1inch-Screen-2532X1170.webp" },
    { id: 3, name: 'Ultra Smartphone', description: 'Flagship features with amazing camera', image: "https://www.kimstore.com/cdn/shop/articles/S24_Ultra_Banner.png?v=1705634996" },
    { id: 4, name: 'Eco-friendly Smartphone', description: 'Sustainable and environment-friendly', image: "https://soyacincau.com/wp-content/uploads/2022/10/221024-nokia-x30-5g-1.jpg" },
    { id: 5, name: 'Gaming Smartphone', description: 'Built for gaming enthusiasts', image: "https://img.freepik.com/premium-photo/image-shows-mobile-phone-with-neon-light-dark-background-displaying-shooter-game-with-soldier-holding-rifle-image-is-concept-mobile-gaming-esports_1257429-61135.jpg" },
    { id: 6, name: 'Flagship Smartphone', description: 'Powerful performance with luxury design', image: "https://www.cnet.com/a/img/resize/fa0a645a6acdb9fe14e9c67a028c104804ab874c/hub/2017/10/16/aa9b0c7f-08df-4726-8b95-6424ce5443e9/galaxy-note-8-3555-019.jpg?auto=webp&fit=crop&height=1200&width=1200" },
    { id: 7, name: 'Camera-centric Smartphone', description: 'Incredible photography features', image: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/09/aeaf-lock.jpg" },
    { id: 8, name: 'Budget Gaming Smartphone', description: 'Affordable performance for gamers', image: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/F3a26.jpg" }
  ],
  watch: [
    { id: 1, name: 'Stylish Watch', description: 'Elegant wristwatch for daily wear', image: "https://img.lovepik.com/bg/20240225/Vibrant-3D-Watch-Background-with-Pastel-Colored-Illustration_3701189_wh1200.jpg" },
    { id: 2, name: 'Smart Watch', description: 'Track fitness and health', image: "https://img.freepik.com/premium-photo/generic-smartwatches-isolated-colorfull-background-3d-illustration_960782-6397.jpg" },
    { id: 3, name: 'Fitness Watch', description: 'Your personal fitness tracker', image: "https://plus.unsplash.com/premium_photo-1713194201026-6202e7a83912?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zml0bmVzcyUyMHdhdGNofGVufDB8fDB8fHww" },
    { id: 4, name: 'Luxury Watch', description: 'A luxury timepiece for special occasions', image: "https://img.freepik.com/premium-photo/closeup-luxury-watch-with-black-face-gold-accents-watch-is-resting-reflective-surface-with-blurred-background-christmas-decorations_14117-845439.jpg" },
    { id: 5, name: 'Sporty Smartwatch', description: 'Water-resistant smartwatch for sports lovers', image: "https://thumbs.dreamstime.com/b/woman-exercising-winter-park-looks-activity-tracker-smart-watch-woman-exercising-winter-park-looking-activity-138185770.jpg" },
    { id: 6, name: 'Casual Wristwatch', description: 'Sleek design for everyday use', image: "https://image.made-in-china.com/202f0j00VgsocJbGrmka/Fashion-Design-Diamond-Watches-Women-Quartz-Watches-Casual-Watch-Couple-s-Watch.webp" },
    { id: 7, name: 'Analog Watch', description: 'Classic analog wristwatch', image: "https://rukminim2.flixcart.com/image/720/864/kt8zb0w0/watch/t/r/a/1-as000022c-allen-solly-men-original-imag6mz2dmaymgpf.jpeg?q=60&crop=false" },
    { id: 8, name: 'Hybrid Smartwatch', description: 'Analog design with digital features', image: "https://www.skagen.com/on/demandware.static/-/Library-Sites-SkagenSharedLibrary/default/dw8d6e1346/evergreen/hybrid-app-support/M1.jpg" }
  ],
  headphones: [
    { id: 1, name: 'Wireless Headphones', description: 'Noise-cancelling, Bluetooth', image: "https://flipincart.pk/wp-content/uploads/2024/03/14103956201606649690.jpg" },
    { id: 2, name: 'Gaming Headset', description: 'Enhanced audio experience', image: "https://static.vecteezy.com/system/resources/previews/037/044/052/non_2x/ai-generated-studio-shot-of-black-headphones-over-music-note-explosion-background-with-empty-space-for-text-photo.jpg" },
    { id: 3, name: 'Studio Headphones', description: 'Perfect for mixing and mastering music', image: "https://blog.burtonacoustix.com/wp-content/uploads/2024/01/jacobsonphilemon3877_Envision_a_DJ_lost_in_the_music_surrounded_af8373d9-f362-4c82-95a5-bbc9710f6a38-1024x574.png" },
    { id: 4, name: 'Noise Cancelling Headphones', description: 'Block outside noise for focus', image: "https://s.yimg.com/ny/api/res/1.2/toB0EVfbnaFvs7DzKvsi0Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM3Mw--/https://s.yimg.com/os/creatr-uploaded-images/2023-04/35822050-da2c-11ed-a74e-07352a37e129" },
    { id: 5, name: 'Wireless Earbuds', description: 'Compact and comfortable for daily use', image: "https://images.stockcake.com/public/a/d/7/ad759df0-4547-4d50-88ac-9929ecf46f96_large/wireless-earbuds-pictured-stockcake.jpg" },
    { id: 6, name: 'Over-Ear Headphones', description: 'Comfortable fit for long listening sessions', image: "https://media.croma.com/image/upload/v1723873109/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/310090_qzoebe.png" },
    { id: 7, name: 'Noise Cancelling Bluetooth Headphones', description: 'Impressive sound quality for travel', image: "https://cdnp2.stackassets.com/2a5de3fa6530f0c6986dd9d5de995a1e62f7d5fb/store/0377985108c0b697606b088d82d88df68f4d9fcf0446807c6899d18854fd/product_37821_product_shots3.jpg" },
    { id: 8, name: 'True Wireless EarBuds', description: 'Ultimate freedom for movement', image: "https://www.cnet.com/a/img/resize/f954a02e848be5a41feb206c04912d19908abfa8/hub/2021/10/08/124e8485-ccf7-469c-854c-69aac311c8f4/best-sounding-true-wireless-promo-shot.jpg?auto=webp&fit=crop&height=675&width=1200" }
  ],
  camera: [
    { id: 1, name: 'Digital Camera', description: 'High-resolution digital camera', image: "https://img.freepik.com/premium-photo/3d-camera-illustration-background_1235831-274922.jpg" },
    { id: 2, name: 'Action Camera', description: 'Capture high-quality action shots', image: "https://img.freepik.com/premium-photo/action-camera-tripod-recording-mountain-landscape_98402-184654.jpg" },
    { id: 3, name: 'Mirrorless Camera', description: 'Compact, high-quality mirrorless system', image: "https://hashmiphotos.com/wp-content/uploads/2024/11/FUJIFILM-X-M5-Mirrorless-Camera-with-XC-15-45mm-f_3.5-5.6-Lens-Black-Price-in-Pakistan-Hashmi-Photos-optimized.webp" },
    { id: 4, name: 'DSLR Camera', description: 'Capture professional-quality shots', image: "https://images.pexels.com/photos/18785536/pexels-photo-18785536/free-photo-of-a-canon-eos-slr-camera-against-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 5, name: 'Point and Shoot Camera', description: 'Quick and easy photography', image: "https://m.media-amazon.com/images/I/61NP-i-TXqL._AC_UF894,1000_QL80_.jpg" },
    { id: 6, name: '360° Camera', description: 'Capture everything around you', image: "https://www.verifiedmarketresearch.com/wp-content/uploads/2024/08/8-best-security-camera-brands-keeping-places-safe-and-secure.jpg" },
    { id: 7, name: 'Professional Camera', description: 'DSLR with advanced features', image: "https://eavf3cou74b.exactdn.com/wp-content/uploads/2023/06/28102929/Best-Cameras-for-Professional-Photography-1.jpg?strip=all&lossy=1&ssl=1" },
    { id: 8, name: 'Instant Camera', description: 'Print your photos instantly', image: "https://wallpapers.com/images/hd/polaroid-camera-pictures-rcmt2s4ktwlne8oh.jpg" }
  ]
}

const categories = [
  { name: 'Laptop', icon: <LaptopIcon />, key: 'laptop' },
  { name: 'Smartphone', icon: <SmartphoneIcon />, key: 'smartphone' },
  { name: 'Watch', icon: <WatchIcon />, key: 'watch' },
  { name: 'Headphones', icon: <HeadphonesIcon />, key: 'headphones' },
  { name: 'Camera', icon: <CameraIcon />, key: 'camera' },
];

const UI = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [category, setCategory] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const theme = useTheme();

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" sx={{ backgroundColor: darkMode ? '#212121' : '#1976d2' }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
           Electronics Shopping App
          </Typography>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <WbSunnyIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: darkMode ? '#333' : '#fff',
            color: darkMode ? '#fff' : '#000',
            top: 64, // Fixed height of the AppBar
            height: 'calc(100% - 64px)',
            paddingTop: 2,
          },
        }}
      >
        <List sx={{ paddingTop: 2 }}>
          {categories.map((category) => (
            <ListItem button key={category.key} onClick={() => setCategory(category.key)}>
              <Box sx={{ marginRight: 2 }}>{category.icon}</Box>
              <ListItemText primary={category.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Container sx={{ pt: 4, pb: 6, backgroundColor: darkMode ? '#121212' : '#f0f2f5', minHeight: '100vh' }}>
        <Grid container spacing={4}>
          {category && productsData[category] ? (
            productsData[category].map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: darkMode ? '#333' : '#fff', boxShadow: 3, borderRadius: 2 }}>
                  <CardMedia component="img" height="200" image={product.image} alt={product.name} />
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: darkMode ? '#222' : '#f9f9f9' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'center', color: darkMode ? '#b0b0b0' : '#555' }}>
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h5" sx={{ gridColumn: 'span 12', textAlign: 'center' }}>
           
            </Typography>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default UI;
