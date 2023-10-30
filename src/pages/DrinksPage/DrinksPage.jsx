import { useEffect } from 'react';
import DrinksList from '../../components/DrinksSearch/DrinksList/DrinksList';
import DrinksSearch from '../../components/DrinksSearch/DrinksSearch';
import { DrinksContainer, Title } from './DrinksPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectIngredients,
} from '../../../redux/Drinks/drinksSelectors';
import {
  getDrinksCategoriesThunk,
  getDrinksIngredientsThunk,
} from '../../../redux/Drinks/drinksOperations';

/**
 * Для тестування
 */
// const ingredients = [
//   {
//     _id: {
//       $oid: '64aebb7f82d96cc69e0eb4b3',
//     },
//     title: 'Amaretto',
//     ingredientThumb:
//       'https://ftp.goit.study/img/drinkify/ingredients/Amaretto.png',
//     'thumb-medium':
//       'https://ftp.goit.study/img/drinkify/ingredients/Amaretto-Medium.png',
//     'thumb-small':
//       'https://ftp.goit.study/img/drinkify/ingredients/Amaretto-Small.png',
//     abv: '28',
//     alcohol: 'Yes',
//     description:
//       'Amaretto (Italian for "a little bitter") is a sweet, almond-flavoured, Italian liqueur associated with Saronno, Italy. Various commercial brands are made from a base of apricot pits, almonds, or both.\r\n\r\nWhen served as a beverage, amaretto can be drunk by itself, used as an ingredient to create several popular mixed drinks, or added to coffee. Amaretto is also commonly used in culinary applications.\r\n\r\nThe name amaretto originated as a diminutive of the Italian word amaro, meaning "bitter", which references the distinctive flavour lent by the mandorla amara (the bitter almond) or by the drupe kernel. However, the bitterness of amaretto tends to be mild, and sweeteners—and sometimes sweet almonds—enhance the flavour in the final products. Thus one can interpret the liqueur\'s name as a description of the taste as "a little bitter". Cyanide is processed out of the almond preparation prior to its use.\r\n\r\nConflation of amaro ("bitter") and amore ("love") has led to associations with romance.\r\n\r\nOne should not confuse amaretto with amaro, a different family of Italian liqueurs that, while also sweetened, have a stronger bitter flavour derived from herbs.',
//     type: 'Liqueur',
//     flavour: 'almond',
//     country: 'Italy',
//   },
//   {
//     _id: {
//       $oid: '64aebb7f82d96cc69e0eb4b4',
//     },
//     title: 'Tea',
//     ingredientThumb: 'https://ftp.goit.study/img/drinkify/ingredients/Tea.png',
//     'thumb-medium':
//       'https://ftp.goit.study/img/drinkify/ingredients/Tea-Medium.png',
//     'thumb-small':
//       'https://ftp.goit.study/img/drinkify/ingredients/Tea-Small.png',
//     abv: '0',
//     alcohol: 'No',
//     description:
//       "Tea is a popular aromatic beverage made by steeping the dried leaves of the Camellia sinensis plant in hot water. It's one of the most widely consumed beverages in the world, known for its diverse flavours and potential health benefits.",
//     type: 'Tea',
//     flavour: 'tea',
//     country: 'United States',
//   },
//   {
//     _id: {
//       $oid: '64aebb7f82d96cc69e0eb4b5',
//     },
//     title: 'Champagne',
//     ingredientThumb:
//       'https://ftp.goit.study/img/drinkify/ingredients/Champagne.png',
//     'thumb-medium':
//       'https://ftp.goit.study/img/drinkify/ingredients/Champagne-Medium.png',
//     'thumb-small':
//       'https://ftp.goit.study/img/drinkify/ingredients/Champagne-Small.png',
//     abv: '13',
//     alcohol: 'Yes',
//     description:
//       'Champagne (French: [ʃɑ̃.paɲ]) is a sparkling wine and type of alcoholic drink produced from grapes grown in the Champagne region of France following rules that demand, among other things, secondary fermentation of the wine in the bottle to create carbonation, specific vineyard practices, sourcing of grapes exclusively from specific parcels in the Champagne appellation and specific pressing regimes unique to the region.[1] It contains the drug alcohol (also known formally as ethanol), and is used recreationally. Some use the term Champagne as a generic term for sparkling wine, but in many countries, it is illegal to label any product Champagne unless it both comes from the Champagne region and is produced under the rules of the appellation.\r\n\r\nThe primary grapes used in the production of Champagne are black Pinot noir and Pinot Meunier but also white Chardonnay. Champagne appellation law only allows grapes grown according to appellation rules in specifically designated plots within the appellation to be used in the production of champagne.\r\n\r\nChampagne became associated with royalty in the 17th, 18th, and 19th centuries. The leading manufacturers made efforts to associate their Champagnes with nobility and royalty through advertising and packaging, which led to popularity among the emerging middle class.',
//     type: 'Wine',
//     flavour: 'grape',
//     country: 'France',
//   },
//   {
//     _id: {
//       $oid: '64aebb7f82d96cc69e0eb4b6',
//     },
//     title: 'Coffee liqueur',
//     ingredientThumb:
//       'https://ftp.goit.study/img/drinkify/ingredients/Coffee_liqueur.png',
//     'thumb-medium':
//       'https://ftp.goit.study/img/drinkify/ingredients/Coffee_liqueur-Medium.png',
//     'thumb-small':
//       'https://ftp.goit.study/img/drinkify/ingredients/Coffee_liqueur-Small.png',
//     abv: '20–40',
//     alcohol: 'Yes',
//     description:
//       'Medium to dark brown in color, coffee liqueurs have an alcohol content by volume (abv) ranging between 20 and 40. The two most popular brands of coffee liqueur are Kahlúa and Tia Maria. A homemade form can also be made by using any base spirit, simple syrup, and coffee beans. Coffee liqueurs are considered to be digestifs. They are commonly mixed with vodka to make a Black Russian or mixed with cream and ice as a White Russian.',
//     type: 'Liqueur',
//     flavour: 'coffee',
//     country: 'Mexico',
//   },
//   {
//     _id: {
//       $oid: '64aebb7f82d96cc69e0eb4b7',
//     },
//     title: 'Bourbon',
//     ingredientThumb:
//       'https://ftp.goit.study/img/drinkify/ingredients/Bourbon.png',
//     'thumb-medium':
//       'https://ftp.goit.study/img/drinkify/ingredients/Bourbon-Medium.png',
//     'thumb-small':
//       'https://ftp.goit.study/img/drinkify/ingredients/Bourbon-Small.png',
//     abv: '40',
//     alcohol: 'Yes',
//     description:
//       'Bourbon whiskey /bɜːrbən/ is a type of American whiskey: a barrel-aged distilled spirit made primarily from corn. The name is derived from the French Bourbon dynasty, although it is unclear precisely what inspired the whiskey\'s name (contenders include Bourbon County in Kentucky and Bourbon Street in New Orleans). Bourbon has been distilled since the 18th century. The use of the term "bourbon" for the whiskey has been traced to the 1820s, and the term began to be used consistently in Kentucky in the 1870s. While bourbon may be made anywhere in the United States, it is strongly associated with the American South, and with Kentucky in particular. As of 2014, the distillers\' wholesale market revenue for bourbon sold within the U.S. is about $2.7 billion, and bourbon makes up about two-thirds of the $1.6 billion of U.S. exports of distilled spirits.\r\n\r\nThe origin of bourbon is not well documented. There are many conflicting legends and claims, some more credible than others. For example, the invention of bourbon is often attributed to Elijah Craig, a Baptist minister and distiller credited with many Kentucky firsts (e.g., fulling mill, paper mill, ropewalk) who is also said to have been the first to age the product in charred oak casks, a process which gives bourbon its reddish color and distinctive taste. Across the county line in Bourbon County, an early distiller named Jacob Spears is credited with being the first to label his product as Bourbon whiskey. Spears\' home, Stone Castle, warehouse and spring house survive; one can drive by the Spears\' home on Clay-Kiser Road.\r\n\r\nAlthough still popular and often repeated, the Craig legend is apocryphal. Similarly, the Spears story is a local favorite, rarely repeated outside the county. There likely was no single "inventor" of bourbon, which developed into its present form only in the late 19th century. Essentially any type of grain can be used to make whiskey, and the practice of aging whiskey and charring the barrels for better flavour had also been known in Europe for centuries. The late date of the Bourbon County etymology has led Louisville historian Michael Veach to dispute its authenticity. He proposes that the whiskey was named after Bourbon Street in New Orleans, a major port where shipments of Kentucky whiskey sold well as a cheaper alternative to French cognac.\r\n\r\nDistilling probably was brought to present-day Kentucky in the late 18th century by Scots, Scots-Irish, and other settlers (including English, Irish, Welsh, German and French) who began to farm the area in earnest. The spirit they made evolved, and became known as bourbon in the early 19th century due to its historical association with the geographic area known as Old Bourbon (this consisted of the original Bourbon County of Virginia as organized in 1785, a region that included much of today\'s Eastern Kentucky – including 34 of today\'s counties in Kentucky). This area included the current Bourbon County of Kentucky, which became a county of Kentucky when Kentucky was separated from Virginia as a new state in 1792.\r\n\r\nWhen American pioneers pushed west of the Allegheny Mountains following the American Revolution, the first counties they founded covered vast regions. One of these original, huge counties was Bourbon, established in 1785 and named after the French royal family. While this vast county was being carved into many smaller ones, early in the 19th century, many people continued to call the region Old Bourbon. Located within Old Bourbon was the principal port on the Ohio River, Maysville, Kentucky, from which whiskey and other products were shipped. "Old Bourbon" was stencilled on the barrels to indicate their port of origin. Old Bourbon whiskey was different because it was the first corn whiskey most people had ever tasted. In time, bourbon became the name for any corn-based whiskey.\r\n\r\nAlthough many distilleries operated in Bourbon County historically, there were no distilleries operating there between 1919, when Prohibition began in Kentucky, and late 2014, when a small distillery opened – a period of 95 years.\r\n\r\nA refinement often dubiously credited to James C. Crow was the sour mash process, by which each new fermentation is conditioned with some amount of spent mash. Spent mash is also known as spent beer, distillers\' spent grain, stillage, and slop or feed mash, so named because it is used as animal feed. The acid introduced by using the sour mash controls the growth of bacteria that could taint the whiskey and creates a proper pH balance for the yeast to work.\r\n\r\nA concurrent resolution adopted by the United States Congress in 1964 declared bourbon to be a "distinctive product of the United States" and asked "the appropriate agencies of the United States Government... [to] take appropriate action to prohibit importation into the United States of whiskey designated as \'Bourbon Whiskey.\'" Federal regulation now defines "bourbon whiskey" to only include "bourbon" produced in the United States.\r\n\r\nIn recent years, bourbon and Tennessee whiskey (which is sometimes regarded as a different type of spirit but which generally meets the legal requirements for being called bourbon) have enjoyed significant growth and popularity. The Distilled Spirits Council of the United States, the industry trade group, tracks sales of bourbon and Tennessee whiskey together.\r\n\r\nAccording to the Distilled Spirits Council, during 2009–14, the volume of 9-liter cases of whiskey increased by 28.5 overall. Higher-end bourbon and whiskeys experienced the greatest growth: during 2009–14 the volume of the value segment increased by 12.1, premium by 25.8, high-end premium by 27.8 and super-premium by 123.8. Gross supplier revenues (including federal excise tax) for U.S. bourbon and Tennessee whiskey increased by 46.7 over the 2009–14 period, with the greatest growth coming from high-end products (18.7 growth for value, 33.6 for premium, 44.5 for high-end premium, and 137.2 for super-premium).[4] In 2014, more than 19 million nine-liter cases of bourbon and Tennessee whiskey were sold in the U.S., generating almost $2.7 billion in wholesale distillery revenue. U.S. exports of bourbon whiskey surpassed $1 billion for the first time in 2013; distillers hailed the rise of a "golden age of Kentucky bourbon" and predicted further growth. In 2014, it was estimated that U.S. bourbon whiskey exports surpassed $1 billion (making up the majority of the U.S. total of $1.6 billion in spirits exports). Major export markets for U.S. spirits are, in descending order: Canada, the United Kingdom, Germany, Australia and France. The largest percentage increases in U.S. exports were, in descending order: Brazil, the Dominican Republic, Bahamas, Israel and United Arab Emirates. Key elements of growth in the markets showing the largest increases have been changes of law, trade agreements, and reductions of tariffs, as well as increased consumer demand for premium-category spirits.',
//     type: 'Whiskey',
//     flavour: 'grain',
//     country: 'United States',
//   },
//   {
//     _id: {
//       $oid: '64aebb7f82d96cc69e0eb4b8',
//     },
//     title: 'Tequila',
//     ingredientThumb:
//       'https://ftp.goit.study/img/drinkify/ingredients/Tequila.png',
//     'thumb-medium':
//       'https://ftp.goit.study/img/drinkify/ingredients/Tequila-Medium.png',
//     'thumb-small':
//       'https://ftp.goit.study/img/drinkify/ingredients/Tequila-Small.png',
//     abv: '40',
//     alcohol: 'Yes',
//     description:
//       'Tequila (Spanish pronunciation: [teˈkila] (About this sound listen)) is a regionally specific distilled beverage and type of alcoholic drink made from the blue agave plant, primarily in the area surrounding the city of Tequila, 65 km (40 mi) northwest of Guadalajara, and in the highlands (Los Altos) of the central western Mexican state of Jalisco. Aside from differences in region of origin, tequila is a type of mezcal (and the regions of production of the two drinks are overlapping). The distinction in the method of production is that tequila must use only blue agave plants rather than any type of agave. Tequila is commonly served neat in Mexico and as a shot with salt and lime across the rest of the world.\r\n\r\nThe red volcanic soil in the region around the city of Tequila is particularly well suited to the growing of the blue agave, and more than 300 million of the plants are harvested there each year. Agave grows differently depending on the region. Blue agaves grown in the highlands Los Altos region are larger in size and sweeter in aroma and taste. Agaves harvested in the lowlands, on the other hand, have a more herbaceous fragrance and flavour.\r\n\r\nMexican laws state that tequila can only be produced in the state of Jalisco and limited municipalities in the states of Guanajuato, Michoacán, Nayarit, and Tamaulipas. Tequila is recognized as a Mexican designation of origin product in more than 40 countries. It is protected through NAFTA in Canada and the United States,[6] through bilateral agreements with individual countries such as Japan and Israel, and has been a protected designation of origin product in the constituent countries of the European Union since 1997.\r\n\r\nTequila contains alcohol (also known formally as ethanol) and is most often made at a 38 alcohol content (76 U.S. proof) for domestic consumption, but can be produced between 31 and 55 alcohol content (62 and 110 U.S. proof). Per U.S law, tequila must contain at least 40 alcohol (80 U.S. proof) to be sold in the United States.',
//     type: 'Spirit',
//     flavour: 'agave',
//     country: 'Mexico',
//   },
//   {
//     _id: {
//       $oid: '64aebb7f82d96cc69e0eb4b9',
//     },
//     title: 'Vodka',
//     ingredientThumb:
//       'https://ftp.goit.study/img/drinkify/ingredients/Vodka.png',
//     'thumb-medium':
//       'https://ftp.goit.study/img/drinkify/ingredients/Vodka-Medium.png',
//     'thumb-small':
//       'https://ftp.goit.study/img/drinkify/ingredients/Vodka-Small.png',
//     abv: '40',
//     alcohol: 'Yes',
//     description:
//       'Vodka is a distilled beverage composed primarily of water and ethanol, sometimes with traces of impurities and flavourings. Traditionally, vodka is made by the distillation of fermented cereal grains or potatoes, though some modern brands use other substances, such as fruits or sugar.\r\n\r\nSince the 1890s, the standard Polish, Russian, Belarusian, Ukrainian, Estonian, Latvian, Lithuanian and Czech vodkas are 40 alcohol by volume abv (80 US proof), a percentage that is widely misattributed to Dmitri Mendeleev. The European Union has established a minimum of 37.5 abv for any "European vodka" to be named as such. Products sold as "vodka" in the United States must have a minimum alcohol content of 40. Even with these loose restrictions, most vodka sold contains 40 abv. For homemade vodkas and distilled beverages referred to as "moonshine", see moonshine by country.\r\n\r\nVodka is traditionally drunk neat (not mixed with any water, ice, or other mixer), though it is often served chilled in the vodka belt countries (Belarus, Estonia, Finland, Iceland, Latvia, Lithuania, Norway, Poland, Russia, Sweden, Ukraine). It is also commonly used in cocktails and mixed drinks, such as the vodka martini, Cosmopolitan, vodka tonic, Screwdriver, Greyhound, Black or White Russian, Moscow Mule, and Bloody Mary.\r\n\r\nScholars debate the beginnings of vodka. It is a contentious issue because very little historical material is available. For many centuries, beverages differed significantly compared to the vodka of today, as the spirit at that time had a different flavour, color and smell, and was originally used as medicine. It contained little alcohol, an estimated maximum of about 14, as only this amount can be attained by natural fermentation. The still, allowing for distillation ("burning of wine"), increased purity, and increased alcohol content, was invented in the 8th century.\r\n\r\nA common property of the vodkas produced in the United States and Europe is the extensive use of filtration prior to any additional processing including the addition of flavourants. Filtering is sometimes done in the still during distillation, as well as afterwards, where the distilled vodka is filtered through activated charcoal and other media to absorb trace amounts of substances that alter or impart off-flavours to the vodka. However, this is not the case in the traditional vodka-producing nations, so many distillers from these countries prefer to use very accurate distillation but minimal filtering, thus preserving the unique flavours and characteristics of their products.\r\n\r\nThe master distiller is in charge of distilling the vodka and directing its filtration, which includes the removal of the "fore-shots", "heads" and "tails". These components of the distillate contain flavour compounds such as ethyl acetate and ethyl lactate (heads) as well as the fusel oils (tails) that impact the usually desired clean taste of vodka. Through numerous rounds of distillation, or the use of a fractioning still, the taste is modified and clarity is increased. In contrast, distillery process for liquors such as whiskey, rum, and baijiu allow portions of the "heads" and "tails" to remain, giving them their unique flavours.\r\n\r\nRepeated distillation of vodka will make its ethanol level much higher than is acceptable to most end users, whether legislation determines strength limits or not. Depending on the distillation method and the technique of the stillmaster, the final filtered and distilled vodka may have as much as 95–96 ethanol. As such, most vodka is diluted with water prior to bottling.\r\n\r\nPolish distilleries make a very pure (96, 192 proof, formerly also 98) rectified spirit (Polish language: spirytus rektyfikowany). Technically a form of vodka, it is sold in liquor stores rather than pharmacies. Similarly, the German market often carries German, Hungarian, Polish, and Ukrainian-made varieties of vodka of 90 to 95 abv. A Bulgarian vodka, Balkan 176°, has an 88 alcohol content. Everclear, an American brand, is also sold at 95 abv.',
//     type: 'Vodka',
//     flavour: 'grain',
//     country: 'Poland',
//   },
//   {
//     _id: {
//       $oid: '64aebb7f82d96cc69e0eb4ba',
//     },
//     title: 'Añejo rum',
//     ingredientThumb:
//       'https://ftp.goit.study/img/drinkify/ingredients/999e266e564a87a4eaae41be282f7ebc.png',
//     'thumb-medium':
//       'https://ftp.goit.study/img/drinkify/ingredients/33d15879c9bed5cc275c471afd387915.png',
//     'thumb-small':
//       'https://ftp.goit.study/img/drinkify/ingredients/33d15879c9bed5cc275c471afd387915.png',
//     abv: '38',
//     alcohol: 'Yes',
//     description:
//       'Rum is a distilled alcoholic beverage made from sugarcane byproducts, such as molasses, or directly from sugarcane juice, by a process of fermentation and distillation. The distillate, a clear liquid, is then usually aged in oak barrels.\r\n\r\nThe majority of the world\'s rum production occurs in the Caribbean and Latin America. Rum is also produced in Scotland, Austria, Spain, Australia, New Zealand, Fiji, the Philippines, Reunion Island, Mauritius, South Africa, Taiwan, Thailand, Japan, the United States, and Canada.\r\n\r\nRums are produced in various grades. Light rums are commonly used in cocktails, whereas "golden" and "dark" rums were typically consumed straight or neat, on the rocks, or used for cooking, but are now commonly consumed with mixers. Premium rums are also available, made to be consumed either straight or iced.\r\n\r\nRum plays a part in the culture of most islands of the West Indies as well as in The Maritimes and Newfoundland. This beverage has famous associations with the Royal Navy (where it was mixed with water or beer to make grog) and piracy (where it was consumed as bumbo). Rum has also served as a popular medium of economic exchange, used to help fund enterprises such as slavery (see Triangular trade), organized crime, and military insurgencies (e.g., the American Revolution and Australia\'s Rum Rebellion).',
//     type: 'Rum',
//     flavour: 'sugar',
//     country: 'Cuba',
//   },
//   {
//     _id: {
//       $oid: '64aebb7f82d96cc69e0eb4bb',
//     },
//     title: 'Bitters',
//     ingredientThumb:
//       'https://ftp.goit.study/img/drinkify/ingredients/Bitters.png',
//     'thumb-medium':
//       'https://ftp.goit.study/img/drinkify/ingredients/Bitters-Medium.png',
//     'thumb-small':
//       'https://ftp.goit.study/img/drinkify/ingredients/Bitters-Small.png',
//     abv: '44.7',
//     alcohol: 'No',
//     description:
//       'A bitters is traditionally an alcoholic preparation flavoured with botanical matter so that the end result is characterized by a bitter, sour, or bittersweet flavour. Numerous longstanding brands of bitters were originally developed as patent medicines, but now are sold as digestifs, sometimes with herbal properties, and cocktail flavourings.\r\n\r\nBitters commonly have an alcoholic strength of 45 abv and normally consumed only in small amounts as a digestif or when added as a flavouring agent. Many bitters contain no alcohol at all, as they are used for their medicinal properties. The botanical ingredients used in preparing bitters have historically consisted of aromatic herbs, bark, roots, and/or fruit for their flavour and medicinal properties. Some of the more common ingredients are cascarilla, cassia, gentian, orange peel, and cinchona bark.\r\n\r\nMost bitters contain both water and alcohol, the latter of which functions as a solvent for botanical extracts as well as a preservative. The alcoholic strength of bitters varies widely across different brands and styles. The earliest origins of bitters can be traced back as far as Ancient Egypt, where they were made by steeping medicinal herbs and spices in alcohol. As Egypt was conquered and subsequently inhabited by various Mediterranean cultures, the medicinal compounds and beverages prepared with them were introduced to new civilizations in the region. The Greek physician Diagoras of Rhodes (c. 400 BC) is thought to have been the first to produce a bitters medicinal wine in Greece, but the practice only became widespread when the beverage was brought to Rome by a group of Greek monks known as the Pharmacopolae.',
//     type: 'Bitters',
//     flavour: 'Greek',
//     country: 'Christus',
//   },
// ];

// const categories = [
//   'Ordinary Drink',
//   'Cocktail',
//   'Shake',
//   'Other/Unknown',
//   'Cocoa',
//   'Shot',
//   'Coffee/Tea',
//   'Homemade Liqueur',
//   'Punch/Party Drink',
//   'Beer',
//   'Soft Drink',
// ];

const DrinksPage = () => {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);

  useEffect(() => {
    if (categories) return;
    dispatch(getDrinksCategoriesThunk());
  }, [categories, dispatch]);

  useEffect(() => {
    if (ingredients) return;
    dispatch(getDrinksIngredientsThunk());
  }, [dispatch, ingredients]);

  return (
    <DrinksContainer>
      <Title>DrinksPage</Title>
      <DrinksSearch categories={categories} ingredients={ingredients} />
      <DrinksList />
    </DrinksContainer>
  );
};

export default DrinksPage;
