!function(e){var n={};function o(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)o.d(r,t,function(n){return e[n]}.bind(null,t));return r},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n){window.onload=async()=>{if(window.getOfflineSigner&&window.keplr)if(window.keplr.experimentalSuggestChain)try{await window.keplr.experimentalSuggestChain({chainId:"crypto-org-chain-mainnet-1",chainName:"Crypto.org Chain",rpc:"https://mainnet.crypto.org:26657",rest:"https://mainnet.crypto.org:1317",stakeCurrency:{coinDenom:"CRO",coinMinimalDenom:"basecro",coinDecimals:8,coinGeckoId:"crypto-com-chain"},bip44:{coinType:394},bech32Config:{bech32PrefixAccAddr:"cro",bech32PrefixAccPub:"cropub",bech32PrefixValAddr:"crocncl",bech32PrefixValPub:"crocnclpub",bech32PrefixConsAddr:"crocnclcons",bech32PrefixConsPub:"crocnclconspub"},currencies:[{coinDenom:"CRO",coinMinimalDenom:"basecro",coinDecimals:8,coinGeckoId:"crypto-com-chain"}],feeCurrencies:[{coinDenom:"CRO",coinMinimalDenom:"basecro",coinDecimals:8,coinGeckoId:"crypto-com-chain"}],gasPriceStep:{low:.025,average:.03,high:.04},features:["stargate"]})}catch{alert("Failed to suggest the chain")}else alert("Please use the recent version of keplr extension");else alert("Please install keplr extension");const e="crypto-org-chain-mainnet-1";await window.keplr.enable(e);const n=window.getOfflineSigner(e),o=await n.getAccounts();document.getElementById("address").textContent=o[0].address}}]);