<template>
  <div class="tab">
    <mu-drawer class="drawer" :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <div class="drawer-pic">
          <div class="title">豆瓣APP</div>
          <div class="description">豆瓣APP来了</div>
        </div>
        <mu-list-item title="电影">
          <mu-icon slot="left" value="movie" />
        </mu-list-item>
        <mu-list-item title="图书-敬请期待">
          <mu-icon slot="left" value="book" />
        </mu-list-item>
        <mu-list-item title="音乐-敬请期待">
          <mu-icon slot="left" value="music_note" />
        </mu-list-item>
        <mu-list-item title="关于">
          <mu-icon slot="left" value="info" />
        </mu-list-item>
      </mu-list>
    </mu-drawer>
    <!--<mu-paper :zDepth="2">-->
    <mu-appbar title='电影'>
      <mu-icon-button icon='menu' slot="left" @click="toggle(true)" />
      <mu-icon-button icon='search' slot='right' />
    </mu-appbar>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="in_theaters" title="正在热映" />
      <mu-tab value="coming_soon" title="即将上映" />
    </mu-tabs>
    <div v-if="activeTab === 'in_theaters'">
     <Card></Card>
    </div>
    <div v-if="activeTab === 'coming_soon'">
     <CardSoon></CardSoon>
    </div>
    <!--</mu-paper>-->
  </div>
</template>

<script>
import Card from '../movie/Card'
import CardSoon from '../movie/CardSoon'
  export default {
    data() {
      return {
        open: false,
        docked: true,
        activeTab: "in_theaters"
      }
    },
    methods: {
      toggle(flag) {
        this.open = !this.open
        this.docked = !flag
      },
      handleTabChange(val) {
        this.activeTab = val
      } 
    } ,
    components:{
        Card,
        CardSoon
    }
  } 

</script>
<style>
  .tab {
    width: 100%;
    height: 100%;
    margin-top: -60px;
  }
  .drawer{
    margin-top:-8px
  }

  .drawer-pic {
    background: #474a4f;
    padding: 70px 0;
    text-align: center;
    color: #fff
  }

  .title {
    font-size: 32px;
  }

  .description {
    font-size: 16px;
    color: #e0e0e0
  }

</style>
