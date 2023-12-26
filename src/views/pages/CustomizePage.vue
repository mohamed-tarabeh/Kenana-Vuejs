<template>
    
    <main>
    <div class="customize container">
        <div class="row mb-5">
            <!-- col2 -->
            <div class="cust1 col-lg-6 col-md-12">
                <h1 class="mt-5 fw-bolder">Customize your tour</h1>
                <p class="fw-bold mt-5">You can create a trip according to your choice, and the advantages of customize your tour are:</p>

                <p>
                    <ul type="none">
                    <li>
                    <i class="fa-solid fa-circle-check me-2"></i><span>Lorem ipsum dolor, sit amet consectetur adipisicing </span>
                    </li>
                    
                    <li>
                    <i class="fa-solid fa-circle-check me-2"></i><span>Lorem ipsum dolor, sit amet consectetur adipisicing </span>
                    </li>
        
                    <li>
                    <i class="fa-solid fa-circle-check me-2"></i><span>Lorem ipsum dolor, sit amet consectetur adipisicing </span>
                    </li>
                    <li>
                    <i class="fa-solid fa-circle-check me-2"></i><span>Lorem ipsum dolor, sit amet consectetur adipisicing </span>
                    </li>
        
                    </ul>
                </p>

                <div class="imgg">
                    <img src="frontend/imgs/palm_arrow.PNG" alt="" width="80%">
                </div>

            
            </div>
            <!-- col2 -->
            <div class="cust2 col-lg-5 col-md-12 border border-secondary rounded-5 ms-5 mt-5">
            <form action="" class="form-group p-4">
                <label for="" class="form-label ms-2">Place*</label>
                <!-- <input type="text" class="form-control p-4 border-secondary rounded-4 mb-2" required> -->
                <select class="form-control p-3 border-secondary rounded-4 mb-2 form-select" required >
                    <option value="" class="form-control">Pyramids</option>
                    <option value="">Safari</option>
                </select>

                <label for="" class="form-label ms-2">City*</label>
                <!-- <input type="text" class="form-control p-4 border-secondary rounded-4 mb-2" required> -->
                <select class="form-control p-3 border-secondary rounded-4 mb-2 form-select" required >
                    <option value="">Giza</option>
                    <option value="">Damietta</option>
                </select>

                
                <label for="" class="form-label ms-2">Price*</label>
                <!-- <input type="text" class="form-control p-4 border-secondary rounded-4 mb-2" required> -->
                <select class="form-control p-3 border-secondary rounded-4 mb-2 form-select" required >
                    <option value="" class="form-control">Pyramids</option>
                    <option value="">Safari</option>
                </select>


            <label for="" class="form-label ms-2">Number Of People</label>
            <input type="number" class="form-control p-4 border-secondary rounded-4 mb-2" required placeholder="0">


            <div class="row">
                <div class="col-6">

                
                <!-- start date -->
                <label for="" class="form-label ms-2">Start Date</label>
            <input type="date" class="form-control p-4 border-secondary rounded-4 mb-2 dd" required placeholder="0">
            </div>

                <div class="col-6">
                <!-- end date -->
                <label for="" class="form-label ms-2">End Date</label>
            <input type="date" class="form-control p-4 border-secondary rounded-4 mb-2  dd" required placeholder="0">
                
                </div>


                <div class="col-12 mt-5">
                <button class="btn cust_btn w-100 rounded-5" data-bs-toggle="modal" data-bs-target="#myModal">Customize</button>

                </div>

                <!-- modal -->

                <!-- The Modal -->
    <div class="modal" id="myModal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">

        <!-- Modal Header -->
        <!-- <div class="modal-header">
        
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div> -->

        <!-- Modal body -->
        <div class="modal-body">
            <div class="container" align="center">
            <img src="frontend/imgs/cust_book.PNG" alt="" class="after_book">
            <div class="mt-5 pe-5 ps-5" align="center">
                <h3 class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam voluptas nulla ullam quidem ducimus nesciunt libero provident nesciunt libero provident  </h3>

                <button class="btn text-white fw-bolder bttn rounded-5">Back To Home</button>


            </div>
            
            </div>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>

        </div>
    </div>
    </div>
                <!-- end modal -->

            </div>




            </form>
            </div>

        </div>
    </div>


    </main>

</template>

<script>
 
</script>

<style>
/* @import '../../../public/frontend/css/custm.css'; */



.cust1  p{
    font-size: 20px;
}
.fa-circle-check{
    color: #ff7013;
}
.cust1 li{
    padding-left: 0px;
    padding-bottom: 10px;
}
.cust2 label{
    font-size: 20px;
}
.dd{
    width: 90%;
}
.cust_btn{
    
    background-color: #ff7013;
    color: white;
    font-weight: bolder;
    font-size: 20px;
}
.after_book{
    width: 150px;
}
.bttn{
    width: 80%;
    background-color: #ff7013;
    padding:15px ;
    font-size: 20px;
}
.bttn:hover{
    background-color: #ff7013;
}
</style>