class Student11 {
    id:number
    name:string
    enrolledCourses: Course1[]
    constructor(id:number,name:string){
      this.id = id;
      this.name = name;
      this.enrolledCourses = [];
    }
    // phương thức thêm khóa học cho sinh viên đăng kí
    enroll(course: Course1):void{
      this.enrolledCourses.push(course);
      for(let i=0; i< this.enrolledCourses.length; i++){
        console.log(`${this.name} Đã đăng kí khóa học : ${this.enrolledCourses[i]}`);
  
      }
      
    }
  }
  // tạo class hướng dẫn
  class Instructor1 {
    id:number
    name:string
    constructor(id:number, name:string){
      this.id = id;
      this.name = name;
    }
    // tạo khóa học
    createCourse(title:string){
      // console.log(`${this.name} Khóa học đã tạo : ${title}`);
      // return new Course(title,this);
    }
    // tạo danh sách bài học
    createLesson(id:number,title:string): Lessons{
      let newLession = class Student11 {
        id:number
        name:string
        enrolledCourses: Course1[]
        constructor(id:number,name:string){
          this.id = id;
          this.name = name;
          this.enrolledCourses = [];
        }
        // phương thức thêm khóa học cho sinh viên đăng kí
        enroll(course: Course1):void{
          this.enrolledCourses.push(course);
          for(let i=0; i< this.enrolledCourses.length; i++){
            console.log(`${this.name} Đã đăng kí khóa học : ${this.enrolledCourses[i]}`);
      
          }
          
        }
      }
      // tạo class hướng dẫn
      class Instructor1 {
        id:number
        name:string
        listAsignment:any[]
        constructor(id:number, name:string){
          this.id = id;
          this.name = name;
          this.listAsignment=[]
        }
        // tạo khóa học
        createCourse(title:string){
          // console.log(`${this.name} Khóa học đã tạo : ${title}`);
          // return new Course(title,this);
        }
        // tạo danh sách bài học
  createLesson(id:number,title:string,asignment:Asignment[]): Lessons{
    asignment.push(this.createAsignment(2,"bt1","Khóa 1",))
     for( let i = 0 ; i< asignment.length ;i++){
        this.listAsignment.forEach(element => {
            if(element.id === asignment[i].id){
                asignment.push(element)
            }
            
        });

    }
  }
        // tạo danh sách bài tập
        createAsignment(id:number,name:string,content:string): Asignment{
            let item:object={id,name,content}
          this.listAsignment.push(item)
        }
        // tạo danh sách bài kiểm tra
      
        createAssesment(id:number,name:string,content:string): Assesment{
          return new Assesment(2, "Bài kht1", "thi lần 1")
        }
      }
      // tạo class khóa học cho sinh viên đăng kí học
      class Course1 {
        id:number
        title: string
        instructor: string ;
        lessons: Lessons[] 
        assesment: Assesment[]
        constructor(id:number,title:string,instructor:string){
          this.id = id;
          this.title = title;
          this.instructor = instructor;
          this.lessons = [];
          this.assesment = [];
        }
      }
      // tạo class bài học cho khóa học
      class Lessons{
        id:number
        title: string
        asignment: Asignment[]
        constructor(id:number,title:string){
          this.id = id
          this.title = title;
          this.asignment = [];
        }
      }
      // tạo class bài tập cho bài học
      class Asignment {
        id:number
        name:string
        content: string
        constructor(id:number,name:string,content:string){
          this.id = id;
          this.name = name;
          this.content = content;
        }
      
      }
      // tạo class bài kiểm tra cho khóa học
      class Assesment {
        id:number
        name:string
        content:string
        constructor(id:number,name:string,content:string){
          this.id = id;
          this.name = name;
          this.content = content;
        }
      }
      newLession.asignment.push(this.createAsignment(2,"bt1","Khóa 1"))
      return newLession
    }
    // tạo danh sách bài tập
    createAsignment(id:number,name:string,content:string): Asignment{
      return new Asignment(1, "Bài tập 1", "Tính tổng của 2 số a và b")
    }
    // tạo danh sách bài kiểm tra
  
    createAssesment(id:number,name:string,content:string): Assesment{
      return new Assesment(2, "Bài kht1", "thi lần 1")
    }
  }
  // tạo class khóa học cho sinh viên đăng kí học
  class Course1 {
    id:number
    title: string
    instructor: string ;
    lessons: Lessons[] 
    assesment: Assesment[]
    constructor(id:number,title:string,instructor:string){
      this.id = id;
      this.title = title;
      this.instructor = instructor;
      this.lessons = [];
      this.assesment = [];
    }
  }
  // tạo class bài học cho khóa học
  class Lessons{
    id:number
    title: string
    asignment: Asignment[]
    constructor(id:number,title:string){
      this.id = id
      this.title = title;
      this.asignment = [];
    }
  }
  // tạo class bài tập cho bài học
  class Asignment {
    id:number
    name:string
    content: string
    constructor(id:number,name:string,content:string){
      this.id = id;
      this.name = name;
      this.content = content;
    }
  
  }
  // tạo class bài kiểm tra cho khóa học
  class Assesment {
    id:number
    name:string
    content:string
    constructor(id:number,name:string,content:string){
      this.id = id;
      this.name = name;
      this.content = content;
    }
  }