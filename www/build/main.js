webpackJsonp([10],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentsPage = /** @class */ (function () {
    function CommentsPage(navCtrl, navParams, viewCtrl, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.post = {};
        this.comments = [];
        this.post = this.navParams.get("post");
        console.log(this.post);
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("comments")
            .where("post", "==", this.post.id)
            .get()
            .then(function (data) {
            _this.comments = data.docs;
        }).catch(function (err) {
            console.log(err);
        });
    }
    CommentsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    CommentsPage.prototype.ago = function (time) {
        var difference = __WEBPACK_IMPORTED_MODULE_3_moment___default()(time).diff(__WEBPACK_IMPORTED_MODULE_3_moment___default()());
        return __WEBPACK_IMPORTED_MODULE_3_moment___default.a.duration(difference).humanize();
    };
    CommentsPage.prototype.editComment = function (comment) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Edit Comment',
            inputs: [{ name: 'comment', value: comment.data().text }],
            buttons: [{ text: 'Cancel' },
                { text: 'Save',
                    handler: function (data) {
                        if (data.comment) {
                            console.log(comment);
                            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().doc('comments/' + comment.id).update({
                                text: data.comment,
                            })
                                .then(function (doc) {
                                _this.toastCtrl.create({
                                    message: "Comment updated successfully.",
                                    duration: 3000
                                }).present();
                            }).catch(function (err) {
                                _this.toastCtrl.create({
                                    message: err.message,
                                    duration: 3000
                                }).present();
                            });
                        }
                    } }]
        });
        prompt.present();
    };
    CommentsPage.prototype.deleteComment = function (comment) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().doc('comments/' + comment.id).delete().then(function (doc) {
            _this.toastCtrl.create({
                message: "Comment deleted successfully.",
                duration: 3000
            }).present();
        }).catch(function (err) {
            _this.toastCtrl.create({
                message: err.message,
                duration: 3000
            }).present();
        });
    };
    CommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comments',template:/*ion-inline-start:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/comments/comments.html"*/'<ion-header>\n  <ion-navbar color = "danger">\n    <ion-title>\n      <small> {{ comments.length }} people have commented</small>\n    </ion-title>\n      <button ion-button icon-only clear (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>   \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let comment of comments" >\n     \n  <ion-item> \n    <ion-icon item-left name="ios-chatbubbles-outline"></ion-icon>\n\n        <small>{{ comment.data().text }}\n        </small>\n        <small>\n          {{ comment.data().owner_name }} <i> {{ ago(comment.data().created.toDate()) }} ago</i>\n        </small>\n </ion-item>\n      \n      <ion-item-options>\n        <button ion-button icon-only (click)="editComment(comment)" light>\n          <ion-icon name="paper"></ion-icon>\n        </button>\n        <button ion-button icon-only (click)="deleteComment(comment)" light>\n          <ion-icon name="trash"></ion-icon></button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/comments/comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], CommentsPage);
    return CommentsPage;
}());

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera_ngx__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__comments_comments__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { runInThisContext } from 'vm';


var ForumPage = /** @class */ (function () {
    function ForumPage(navCtrl, navParams, loadingCtrl, toastCtrl, camera, http, actionSheetCtrl, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.text = "";
        this.posts = [];
        this.pageSize = 10;
    }
    ForumPage.prototype.getPosts = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Loading ..."
        });
        loading.present();
        var query = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("posts").orderBy("created", "desc")
            .limit(this.pageSize);
        query.onSnapshot(function (snapshot) {
            var changedDocs = snapshot.docChanges();
            changedDocs.forEach(function (change) {
                if (change.type == "added") {
                }
                if (change.type == "modified") {
                    for (var i = 0; i < _this.posts.length; i++) {
                        if (_this.posts[i].id == change.doc.id) {
                            _this.posts[i] = change.doc;
                        }
                    }
                }
                if (change.type == "removed") {
                }
            });
        });
        query.get()
            .then(function (docs) {
            docs.forEach(function (doc) {
                _this.posts.push(doc);
            });
            loading.dismiss();
            _this.cursor = _this.posts[_this.posts.length - 1];
            console.log(_this.posts);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ForumPage.prototype.loadMorePosts = function (event) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("posts").orderBy("created", "desc").startAfter(this.cursor).limit(this.pageSize).get()
            .then(function (docs) {
            docs.forEach(function (doc) {
                _this.posts.push(doc);
            });
            console.log(_this.posts);
            if (docs.size < _this.pageSize) {
                event.enable(false);
                _this.infiniteEvent = event;
            }
            else {
                event.complete();
                _this.cursor = _this.posts[_this.posts.length - 1];
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    ForumPage.prototype.refresh = function (event) {
        this.posts = [];
        this.getPosts();
        if (this.infiniteEvent) {
            this.infiniteEvent.enable(true);
        }
        event.complete();
    };
    ForumPage.prototype.post = function () {
        var _this = this;
        this.posts = [];
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("posts").add({
            text: this.text,
            created: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore.FieldValue.serverTimestamp(),
            owner: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid,
            owner_name: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.displayName
        }).then(function (doc) {
            console.log(doc);
            _this.text = "";
            var toast = _this.toastCtrl.create({
                message: "Your post has been created successfully.",
                duration: 3000
            }).present();
            _this.getPosts();
        }).catch(function (err) {
            console.log(err);
        });
    };
    ForumPage.prototype.ago = function (time) {
        var difference = __WEBPACK_IMPORTED_MODULE_4_moment___default()(time).diff(__WEBPACK_IMPORTED_MODULE_4_moment___default()());
        return __WEBPACK_IMPORTED_MODULE_4_moment___default.a.duration(difference).humanize();
    };
    ForumPage.prototype.addPhoto = function () {
        this.launchCamera();
    };
    ForumPage.prototype.logout = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().signOut().then(function () {
            var toast = _this.toastCtrl.create({
                message: " You have been logged out successfully.",
                duration: 3000
            }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        });
    };
    ForumPage.prototype.launchCamera = function () {
        var options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetHeight: 512,
            targetWidth: 512,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (base64Image) {
            console.log(base64Image);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ForumPage.prototype.like = function (post) {
        var body = {
            postId: post.id,
            userId: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid,
            action: post.data().likes && post.data().likes[__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid] == true ? "unlike" : "like"
        };
        this.http.post("https://us-central1-beatsstudio-e1fdd.cloudfunctions.net/updateLikesCount", JSON.stringify(body), {
            responseType: "text"
        }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ForumPage.prototype.comment = function (post) {
        var _this = this;
        this.actionSheetCtrl.create({
            buttons: [
                {
                    text: "View All Comment",
                    handler: function () {
                        _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__comments_comments__["a" /* CommentsPage */], {
                            "post": post
                        }).present();
                    }
                },
                {
                    text: "New Comment",
                    handler: function () {
                        _this.alertCtrl.create({
                            title: "New Comment",
                            message: "Type your comment",
                            inputs: [
                                {
                                    name: "comment",
                                    type: "text"
                                }
                            ],
                            buttons: [
                                {
                                    text: "Cancel"
                                },
                                {
                                    text: "Post",
                                    handler: function (data) {
                                        if (data.comment) {
                                            __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("comments").add({
                                                text: data.comment,
                                                post: post.id,
                                                owner: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid,
                                                owner_name: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.displayName,
                                                created: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore.FieldValue.serverTimestamp()
                                            }).then(function (doc) {
                                                _this.toastCtrl.create({
                                                    message: "Comment posted successfully.",
                                                    duration: 3000
                                                }).present();
                                            }).catch(function (err) {
                                                _this.toastCtrl.create({
                                                    message: err.message,
                                                    duration: 3000
                                                }).present();
                                            });
                                        }
                                    }
                                }
                            ]
                        }).present();
                    }
                }
            ]
        }).present();
    };
    ForumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forum',template:/*ion-inline-start:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/forum/forum.html"*/'<ion-header>\n    <ion-toolbar color ="danger">\n        <ion-buttons left>\n            <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n      <ion-title>Forum</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only clear (click)="logout()">\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-row margin class="rowStyle">\n      <button ion-button icon-only color="danger" clear (click)="addPhoto()">\n        <ion-icon name="images"></ion-icon>\n      </button>\n  \n      <ion-input type="text" placeholder="Say something..."[(ngModel)]\n      ="text"></ion-input>\n      <button ion-button icon-only color="danger" clear  (click)="post()">\n          <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-row>\n  \n    <ion-refresher (ionRefresh)="refresh($event)">\n    <ion-refresher-content>\n  \n    </ion-refresher-content>\n    </ion-refresher>\n  \n    <ion-card *ngFor="let post of posts">\n  \n      <ion-item-divider color="danger">\n        {{ post.data().owner_name }} Says\n      </ion-item-divider>\n  \n      <ion-item text-wrap> \n        {{ post.data().text }}\n      </ion-item>\n  \n      <ion-row class="bottom-bar">\n        <ion-col>\n          <button ion-button block icon-left clear small color="danger" class="border-right" (click)="like(post)">\n            <ion-icon name="thumbs-up"></ion-icon>\n            <small>{{ post.data().likesCount || 0 }} likes</small>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button block icon-left clear small color="danger" class="border-right" (click)="comment(post)">\n            <ion-icon name="text"></ion-icon>\n            <small>{{ post.data().commentsCount || 0 }} Comments</small>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button block icon-left clear small color="danger">\n           <small>{{ ago(post.data().created.toDate())}} ago</small> \n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  \n    <ion-infinite-scroll (ionInfinite)="loadMorePosts($event)">\n    <ion-infinite-scroll-content>\n  \n    </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  \n  </ion-content>\n  \n\n\n'/*ion-inline-end:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/forum/forum.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera_ngx__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ForumPage);
    return ForumPage;
}());

//# sourceMappingURL=forum.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_news__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.name = "";
        this.email = "";
        this.password = "";
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(function (data) {
            var newUser = data.user;
            newUser.updateProfile({
                displayName: _this.name,
                photoURL: ""
            }).then(function () {
                console.log("Profile Updated");
                _this.alertCtrl.create({
                    title: "Account Created",
                    message: "your account has been created successfully.",
                    buttons: [
                        {
                            text: "ok",
                            handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__news_news__["a" /* NewsPage */]);
                            }
                        }
                    ]
                }).present();
            }).catch(function (err) {
                console.log(err);
            });
            console.log(data);
        }).catch(function (err) {
            console.log(err);
            _this.toastCtrl.create({
                message: err.message,
                duration: 3000
            }).present();
        });
    };
    SignupPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/signup/signup.html"*/'<ion-header>\n\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-item text-center no-lines>\n        <ion-icon  name="logo-rss" class="logo" color="light"></ion-icon>\n    </ion-item>\n    <ion-item text-center no-lines>\n      <h1>Beat Studio</h1>\n    </ion-item>\n  \n    <ion-grid style="width: 75%;">\n\n    <ion-row class="rowStyle">\n      <ion-icon name="person" color="danger"></ion-icon>\n      <ion-input type="text" placeholder="your name" [(ngModel)]="name"></ion-input>\n    </ion-row>\n\n    <ion-row class="rowStyle">\n      <ion-icon name="mail" color="danger"></ion-icon>\n      <ion-input type="email" placeholder="your email" [(ngModel)]="email"></ion-input>\n    </ion-row>\n  \n    <ion-row class="rowStyle">\n        <ion-icon name="key" color="danger"></ion-icon>\n        <ion-input type="password" placeholder="your password" [(ngModel)]="password"></ion-input>\n    </ion-row>\n  \n    <ion-row>\n      <button ion-button block round outline color ="light"\n      style="margin-top:20px;" (click)="signup()">Sign Up</button>\n    </ion-row>\n  </ion-grid>\n  \n  <button ion-button block clear color="light" (click)="goBack()">\n    Already have an account? Login.\n  </button>\n  \n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lesson1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lessons_lessons__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Lesson1Page = /** @class */ (function () {
    function Lesson1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Lesson1Page.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lessons_lessons__["a" /* LessonsPage */]);
    };
    Lesson1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lesson1',template:/*ion-inline-start:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/lesson1/lesson1.html"*/'<ion-header>\n        <ion-toolbar color="danger">\n            <ion-buttons left>\n                <button ion-button menuToggle>\n                <ion-icon name="menu"></ion-icon>\n                </button>\n              </ion-buttons>\n          <ion-title>POP SINGING COURSE</ion-title>\n          </ion-toolbar>\n      </ion-header>\n      \n<ion-content padding>\n\n    <ion-card>\n        <img src="assets/imgs/lesson1.jpg"/>\n    </ion-card>\n    <ion-card-content>\n        <ion-card-title>\n            Choose the best music school for Pop Singing Course\n        </ion-card-title>\n        <p>\n            Whether you are aiming for better singing skill or going for professional singing path, Focus Music is ready to unleash your potential. We equip students with necessary capacity, knowledge and experience in pop singing and performance. Students will learn to understand their own voice before extending vocal ranges.\n            With fundamental techniques in strengthening vocal, Pop Singing Course targets problem areas using specialized vocal exercises. The module teaches choral techniques of breath and vocalization, tonal quality and projection, pitching and rhythm. To hone stage performance skills, we cover body movements and aural awareness.\n            Focus Music mentor all kinds of age groups, children group for 6 to 12 years old, teen group for 13 to 20 years old, adult group for above 20 years old and senior group for those above 50 years old. We ensure the competencies of our students and work progressively to achieve their aspiration.\n        </p>\n        <ion-card color="danger">\n        <ul>\n            <li>Vocal positions and concentration</li>\n            <li>Different vocal parts: Head voice, cheekbone voice & chest voice</li>\n            <li>Usage of diaphragm</li>\n            <li>Vocal Control</li>\n            <li>Intonation\n            <li>Pop music studies</li>\n          </ul>\n        </ion-card>\n        <ion-card color="danger">\n        <h2>Price</h2>\n        <ul>\n            <li>GROUP: $195 PER MONTH (4 SESSION), 2 HOURS PER SESSION, <br>4 TO 6 PAX IN A CLASS. </li>\n            <li>INDIVIDUAL: $320 PER 4 SESSIONS, <br>1 HOUR PER SESSION.</li>\n            <li>DUAL: $220 PER MONTH(4 SESSIONS),<br> 1 HOUR PER SESSION.</li>\n          </ul>\n        </ion-card>\n        \n      </ion-card-content>\n\n      <button ion-button block clear color="light">\n        Register\n      </button>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/lesson1/lesson1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], Lesson1Page);
    return Lesson1Page;
}());

//# sourceMappingURL=lesson1.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LocationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationsPage = /** @class */ (function () {
    function LocationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LocationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationsPage');
    };
    LocationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-locations',template:/*ion-inline-start:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/locations/locations.html"*/'<ion-header>\n  <ion-toolbar color="danger">\n      <ion-buttons left>\n          <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>locations</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card color="danger" text-center>\n  <h1>Beats Studio welcomes students from all walks of life,bringing musical education closer to you.<br>Find the Beats Studio outlet nearest to you!</h1></ion-card>\n  <ion-card>\n  <h6>Opening Hours:</h6>  \n   <ul>\n   <li>Monday – Friday: 2pm ~ 10pm </li>\n   <li>Saturday and Sunday: 11am ~ 8pm</li> \n   <li>Public holiday: Closed (Classes will carry on if is needed)</li></ul></ion-card> \n  <ion-card>\n\n    <h6>Address 1</h6>\n    <div>41A Keong Saik Rd, Singapore 089146 \n    (Outram Park MRT-Exit H)</div></ion-card>\n    <ion-card>\n    <h6>Address 2</h6>\n    159B Thomson Rd Goldhill Centre, Singapore 307612 (Novena MRT)</ion-card>\n    <ion-card>\n    <h6>Address 3</h6>\n    150 South Bridge Road #02-31 Fook Hai Building, Singapore 058727 (Chinatown MRT-Exit E )</ion-card>\n    <ul>\n    <li> feel free to send in your enquiries or make appointment for free vocal assessment</li>\n    <li>Tel: (+65) 64381256 </li>\n    <li>Fax: (+65) 64381257</li>\n    <li>Email: enquiries@beatsstudio.com.sg</li></ul>\n    \n    \n\n</ion-content>\n'/*ion-inline-end:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/locations/locations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LocationsPage);
    return LocationsPage;
}());

//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		429,
		9
	],
	"../pages/comments/comments.module": [
		430,
		8
	],
	"../pages/details/details.module": [
		431
	],
	"../pages/forum/forum.module": [
		432,
		6
	],
	"../pages/lesson1/lesson1.module": [
		433,
		5
	],
	"../pages/lessons/lessons.module": [
		434,
		4
	],
	"../pages/locations/locations.module": [
		435,
		3
	],
	"../pages/login/login.module": [
		436,
		2
	],
	"../pages/news/news.module": [
		437,
		1
	],
	"../pages/signup/signup.module": [
		438,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.data.item;
    }
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/details/details.html"*/'\n<ion-header>\n    <ion-toolbar color ="danger">\n        <ion-buttons left>\n            <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n            </button>\n          </ion-buttons>\n      <ion-title>FAQ</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n<ion-card color="danger">\n        <ion-card-content>{{ item.Question}}</ion-card-content>\n        <ion-card-content>{{ item.Answer }}</ion-card-content>\n        </ion-card>\n      \n     \n\n\n  \n  </ion-content>'/*ion-inline-end:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera_ngx__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_news_news__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lessons_lessons__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_locations_locations__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forum_forum__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_about__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_lesson1_lesson1__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_comments_comments__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_details_details_module__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//import { DetailsPage} from '../pages/details/details';


var config = {
    apiKey: "AIzaSyARzc3aj6pbfimR7mCXFkUcD1uDWQ7Hbdk",
    authDomain: "beatsstudio-e1fdd.firebaseapp.com",
    databaseURL: "https://beatsstudio-e1fdd.firebaseio.com",
    projectId: "beatsstudio-e1fdd",
    storageBucket: "",
    messagingSenderId: "886491635841"
};
__WEBPACK_IMPORTED_MODULE_17_firebase___default.a.initializeApp(config);
__WEBPACK_IMPORTED_MODULE_17_firebase___default.a.firestore().settings({
    timestampsInSnapshots: true
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lessons_lessons__["a" /* LessonsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_locations_locations__["a" /* LocationsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_forum_forum__["a" /* ForumPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_lesson1_lesson1__["a" /* Lesson1Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_comments_comments__["a" /* CommentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comments/comments.module#CommentsPageModule', name: 'CommentsPage', segment: 'comments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forum/forum.module#ForumPageModule', name: 'ForumPage', segment: 'forum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lesson1/lesson1.module#Lesson1PageModule', name: 'Lesson1Page', segment: 'lesson1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lessons/lessons.module#LessonsPageModule', name: 'LessonsPage', segment: 'lessons', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/locations/locations.module#LocationsPageModule', name: 'LocationsPage', segment: 'locations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__pages_details_details_module__["DetailsPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lessons_lessons__["a" /* LessonsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_locations_locations__["a" /* LocationsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_forum_forum__["a" /* ForumPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_lesson1_lesson1__["a" /* Lesson1Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_comments_comments__["a" /* CommentsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera_ngx__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 169,
	"./af.js": 169,
	"./ar": 170,
	"./ar-dz": 171,
	"./ar-dz.js": 171,
	"./ar-kw": 172,
	"./ar-kw.js": 172,
	"./ar-ly": 173,
	"./ar-ly.js": 173,
	"./ar-ma": 174,
	"./ar-ma.js": 174,
	"./ar-sa": 175,
	"./ar-sa.js": 175,
	"./ar-tn": 176,
	"./ar-tn.js": 176,
	"./ar.js": 170,
	"./az": 177,
	"./az.js": 177,
	"./be": 178,
	"./be.js": 178,
	"./bg": 179,
	"./bg.js": 179,
	"./bm": 180,
	"./bm.js": 180,
	"./bn": 181,
	"./bn.js": 181,
	"./bo": 182,
	"./bo.js": 182,
	"./br": 183,
	"./br.js": 183,
	"./bs": 184,
	"./bs.js": 184,
	"./ca": 185,
	"./ca.js": 185,
	"./cs": 186,
	"./cs.js": 186,
	"./cv": 187,
	"./cv.js": 187,
	"./cy": 188,
	"./cy.js": 188,
	"./da": 189,
	"./da.js": 189,
	"./de": 190,
	"./de-at": 191,
	"./de-at.js": 191,
	"./de-ch": 192,
	"./de-ch.js": 192,
	"./de.js": 190,
	"./dv": 193,
	"./dv.js": 193,
	"./el": 194,
	"./el.js": 194,
	"./en-SG": 195,
	"./en-SG.js": 195,
	"./en-au": 196,
	"./en-au.js": 196,
	"./en-ca": 197,
	"./en-ca.js": 197,
	"./en-gb": 198,
	"./en-gb.js": 198,
	"./en-ie": 199,
	"./en-ie.js": 199,
	"./en-il": 200,
	"./en-il.js": 200,
	"./en-nz": 201,
	"./en-nz.js": 201,
	"./eo": 202,
	"./eo.js": 202,
	"./es": 203,
	"./es-do": 204,
	"./es-do.js": 204,
	"./es-us": 205,
	"./es-us.js": 205,
	"./es.js": 203,
	"./et": 206,
	"./et.js": 206,
	"./eu": 207,
	"./eu.js": 207,
	"./fa": 208,
	"./fa.js": 208,
	"./fi": 209,
	"./fi.js": 209,
	"./fo": 210,
	"./fo.js": 210,
	"./fr": 211,
	"./fr-ca": 212,
	"./fr-ca.js": 212,
	"./fr-ch": 213,
	"./fr-ch.js": 213,
	"./fr.js": 211,
	"./fy": 214,
	"./fy.js": 214,
	"./ga": 215,
	"./ga.js": 215,
	"./gd": 216,
	"./gd.js": 216,
	"./gl": 217,
	"./gl.js": 217,
	"./gom-latn": 218,
	"./gom-latn.js": 218,
	"./gu": 219,
	"./gu.js": 219,
	"./he": 220,
	"./he.js": 220,
	"./hi": 221,
	"./hi.js": 221,
	"./hr": 222,
	"./hr.js": 222,
	"./hu": 223,
	"./hu.js": 223,
	"./hy-am": 224,
	"./hy-am.js": 224,
	"./id": 225,
	"./id.js": 225,
	"./is": 226,
	"./is.js": 226,
	"./it": 227,
	"./it-ch": 228,
	"./it-ch.js": 228,
	"./it.js": 227,
	"./ja": 229,
	"./ja.js": 229,
	"./jv": 230,
	"./jv.js": 230,
	"./ka": 231,
	"./ka.js": 231,
	"./kk": 232,
	"./kk.js": 232,
	"./km": 233,
	"./km.js": 233,
	"./kn": 234,
	"./kn.js": 234,
	"./ko": 235,
	"./ko.js": 235,
	"./ku": 236,
	"./ku.js": 236,
	"./ky": 237,
	"./ky.js": 237,
	"./lb": 238,
	"./lb.js": 238,
	"./lo": 239,
	"./lo.js": 239,
	"./lt": 240,
	"./lt.js": 240,
	"./lv": 241,
	"./lv.js": 241,
	"./me": 242,
	"./me.js": 242,
	"./mi": 243,
	"./mi.js": 243,
	"./mk": 244,
	"./mk.js": 244,
	"./ml": 245,
	"./ml.js": 245,
	"./mn": 246,
	"./mn.js": 246,
	"./mr": 247,
	"./mr.js": 247,
	"./ms": 248,
	"./ms-my": 249,
	"./ms-my.js": 249,
	"./ms.js": 248,
	"./mt": 250,
	"./mt.js": 250,
	"./my": 251,
	"./my.js": 251,
	"./nb": 252,
	"./nb.js": 252,
	"./ne": 253,
	"./ne.js": 253,
	"./nl": 254,
	"./nl-be": 255,
	"./nl-be.js": 255,
	"./nl.js": 254,
	"./nn": 256,
	"./nn.js": 256,
	"./pa-in": 257,
	"./pa-in.js": 257,
	"./pl": 258,
	"./pl.js": 258,
	"./pt": 259,
	"./pt-br": 260,
	"./pt-br.js": 260,
	"./pt.js": 259,
	"./ro": 261,
	"./ro.js": 261,
	"./ru": 262,
	"./ru.js": 262,
	"./sd": 263,
	"./sd.js": 263,
	"./se": 264,
	"./se.js": 264,
	"./si": 265,
	"./si.js": 265,
	"./sk": 266,
	"./sk.js": 266,
	"./sl": 267,
	"./sl.js": 267,
	"./sq": 268,
	"./sq.js": 268,
	"./sr": 269,
	"./sr-cyrl": 270,
	"./sr-cyrl.js": 270,
	"./sr.js": 269,
	"./ss": 271,
	"./ss.js": 271,
	"./sv": 272,
	"./sv.js": 272,
	"./sw": 273,
	"./sw.js": 273,
	"./ta": 274,
	"./ta.js": 274,
	"./te": 275,
	"./te.js": 275,
	"./tet": 276,
	"./tet.js": 276,
	"./tg": 277,
	"./tg.js": 277,
	"./th": 278,
	"./th.js": 278,
	"./tl-ph": 279,
	"./tl-ph.js": 279,
	"./tlh": 280,
	"./tlh.js": 280,
	"./tr": 281,
	"./tr.js": 281,
	"./tzl": 282,
	"./tzl.js": 282,
	"./tzm": 283,
	"./tzm-latn": 284,
	"./tzm-latn.js": 284,
	"./tzm.js": 283,
	"./ug-cn": 285,
	"./ug-cn.js": 285,
	"./uk": 286,
	"./uk.js": 286,
	"./ur": 287,
	"./ur.js": 287,
	"./uz": 288,
	"./uz-latn": 289,
	"./uz-latn.js": 289,
	"./uz.js": 288,
	"./vi": 290,
	"./vi.js": 290,
	"./x-pseudo": 291,
	"./x-pseudo.js": 291,
	"./yo": 292,
	"./yo.js": 292,
	"./zh-cn": 293,
	"./zh-cn.js": 293,
	"./zh-hk": 294,
	"./zh-hk.js": 294,
	"./zh-tw": 295,
	"./zh-tw.js": 295
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 398;

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_lessons_lessons__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_locations_locations__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_forum_forum__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_news_news__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.go_to_home = function (Page) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_news_news__["a" /* NewsPage */]);
    };
    MyApp.prototype.go_to_lessons = function (Page) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_lessons_lessons__["a" /* LessonsPage */]);
    };
    MyApp.prototype.go_to_locations = function (Page) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_locations_locations__["a" /* LocationsPage */]);
    };
    MyApp.prototype.go_to_forum = function (Page) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_forum_forum__["a" /* ForumPage */]);
    };
    MyApp.prototype.go_to_about = function (Page) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */]);
    };
    MyApp.prototype.go_to_news = function (Page) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_news_news__["a" /* NewsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/app/app.html"*/'<ion-menu side="left"[content]="content">\n    <ion-header>\n        <ion-toolbar color="danger">\n            <ion-title>Menu</ion-title>\n         </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <ion-item (click)="go_to_news()" menuClose>\n                News\n            </ion-item>\n            <ion-item (click)="go_to_forum()" menuClose>\n                Forum\n            </ion-item>\n            <ion-item (click)="go_to_lessons()" menuClose>\n                Lessons\n            </ion-item>\n            <ion-item (click)="go_to_locations()" menuClose>\n                Locations\n            </ion-item>\n            <ion-item (click)="go_to_about()" menuClose>\n                About Us\n            </ion-item>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>'/*ion-inline-end:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */]),
            ],
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());

//# sourceMappingURL=details.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_news__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.email = "";
        this.password = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(function (user) {
            console.log(user);
            _this.toastCtrl.create({
                message: "Welcome  " + user.user.displayName,
                duration: 3000
            }).present();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__news_news__["a" /* NewsPage */]);
        }).catch(function (err) {
            console.log(err);
            _this.toastCtrl.create({
                message: err.message,
                duration: 3000
            }).present();
        });
    };
    LoginPage.prototype.gotoSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.gotoNews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__news_news__["a" /* NewsPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/login/login.html"*/'<ion-header hidden>\n  <ion-navbar color="danger">\n    <ion-title>login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item text-center no-lines>\n      <ion-icon  name="logo-rss" class="logo" color="light"></ion-icon>\n  </ion-item>\n  <ion-item text-center no-lines>\n    <h1>Beats Studio</h1>\n  </ion-item>\n\n  <ion-grid style="width: 75%;">\n  <ion-row class="rowStyle">\n    <ion-icon name="mail" color="danger"></ion-icon>\n    <ion-input type="email" placeholder="your email" [(ngModel)]="email"></ion-input>\n  </ion-row>\n\n  <ion-row class="rowStyle">\n      <ion-icon name="key" color="danger"></ion-icon>\n      <ion-input type="password" placeholder="your password" [(ngModel)]="password"></ion-input>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button block round outline color ="light"\n    style="margin-top:20px;" (click)="login()">Login</button>\n  </ion-row>\n</ion-grid>\n\n<button ion-button block clear color="light" (click)="gotoSignup()">\n  Don\'t have an account? Sign Up\n</button>\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams, dom) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dom = dom;
        this.vid = 'https://www.youtube.com/embed/Q1FW25aLzPE';
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    NewsPage.prototype.sanitize = function (vid) {
        return this.dom.bypassSecurityTrustResourceUrl(vid);
    };
    NewsPage.prototype.goForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/news/news.html"*/'<ion-header>\n    <ion-toolbar color="danger">\n        <ion-buttons left>\n            <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n            </button>\n          </ion-buttons>\n      <ion-title>News</ion-title>\n      </ion-toolbar>\n  </ion-header>\n  \n<ion-content padding>\n        <ion-row>\n                <ion-col text-center>\n                        <h1 >Singapore\'s most <br> affordable music lessons <br>for all ages</h1>\n                        <h4>Voted by parents for "Best in Developing Musicianship" by Parents World</h4>\n                        <button ion-button block round outline color ="danger"\n                        style="margin-top:20px;" (click)="goForm()">Book A Free Music Lesson Trail Now</button>\n                        <img src="assets/imgs/news.png"/>\n                </ion-col>\n        </ion-row>\n        <ion-card>\n                <ion-list>\n                  <ion-item  color="danger">\n                    <ion-icon name="school" item-start></ion-icon>\n                    Established in 1983\n                  </ion-item>\n              \n                  <ion-item  color="danger"> \n                    <ion-icon name="people" item-start></ion-icon>\n                    3,000 students\n                  </ion-item>\n              \n                  <ion-item color="danger">\n                    <ion-icon name="pin" item-start></ion-icon>\n                    3 locations\n                  </ion-item>\n                </ion-list>\n        </ion-card>\n        <ion-content class="cards-bg social-cards">\n\n            <ion-card>\n                <ion-item>\n                  <h2>2018 Year End Gala</h2>\n                  <p>December,5,2018</p>\n                </ion-item>\n                <img src="assets/imgs/news1.jpg">\n                <ion-card-content>\n                  <p>Students of Beats Studio pou up awesome performances in our 2018 Year End Gala!Thanks to all students,teachers and parents,staff and other supporters who came to attend the Gala on 4 December 2018.</p>\n                </ion-card-content>\n              </ion-card>\n            \n            <ion-card>\n                <ion-item>\n                  <h2>Spooky Fingers Halloween <br>Recital 2018</h2>\n                  <p>November,11,2018</p>\n                </ion-item>\n                <img src="assets/imgs/news2.jpg">\n                <ion-card-content>\n                  <p>Students of Tanglewood Music School presented a fun-filled Halloween Recital on 28 October 2018! Our students came with their best Halloween costumes and brought a wonderful performance of musical varieties! Thanks to all teachers and parents who came to support the recital..</p>\n                </ion-card-content>\n              </ion-card>\n            \n            \n            <ion-card>\n              <ion-item>\n                <h2>Wu Zeyu<br>Singapore International Classical <br>Piano Competition</h2>\n                <p>September,6,2018</p>\n              </ion-item>\n              <img src="assets/imgs/news3.jpg">\n              <ion-card-content>\n                <p>Congratulations to Wu Zeyu for winning Category A 2nd Prize in the 2nd Singapore International Classical Piano Competition 2018! Thanks his teacher Elitsa Momcheva. Zeyu narrowly lost out First Prize to another young talent from Thailand.</p>\n              </ion-card-content>\n            </ion-card>\n            \n            \n            </ion-content>\n            \n\n\n          \n  <iframe width="340" height="250" [src]="sanitize(vid)" frameborder="0" allowfullscreen></iframe>\n\n</ion-content>\n'/*ion-inline-end:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    AboutPage.prototype.initializeItems = function () {
        this.items = [
            {
                'Question': 'Does your school believe in a holistic learning approach or only to impart performance skills to your students?',
                'Answer': 'We do not merely train our students in the necessary performance skills but help to coach them in other areas of proficiency, such as musicianship, pitch training, eye training and memorizing techniques. These skills will also help to develop creativity.'
            },
            {
                'Question': 'How does your music school maintain a childs interest?',
                'Answer': 'We have no less than 4 concerts a year with performing opportunities in shopping malls, libraries…etc. Apart from the concerts, we have masterclasses, informal ensemble playing and group classes. All these help to stimulate the childs interest when interacting with other peers.'
            },
            {
                'Question': 'How quealified are your teachers?',
                'Answer': 'Besides their basic qualification in music, Seimpi provides stringent training in music pedagogy to ensure that our teachers are able to deliver lessons effectively to all ages.'
            },
            {
                'Question': 'Do your teachers undergo any further training?',
                'Answer': 'With Beats Studio, our sister school which provide higher education programs, we have teacher training diplomas conducted. Our teachers consistently upgrade themselves.'
            }
        ];
    };
    AboutPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.Question.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    AboutPage.prototype.navigateToDetails = function (item) {
        this.navCtrl.push('DetailsPage', { item: item });
    };
    AboutPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Send Successfully!',
            subTitle: 'Thank you for your booking.We will contact you as soon as possible!',
            buttons: ['OK']
        });
        alert.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/about/about.html"*/'\n<ion-header>\n  <ion-toolbar color ="danger">\n      <ion-buttons left>\n          <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>About Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let item of items" (click)="navigateToDetails(item)">\n        {{ item.Question }}\n      </ion-item>\n    </ion-list>\n\n    <ion-card  text-center>\n        <h1>Why Choose Us</h1>\n        <ion-card>\n          <h1><ion-icon color="danger" name="alert" item-start></ion-icon>Track record</h1>\n          <div>Established since 1983,Ossia Music School has a proven track record in helping students pass music exams.\n                  Most importantly,we develop the love of music in ur students.</div>\n        </ion-card>\n\n   <ion-card>\n          <h1><ion-icon color="danger" name="cash" item-start></ion-icon>Affordable</h1>\n          <div>Our music lessons are affordable,so that you don\'t have to pay through the nose for quality piano lessons taught by certified teachers.</div>\n   </ion-card>\n\n   <ion-card>\n          <h1><ion-icon  color="danger" name="musical-notes" item-start></ion-icon>Qualified and fun music teachers</h1>\n          <div>All our music teachers are professionally qualified to teach,but more than that,they are also passionate and fun teachers,who love to engage their students and inculcate the love of music in team!</div>\n   </ion-card>\n\n \n   <ion-card>\n          <h1><ion-icon  color="danger" name="pin" item-start></ion-icon>Conveniently located around 8 neighbourhoods</h1>\n          <div>We are located around the heartlands,so that it\'s easily accessible for our students and rental costs are cheaper,which means we can pass on the savings to students.</div>\n   </ion-card>\n  \n</ion-card>\n\n\n    <ion-card color="danger" border-radius="30px">\n        <h2 text-center> Begin your music journey with us. <br>Book your free music lesson trial today.</h2>\n         \n                <ion-item >\n                  <ion-label stacked>Name</ion-label>\n                  <ion-input type="text" class="rowStyle"></ion-input>\n                </ion-item>\n              \n                <ion-item >\n                  <ion-label stacked>Email</ion-label>\n                  <ion-input type="email" class="rowStyle"></ion-input>\n                </ion-item>\n                <ion-item >\n                  <ion-label stacked>Enquiry</ion-label>\n                  <ion-textarea rows="6" cols="20" placeholder="Enter any enquiries here..." class="enquiryStyle"></ion-textarea>\n                </ion-item>\n\n                \n                  <ion-label stacked  >Location </ion-label>\n                        <ion-list>\n                        <ion-item>\n                        <ion-label><h6>Outram Park</h6></ion-label>\n                        <ion-checkbox color="danger" checked="false"></ion-checkbox>\n                        </ion-item>\n                        <ion-item>\n                        <ion-label><h6>Novena</h6></ion-label>\n                        <ion-checkbox color="danger" checked="false"></ion-checkbox>\n                        </ion-item>   \n                        <ion-item>\n                        <ion-label><h6>Chinatown</h6></ion-label>\n                        <ion-checkbox color="danger" checked="false"></ion-checkbox>\n                        </ion-item>    \n                       </ion-list>      \n                <ion-label stacked  >Class </ion-label>\n                        <ion-list>\n                        <ion-item>\n                        <ion-label><h6>Pop Singing</h6></ion-label>\n                        <ion-checkbox color="danger" checked="false"></ion-checkbox>\n                        </ion-item>\n                        <ion-item>\n                        <ion-label><h6>Guitar</h6></ion-label>\n                        <ion-checkbox color="danger" checked="false"></ion-checkbox>\n                        </ion-item>   \n                        <ion-item>\n                        <ion-label><h6>Vocal</h6></ion-label>\n                        <ion-checkbox color="danger" checked="false"></ion-checkbox>\n                        </ion-item>    \n                        <ion-item>\n                        <ion-label><h6>Keyboard</h6></ion-label>\n                        <ion-checkbox color="danger" checked="false"></ion-checkbox>\n                        </ion-item> \n                      \n                       </ion-list>                              \n    </ion-card>\n\n\n        <ion-row>\n            <button ion-button block round outline color ="danger" (click)="showAlert()"\n            style="margin-top:20px;">Submit</button>\n        </ion-row>\n\n        \n     \n</ion-content>\n'/*ion-inline-end:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lesson1_lesson1__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LessonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LessonsPage = /** @class */ (function () {
    function LessonsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LessonsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LessonsPage');
    };
    LessonsPage.prototype.goLesson1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lesson1_lesson1__["a" /* Lesson1Page */]);
    };
    LessonsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lessons',template:/*ion-inline-start:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/lessons/lessons.html"*/'\n<ion-header>\n  <ion-toolbar color="danger">\n      <ion-buttons left>\n          <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>lessons</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-content class="cards-bg" >\n\n        <ion-card color="danger">\n      \n          <img src="assets/imgs/lesson1.jpg"/>\n      \n          <ion-card-content>\n            <ion-card-title>\n              POP SINGING COURSE\n            </ion-card-title>\n            <p>\n                Students will learn to understand their own voice.\n            </p>\n            \n          </ion-card-content>\n      \n          <ion-row no-padding>\n\n            <ion-col text-center>\n              <button ion-button clear small color="white" icon-start (click)="goLesson1()">\n                <ion-icon name=\'musical-notes\'></ion-icon>\n                More details\n              </button>\n            </ion-col>\n            <ion-col text-center>\n              <button ion-button clear small color="white" icon-start>\n                <ion-icon name=\'share-alt\'></ion-icon>\n                Register\n              </button>\n            </ion-col>\n          </ion-row>\n      \n        </ion-card>\n      \n        <ion-card color="danger">\n      \n          <div>\n            <img src="assets/imgs/lesson2.jpg"/>\n          </div>\n      \n          <ion-card-content>\n            <ion-card-title>\n                POP GUITAR COURSE\n            </ion-card-title>\n            <p>\n                Enroll for The Perfect Pop Guitar Course\n            </p>\n          </ion-card-content>\n      \n          <ion-row no-padding>\n            <ion-col text-center>\n              <button ion-button clear small color="white" icon-start>\n                <ion-icon name=\'musical-notes\'></ion-icon>\n                More details\n              </button>\n            </ion-col>\n            <ion-col text-center>\n              <button ion-button clear small color="white" icon-start>\n                <ion-icon name=\'share-alt\'></ion-icon>\n                Register\n              </button>\n            </ion-col>\n          </ion-row>\n      \n        </ion-card>\n      \n        <ion-card color="danger">\n      \n          <div>\n            <img src="assets/imgs/lesson3.jpg"/>\n          </div>\n      \n          <ion-card-content>\n            <ion-card-title>\n                VOCAL PROFICIENCY COURSE\n            </ion-card-title>\n            <p>\n                Find the perfect Vocal Proficiency Course\n            </p>\n          </ion-card-content>\n      \n          <ion-row no-padding>\n            <ion-col text-center>\n              <button ion-button clear small color="white" icon-start>\n                <ion-icon name=\'musical-notes\'></ion-icon>\n                More details\n              </button>\n            </ion-col>\n            <ion-col text-center>\n              <button ion-button clear small color="white" icon-start>\n                <ion-icon name=\'share-alt\'></ion-icon>\n                Register\n              </button>\n            </ion-col>\n          </ion-row>\n      \n        </ion-card>\n      \n        <ion-card color="danger">\n      \n          <div>\n            <img src="assets/imgs/lesson4.jpg"/>\n          </div>\n      \n          <ion-card-content>\n            <ion-card-title>\n                Keyboard Play and Sing Course\n            </ion-card-title>\n            <p>\n                Learning to sing and play the keyboard at the same time is a fantastic skill for all singers to have.\n            </p>\n          </ion-card-content>\n      \n          <ion-row no-padding>\n            <ion-col text-center>\n              <button ion-button clear small color="white" icon-start>\n                <ion-icon name=\'musical-notes\'></ion-icon>\n                More details\n              </button>\n            </ion-col>\n            <ion-col text-center>\n              <button ion-button clear small color="white" icon-start>\n                <ion-icon name=\'share-alt\'></ion-icon>\n                Register\n              </button>\n            </ion-col>\n          </ion-row>\n      \n        </ion-card>\n    </ion-content>\n'/*ion-inline-end:"/Users/yaxinliu/ionic-apps/untitled folder/LiuYaxin_1805289D_P08/src/pages/lessons/lessons.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LessonsPage);
    return LessonsPage;
}());

//# sourceMappingURL=lessons.js.map

/***/ })

},[341]);
//# sourceMappingURL=main.js.map