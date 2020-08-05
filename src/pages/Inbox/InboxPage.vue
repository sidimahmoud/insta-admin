<template>
  <div class="container clearfix">
    <div class="people-list" id="people-list">
      <div class="search">
        <input type="text" placeholder="search" />
        <i class="fa fa-search"></i>
      </div>
      <ul class="list">
        <li class="clearfix" v-for="room in rooms" v-bind:key="room.id" @click="changeUser(room)">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
          <div class="about">
            <div class="name" style="color:#fff">{{room.name}}</div>
            <div class="status">
              {{room.mobile}}
            </div>
          </div>
        </li>
      </ul>
    </div>
    
    <div class="chat">
      <div class="chat-header clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />
        
        <div class="chat-about">
          <div class="chat-with">{{user.name}}</div>
          <div class="chat-num-messages">{{user.email}}</div>
        </div>
        <i class="fa fa-star"></i>
      </div> <!-- end chat-header -->
      
      <div class="chat-history">
        <ul>
          <li class="clearfix" v-for="c in chat" v-bind:key="c.id">
            <div class="clearfix" v-if="!c.from_Admin">
                <div class="message-data align-right">
                    <span class="message-data-time" >{{c.created_at}}</span> &nbsp; &nbsp;
                </div>
                <div class="message other-message float-right">
                    {{c.message}}
                </div>
            </div>
            <div v-else>
                <div class="message-data">
                    <span class="message-data-time">{{c.created_at}}</span>
                </div>
                <div class="message my-message">
                    {{c.message}}
                </div>
            </div>
          </li>

          
        </ul>
        
      </div> <!-- end chat-history -->
      
      <div class="chat-message clearfix">
        <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3" v-model="message"></textarea>
                
        <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
        <i class="fa fa-file-image-o"></i>
        
        <button @click="sendInbox">Send</button>

      </div> <!-- end chat-message -->
      
    </div> <!-- end chat -->
    
  </div> <!-- end container -->
</template>

<script>
//import {CategoriesTable } from "@/components";

export default {
    /*
    |--------------------------------------------------------------------------
    | Component > components
    |--------------------------------------------------------------------------
    */
    components: {
    },
    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            rooms:[],
            chat:[],
            user:{
                id:'',
                name:'',
                email:''
            },
            message:''
        };
    },
    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        getRooms(){
            axios.get('https://api.instantavite.com/api/rooms')
            .then( (result) => {
                this.rooms = result.data;
            });
        },
        changeUser(room){
            this.user.id = room.id
            this.user.name = room.name
            this.user.email = room.email
            this.getChat(room.id);
        },
        getChat(id){
            axios.get(`https://api.instantavite.com/api/inboxes?filter[user_id]=${id}`)
            .then( (result) => {
                this.chat = result.data;
            });
        },
        sendInbox(){
            let payload = {
                message: this.message,
                user_id: this.user.id,
                from_Admin: true
            }
            axios({
                method: 'post',
                url: 'https://api.instantavite.com/api/inboxes',
                data: payload
            })
            .then((response) => {
                setTimeout(() => {
                    this.getChat(this.user.id)
                    this.message = ''
                },1000)
               
                return response;
            });
        }
    },
    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {
      this.getRooms();
    },
    
};
</script>