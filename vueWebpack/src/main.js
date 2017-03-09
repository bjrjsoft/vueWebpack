import Vue from 'vue'

import layertree from './layerTree.vue'
import searchToolBar from './searchToolBar.vue'

import qsyh_content from './qsyh_content.vue'
import lz_content from './lz_content.vue'
import sl_content from './sl_content.vue'
import sz_content from './sz_content.vue'
import gq_content from './gq_content.vue'
import gk_content from './gk_content.vue'

//------------------------------工况
import gkMod_tjMod from './gkMod_tjMod.vue'

//------------------------------工情
import gqMod_tjMod from './gqMod_tjMod.vue'


//-------------------------------一张图
  //----监视模块
import szMod_jsModule from './szMod/szMod_jsContent.vue'
import slMod_jsModule from './slMod/slMod_jsContent.vue'
import gkMod_jsModule from './gkMod/gkMod_jsContent.vue'
import gqMod_jsModule from './gqMod/gqMod_jsContent.vue'
import lzMod_jsModule from './lzMod/lzMod_jsContent.vue'
  //----监视模块完
  //----统计模块
import szMod_tjModule from './szMod/szMod_tjContent.vue'
import slMod_tjModule from './slMod/slMod_tjContent.vue'

/* eslint-disable no-new */
//  var x = new Vue({
//   el: '#headvuetest',
//   template:'<div class="col-md-2"><layertree :layers="layers"></layertree></div>',
//   components: { 'layertree':layertree },
//   methods:{test:function(parentMsg){alert(parentMsg)}},
//   data:{
//   	layers : parentMsg
//   }

// })
// x.test(parentMsg);
// x.test(x.layers);
// window.x = x;

window.vCompoment = new Object();
window.vCompoment.layertree = layertree;
window.vCompoment.searchToolBar = searchToolBar;



window.vCompoment.sl_content = sl_content;
window.vCompoment.qsyh_content = qsyh_content;
window.vCompoment.lz_content = lz_content;
window.vCompoment.gq_content = gq_content;
window.vCompoment.gk_content= gk_content;
window.vCompoment.sz_content= sz_content;

//---------------------
window.vCompoment.szMod_jsModule = szMod_jsModule;
window.vCompoment.slMod_jsModule = slMod_jsModule;
window.vCompoment.gkMod_jsModule = gkMod_jsModule;
window.vCompoment.gqMod_jsModule = gqMod_jsModule;
window.vCompoment.lzMod_jsModule = lzMod_jsModule;
window.vCompoment.szMod_tjModule = szMod_tjModule;
window.vCompoment.slMod_tjModule = slMod_tjModule;
window.vCompoment.gkMod_tjMod    = gkMod_tjMod;
window.vCompoment.gqMod_tjMod    = gqMod_tjMod;
