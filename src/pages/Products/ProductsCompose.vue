<template>
    <div class="content">
        <form>
            <md-card>
                <md-card-header :data-background-color="dataBackgroundColor">
                    <h4 class="title">Create a product</h4>
                </md-card-header>

                <md-card-content>
                    <div>
                        <h4>Product details:</h4>
                        <div class="md-layout-item md-layout md-gutter">
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Nom</label>
                                    <md-input v-model="form.name"></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Nom Anglais</label>
                                    <md-input v-model="form.name_english"></md-input>
                                </md-field>
                                
                            </div>
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Categorie</label>
                                    <md-select v-model="form.categorie_id">
                                        <md-option v-for="(v, k) in categorieOpts" :value="v.id" :key="k">{{v.name}}</md-option>
                                    </md-select>
                                </md-field>
                            </div>
                            
                        </div>

                        <div class="md-layout-item md-layout md-gutter">
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Price</label>
                                    <md-input v-model="form.price"></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Size</label>
                                    <md-input v-model="form.size"></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item">
                                <md-field>
                                    <div>
                                        <div>
                                            <input type="file" @change="previewImage" accept="image/*" >
                                        </div>
                                        <div>
                                            <p>Progress: {{uploadValue.toFixed()+"%"}}
                                            <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
                                        </div>
                                    </div>
                                </md-field>
                            </div>
                        </div>
                    </div>

                    <div class="float-left">
                        <el-button type="success" v-if="!editMode" @click="handelAdd">Submit</el-button>
                        <el-button type="success" v-else @click="handelEdit">Update</el-button>
                    </div>
                      
                </md-card-content>
            </md-card>
        </form>
    </div>
</template>
<script>
import storage from 'firebase/storage';
import firebase from "firebase";
import izitoast from 'izitoast';
import { isEmpty } from '../../helpers/Common';

export default {
    name: "product-form",
    /*
    |--------------------------------------------------------------------------
    | Component > props
    |--------------------------------------------------------------------------
    */
    props: {
        dataBackgroundColor: {
        type: String,
        default: ""
        }
    },
    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            form: {
                name: '',
                categorie_id: '',
                price: '',
                image: '',
                name_english:'',
                size: ''
            },
            progressUpload: 0,
            file: File,
            imageData: null,
            picture: null,
            uploadValue: 0,
            categorieOpts:[],
            editMode: false

        };
    },
    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods:{
        handelAdd () {
            this.picture=null;
            const storageRef=firebase.storage().ref(`product-img/${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`,snapshot=>{
                this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            }, error=>{console.log(error.message)},
            ()=>{this.uploadValue=100;
                storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                    this.form.image = url;
                    axios.post('https://api.instantavite.com/api/products',this.form)
                    .then( (result) => {
                        console.log(result);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.form = {
                            name: '',
                            categorie_id: '',
                            price: '',
                            image: '',
                            name_english:'',
                            size: ''
                        }
                    })
                    .catch(function (error) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'Something get wrong',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    });
                });
            }
            );
        },
        previewImage(event) {
            this.uploadValue=0;
            this.picture=null;
            this.imageData = event.target.files[0];
        },

        onUpload(){
            this.picture=null;
            const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`,snapshot=>{
                this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            }, error=>{console.log(error.message)},
            ()=>{this.uploadValue=100;
                storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                    this.form.image = url;
                    console.log(url);
                });
            }
            );
        },
        getCategoriesList(){
            axios.get('https://api.instantavite.com/api/categories')
                .then( (result) => {
                    this.categorieOpts = result.data;
                    console.log(this.categorieOpts);
                });
        },
        getProduct(id) {
            let _this = this;
            axios.get(`https://api.instantavite.com/api/products/${id}`)
                .then( (result) => {
                    console.log(_this.form);
                    _this.form = result.data;
                    console.log(_this.form);
                });
        },
        handelEdit(){
            this.picture=null;
            const storageRef=firebase.storage().ref(`product-img/${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`,snapshot=>{
                this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            }, error=>{console.log(error.message)},
            ()=>{this.uploadValue=100;
                storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                    this.form.image = url;
                    axios.put(`https://api.instantavite.com/api/products/${this.form.id}`,this.form)
                    .then( (result) => {
                        console.log(result);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.form = {
                            name: '',
                            categorie_id: '',
                            price: '',
                            image: '',
                            name_english:'',
                            size: ''
                        }
                    })
                    .catch(function (error) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'Something get wrong',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    });
                });
            }
            );
        }
    },
    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {
        if(!isEmpty(this.$route.query.id)){
            this.editMode = true;
            this.getProduct(this.$route.query.id);
        }
        this.getCategoriesList();
    },
    
};
</script>
<style scoped="">
img.preview {
    width: 200px;
}
</style>