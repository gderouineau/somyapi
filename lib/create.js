/*
 * DEPENDENCIES
 *
 *
 */

var connection = require('./mysql_connection');
var io = require('socket.io');
var fs = require('fs');
var path = require('path');
var mysql_query = require('./mysql_query');
var error = [];
var sql ;
module.export =  function(server){

    var files = [];
    io = io.listen(server);

    fs.readdir(path.resolve(__dirname, ' ../../../entity/'), function (err, data) {

        for(key in data){
            if(data[key].ext == 'js'){
                files.push(data[key]);
            }
        }
        io.on('connection', function(socket){
            for(key in files){
                var entity = require(path.resolve(__dirname, '../../../entity/',files[key]));
                for(key_1 in files[key]){

                    /*
                     * ALL FUNCTION
                     *
                     *
                     */

                    socket.on('all-'+files[key][key_1], function(query_object, callback){
                        if(query.object){

                            sql = "SELECT * FROM " +  files[key][key_1] + " " + mysql_query(query_object);
                        }
                        else{
                            if(callback){
                                process.nextTick(function(){
                                    callback(err);
                                });
                            }
                            socket.emit('all-'+files[key][key_1], {error:err})
                        }

                    });

                    /*
                     * ONE FUNCTION
                     *
                     *
                     */

                    socket.on('one-'+files[key][key_1], function(query_object, callback){
                        if(query.object){

                            sql = "SELECT * FROM " +  files[key][key_1] + " " + mysql_query(query_object);
                        }
                        else{
                            if(callback){
                                process.nextTick(function(){
                                    callback(err);
                                });
                            }
                            socket.emit('all-'+files[key][key_1], {error:err})
                        }
                    });

                    /*
                     * ADD FUNCTION
                     *
                     *
                     *
                     */

                    socket.on('add-'+files[key][key_1], function(data, callback){
                        if(query.object){

                        }
                        else{
                            if(callback){
                                process.nextTick(function(){
                                    callback(err);
                                });
                            }
                            socket.emit('all-'+files[key][key_1], {error:err})
                        }
                    });

                    /*
                     * UPDATE FUNCTION
                     *
                     *
                     */

                    socket.on('update-'+files[key][key_1], function(data, callback){
                        if(query.object){

                        }
                        else{
                            if(callback){
                                process.nextTick(function(){
                                    callback(err);
                                });
                            }
                            socket.emit('all-'+files[key][key_1], {error:err})
                        }
                    });

                    /*
                     * DELETE FUNCTION
                     *
                     *
                     *
                     */

                    socket.on('delete-'+files[key][key_1], function(data, callback){
                        if(query.object){

                        }
                        else{
                            if(callback){
                                process.nextTick(function(){
                                    callback(err);
                                });
                            }
                            socket.emit('all-'+files[key][key_1], {error:err})
                        }
                    });
                }
            }
        });
    });
};