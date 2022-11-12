<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo-container">
        <figure>
          <img
            src="../../assets/logo.jpg"
            alt="image de voiture pour le connexion"
          />
        </figure>
        <h1>INVEST</h1>
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item
          @click="$emit('on-change-component', menu.item)"
          v-for="menu in menu"
          :key="menu.key"
        >
          <component :is="$antIcons[menu.icon]" twoToneColor="#08c" />
          <span>{{ menu.item }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div class="sidebar-title">
          <h1>Bienvenue !!!</h1>
          <p>Une application D'investissement en ligne</p>
        </div>

        <div class="header-container">
          <a-avatar
            shape="circle"
            :size="40"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />

          <h5>Marion menye</h5>
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import img from "../../assets/logo.jpg";
const menu = [
  {
    key: 1,
    item: "Accueil",
    icon: "HomeOutlined",
  },
  {
    key: 2,
    item: "Voiture",
    icon: "CarOutlined",
  },
  {
    key: 3,
    item: "Vente",
    icon: "ShoppingCartOutlined",
  },
  {
    key: 4,
    item: "Users",
    icon: "UsergroupAddOutlined",
  },
  {
    key: 5,
    item: "Deconnexion",
    icon: "LogoutOutlined",
  },
];
export default {
  name: "sidebarVue",
  data() {
    return {
      collapsed: true,
      menu,
      img,
    };
  },
};
</script>
<style lang="scss">
.ant-layout-content {
  border-radius: 10px;
}
.ant-layout-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
#components-layout-demo-custom-trigger {
  height: 100vh;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
figure {
  width: 50px;
  height: 50px;
  margin: 0;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.header-container {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 5px;
  height: 100%;
  margin-right: 20px;
}
.sidebar-title {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 50px;
  align-items: self-start;
}
.sidebar-title h1,
.sidebar-title p {
  height: 12px;
  margin: 0;
}
.sidebar-title h1 {
  font-weight: bold;
  font-size: 20px;
}
.logo-container {
  display: flex;
  gap: 30px;
  padding: 21px;
  align-items: center;
  h1 {
    color: #a33100;
    margin: 0;
    font-size: 20px;
    font-weight: bold;
  }
}
.ant-layout-sider-children {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
