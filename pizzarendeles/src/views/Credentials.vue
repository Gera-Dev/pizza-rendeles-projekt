<script>
export default {
  data(){
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
      aszf: false,
      error: null,
    }
  },
  watch: {
    name(value){
      this.name = value;
      this.validateName(value);
    },
    email(value){
      this.email = value;
      this.validateEmail(value);
    },
    phone(value){
      this.phone = value;
      this.validatePhone(value);
    },
    address(value){
      this.password = value;
      this.validateAddress(value);
    },
    aszf(value){
      this.aszf = value;
      this.validateAszf(value);
    }
  },
  methods:{
    validateName(value){
        if (/[A-ZÁÉ][a-záé]+( [A-ZÁÉ][a-záé]+)+/.test(value))
        {
            this.error = null;
        } else{
            this.error = 'Kérjük adjon meg egy valódi nevet!';
        }
    },
    validateEmail(value){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
        {
            this.error = null;
        } else{
            this.error = 'Helytelen e-mail cím!';
        } 
    },
    validatePhone(value){
        if (/^(\+36|06)(20|30|70){1}(\d{7})$/.test(value))
        {
            this.error = null;
        } else{
            this.error = 'Helytelen telefonszám!';
        }
    },
    validateAddress(value){
         if (/^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]{2,30}$/.test(value))
         {
              this.error = null;
         } else {
              this.error = 'Kérjük adjon meg egy valódi címet!';
        }
    },
    validateAszf(value){
        if (value)
        {
            this.error = null;
        } else{
            this.error = 'Kérjük fogadja el az ÁSZF-et!';
        }
    },
    submitForm(){
        if (this.name == '' || this.email == '' || this.phone == '' || this.address == '' || this.aszf == false)
        {
            this.error = 'Kérjük töltse ki az összes mezőt!';
        } else {
            if (this.error == null)
            {
                this.$router.push({ name: 'Finish Order' });
            }
        }
    }
  }
};
</script>


<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center align-content-center">
                <h1 class="p-3">A rendelés folytatásához adja meg az adatait!</h1>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-8 mx-auto">
                <!-- Add error alert -->
                <div class="alert alert-danger" v-if="error">
                    {{ error }}
                </div>
                <form>
                    <div class="form-group">
                        <label for="name">Név</label>
                        <input type="text" class="form-control" id="name" v-model="name" placeholder="Név">
                    </div>

                    <div class="form-group">
                        <label for="name">E-mail</label>
                        <input type="text" class="form-control" id="email" v-model="email" placeholder="E-mail cím">
                    </div>

                    <div class="form-group">
                        <label for="name">Telefonszám</label>
                        <input type="text" class="form-control" id="phone" v-model="phone" placeholder="Telefonszám">
                    </div>

                    <div class="form-group">
                        <label for="name">Szállítási cím</label>
                        <input type="text" class="form-control" id="address" v-model="address" placeholder="Szállítási cím">
                    </div>

                    <div class="form-group mt-2">
                        <div class="input-group-text">
                            <input class="form-check-input" type="checkbox" value="" v-model="aszf" id="aszf" aria-label="ÁSZF checkbox">
                            <label for="aszf" class="m-2">Elfogadom az ÁSZF-t</label>
                        </div>
                    </div>
                </form>
                <button class="btn btn-outline-success mt-3" v-if="$store.state.cart.length > 0" v-on:click="submitForm">Rendelés leadása</button>
            </div>

        </div>
    </div>
</template>

<style scoped>
.card-img-top {
    height: 20vh;
    width: auto;
    margin: auto;
}
</style>
