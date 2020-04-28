<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="fname">First Name</label>
                        <input type="text" class="form-control" id="fname" v-model="userData.fname">
                        </div>
                        <div class="form-group col-md-6">
                        <label for="lname">Last Name</label>
                        <input type="text" class="form-control" id="lname" v-model="userData.lname">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="passowrd" class="form-control" id="password" v-model="userData.password">
                    </div>
                    <div class="form-row">
                        <label>Store Data?</label>
                       <div class="form-check">
                        <input class="form-check-input" type="radio" value="Stored" v-model="isStored">
                        Yes
                        </div>
                        
                        <div class="form-check disabled">
                            <input class="form-check-input" type="radio" value="Not Stored" v-model="isStored">
                            No
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fname }} {{ userData.lname }} </p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }} </p>
                        <p>Store in Database?: {{ isStored }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                userData: {
                    fname: '',
                    lname: '',
                    email: '',
                    password: '',
                },
                isStored: 'Stored',
            };
        }
    }
</script>

<style>
</style>
