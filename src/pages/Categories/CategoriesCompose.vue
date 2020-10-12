<template>
    <div class="content">
        <form>
            <md-card>
                <md-card-header :data-background-color="dataBackgroundColor">
                    <h4 class="title">Create a categorie</h4>
                </md-card-header>

                <md-card-content>
                    <div>
                        <h4>Categorie details:</h4>
                        <div class="md-layout-item md-layout md-gutter">
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Nom</label>
                                    <md-input v-model="form.name"></md-input>
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
                        <el-button type="success" @click="handelAdd">Submit</el-button>
                    </div>
                      
                </md-card-content>
            </md-card>
        </form>
    </div>
</template>
<script>
import storage from 'firebase/storage';
import firebase from "firebase";
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
            super_market_id: 1,
            image: ''
        },
        progressUpload: 0,
        file: File,
        imageData: null,
        picture: null,
        uploadValue: 0

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
            const storageRef=firebase.storage().ref(`categories/${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`,snapshot=>{
                this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            }, error=>{},
            ()=>{this.uploadValue=100;
                storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                    this.form.image = url;
                    axios.post('https://api.instantavite.com/api/categories',this.form)
                    .then( (result) => {
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
            }, error=>{},
            ()=>{this.uploadValue=100;
                storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                    this.form.image = url;
                });
            }
            );
        }
    }
};
</script>
<style scoped="">
img.preview {
    width: 200px;
}
</style>