import React from 'react';
import ProductCard from '../atoms/productCards';
import Carousel from '../atoms/carousel';

export const Card1 = () => {
    const products = [
        {
          image: 'https://s3-ap-southeast-1.amazonaws.com/tm-img-poster-event/48ac7ab1837b11e9911101117567899b.jpg',
          title: 'Men I Trust: Live In Bangkok',
          time: '18 October 2019',
        },
        {
          image: 'https://ssl.sme.co.jp/img/common/artist_image/70009000/70009854/images/202406061405220.jpg',
          title: 'Hitsujibungaku',
          time: '3 Nov 2017',
        },
        {
            image: 'https://i.discogs.com/pQrvmT2n-P6XiMXCkYIC0HTA_XVDc1-q4QPNy13iqa8/rs:fit/g:sm/q:90/h:515/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MjY2/Mjk4LTE2MjQ1ODc5/NjEtNTgzMS5qcGVn.jpeg',
            title: 'Satellite Lovers',
            time: '7 June 2025',
          },
        {
          image: 'https://s3-ap-southeast-1.amazonaws.com/tm-img-poster-event/95bb81513c2911e9911101117567899b.jpg?format=basic&resize=w425,h610',
          title: 'Alvvays',
          time: 'Tommorow',
        },
        {
          image: 'https://cdn2.penguin.com.au/covers/original/9781742751603.jpg',
          title: 'Bee Gees: Live from Cemetery',
          time: 'This Weekend',
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9m5VXnjVgeloIBPqO3TkMG4qOYHwOHb5img&s',
          title: 'Lady Vera Hale',
          time: 'This Weekend',
        },
        {
          image: 'https://media.posterlounge.com/img/products/740000/736535/736535_poster.jpg',
          title: 'Filmore Summer',
          time: 'This Weekend',
        },
        {
          image: 'https://mariodevan.com/wp-content/uploads/2022/09/cosplay-edition.jpeg?w=960',
          title: 'Cosplay',
          time: 'This Weekend',
        },
        {
          image: 'https://m.media-amazon.com/images/I/71U2xaIuDTL._AC_UF894,1000_QL80_.jpg',
          title: 'Laufey TVNUWOZ',
          time: 'This Weekend',
        },
        {
          image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18097b2d-4385-468b-a608-99617bdcaf82/df9ra4o-4d4be3a1-2311-4ac1-b891-5c9585b6e50e.png/v1/fill/w_894,h_894,q_70,strp/utada_hikaru_wild_life_cc__mini_review__by_kahelgrahf_df9ra4o-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjE2MCIsInBhdGgiOiJcL2ZcLzE4MDk3YjJkLTQzODUtNDY4Yi1hNjA4LTk5NjE3YmRjYWY4MlwvZGY5cmE0by00ZDRiZTNhMS0yMzExLTRhYzEtYjg5MS01Yzk1ODViNmU1MGUucG5nIiwid2lkdGgiOiI8PTIxNjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.N5WK9sbo14RrKaS6wcq6HbqueYAKM5TiZDptmIdj_V0',
          title: 'Utada Hikaru',
          time: 'This Weekend',
        },
      ];

      return (
        <div className="flex w-full justify-center items-center p-2">
          <Carousel itemsToShow={11}> 
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                time={product.time}
              />
            ))}
          </Carousel>
        </div>
      );
};
