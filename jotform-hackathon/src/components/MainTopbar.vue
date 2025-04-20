<template>
  <div class="topbar">
    <div class="nav-links">
      <router-link to="/" class="topbar-link">Home</router-link>
      <router-link to="/shop" class="topbar-link">Shop</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainTopbar'
};
</script>

<style scoped>
.topbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.nav-links {
  display: flex;
  justify-content: center;
}

.topbar-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  margin-left: 20px;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.topbar-link:hover {
  background-color: #ff9800;
  color: white;
  transform: scale(1.05);
  text-decoration: none;
}

@media (max-width: 768px) {
  .topbar {
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
  }

  .topbar-item {
    margin: 10px 0;
    font-size: 16px;
  }
}
</style>
