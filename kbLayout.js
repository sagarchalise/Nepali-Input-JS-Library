/*
   kbLayout.js
   
   Copyright 2012 Sagar Chalise <chalisesagar@gmail.com>
   
   This program is free software; you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation; either version 2 of the License, or
   (at your option) any later version.
   
   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.
   
   You should have received a copy of the GNU General Public License
   along with this program; if not, write to the Free Software
   Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
   MA 02110-1301, USA.
   
   
*/

//Taken from nepali input plugin for firefox by Suvash Thapaliya
var nepLayout = {

	layout: "rom",

	nepRomChars: [
				"\u0020", 	// SPACE
				"\u0021",	// ! -> !
				"\u0953",	// " -> "
				"\u0023",	// # -> #
				"\u0024",	// $ -> $
				"\u0025",	// % -> %
				"\u0026",	// & -> &
				"\u0027",	// ' -> '
				"\u0028",	// ( -> (
				"\u0029",	// ) -> )
				"\u002A",	// * -> *
				"\u200C",	// + -> ‌ZWNJ
				"\u002C",	// , -> ,
				"\u002D",	// - -> -
				"\u0964",	// . -> ।
				"\u094D",	// / -> ्
				"\u0966",	// 0 -> ०
				"\u0967",	// 1 -> १
				"\u0968",	// 2 -> २
				"\u0969",	// 3 -> ३
				"\u096A",	// 4 -> ४
				"\u096B",	// 5 -> ५
				"\u096C",	// 6 -> ६
				"\u096D",	// 7 -> ७
				"\u096E",	// 8 -> ८
				"\u096F",	// 9 -> ९
				"\u003A",	// : -> :
				"\u003B",	// ; -> ;
				"\u0919",	// < -> ङ
				"\u200D",	// = -> ZWJ
				"\u0965",	// > -> ॥
				"\u003F",	// ? -> ?
				"\u0040",	// @ -> @
				"\u0906",	// A -> आ
				"\u092D",	// B -> भ
				"\u091A",	// C -> च
				"\u0927",	// D -> ध
				"\u0948",	// E -> ै
				"\u090A",	// F -> ऊ
				"\u0918",	// G -> घ
				"\u0905",	// H -> अ
				"\u0940",	// I -> ी
				"\u091D",	// J -> झ
				"\u0916",	// K -> ख
				"\u0933",	// L -> ळ
				"\u0902",	// M -> ं
				"\u0923",	// N -> ण
				"\u0913",	// O -> ओ
				"\u092B",	// P -> फ
				"\u0920",	// Q -> ठ
				"\u0943",	// R -> ृ
				"\u0936",	// S -> श
				"\u0925",	// T -> थ
				"\u0942",	// U -> ू
				"\u0901",	// V -> ँ
				"\u0914",	// W -> औ
				"\u0922",	// X -> ढ
				"\u091E",	// Y -> ञ
				"\u090B",	// Z -> ऋ
				"\u0907",	// [ -> इ
				"\u0950",	// \ -> ॐ
				"\u090F",	// ] -> ए
				"\u005E",	// ^ -> ^
				"\u0952",	// _ -> ॒
				"\u093D",	// ` -> ऽ
				"\u093E",	// a -> ा
				"\u092C",	// b -> ब
				"\u091B",	// c -> छ
				"\u0926",	// d -> द
				"\u0947",	// e -> े
				"\u0909",	// f -> उ
				"\u0917",	// g -> ग
				"\u0939",	// h -> ह
				"\u093F",	// i -> ि
				"\u091C",	// j -> ज
				"\u0915",	// k -> क
				"\u0932",	// l -> ल
				"\u092E",	// m -> म
				"\u0928",	// n -> न
				"\u094B",	// o -> ो
				"\u092A",	// p -> प
				"\u091F",	// q -> ट
				"\u0930",	// r -> र
				"\u0938",	// s -> स
				"\u0924",	// t -> त
				"\u0941",	// u -> ु
				"\u0935",	// v -> व
				"\u094C",	// w -> ौ
				"\u0921",	// x -> ड 
				"\u092F",	// y -> य 
				"\u0937",	// z -> ष
				"\u0908",	// { -> ई
				"\u0903",	// | -> ः
				"\u0910",	// } -> ऐ
				"\u093C"	// ~ -> ़
			],

	nepTradChar: [],

	convertKeyCode: function(keyCode, layout)
					{
						if ("rom" === layout){
							return this.nepRomChars[keyCode-32];
						}
					},
}
/*
// Return the unicode of the key passed ( else return the key itself )
function convertToRomanized(keyCode, array)
{
    return array[keyCode-32];
}
*/