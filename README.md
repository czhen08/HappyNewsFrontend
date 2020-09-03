This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

App.js - 

1.	Because the React project folder is over 500MB so I don’t upload the whole project, to run the web interface please first start a new React project and then replace the src folder with the given one in code/web-interface.

2.	Please also install the React Ant design library, the command is:
### `npm install antd`

and then run:
### `npm start

3.	The code for the web interface is in the App.js file, which is located in src/App.js


Important Information
================
In this section, point out any important information that is valuable for the evaluator to know before evaluating this submission

Before running the code, make sure all the missing supplementary files are added to the specified location.

To run the code, please make sure you are in the main directory (18065476_IRDM).

Provided supplementary files
===================
In this section, define the filename of different files that are included in this submission followed by a description of the information in the file.

Q1/Q1_term_frequency.csv : A CSV file that shows Zipf's law's parameters for top 1000 frequency terms in the collection. 
The parameters include the term, itsfrequency, its rank, the probability of term occurrence(Pr), and the multiplication of the rank of the term and the its probability (r*Pr).

Q1/Figure_tf_100_terms.png: A PNG file that plots the curve for top 100 frequency terms

Q1/Figure_tf_1000_terms.png: A PNG file that plots the curve for top 1000 frequency terms

Q1/Figure_tf_1all_terms.png: A PNG file that plots the curve for all terms in the colloection

Q1/Figure_zipf_parameters1.png: A screenshot of Q1_term_frequency.csv

Q1/Figure_zipf_parameters2.png: A screenshot of Q1_term_frequency.csv

Q2/Q2_vector_space.csv: A CSV file that contains the retrieval results of subtask 2

Q3/Q3_unigram.csv: A CSV file that contains the retrieval results of query-likelihood unigram language model

Q3/Q3_laplace.csv: A CSV file that contains the retrieval results of Laplace Smoothing

Q3/Q3_jelinek_mercer.csv: A CSV file that contains the retrieval results of Jelinek-Mercer Smoothing

Q3/Q3_dirichlet.csv: A CSV file that contains the retrieval results of Dirichlet Smoothing

Q4/Figure_learning_rate_0.01.png : A PNG file that plots the change of the model training loss over the 1000 iterations under learning rate 0.01

Q4/Figure_learning_rate_0.05.png : A PNG file that plots the change of the model training loss over the 1000 iterations under learning rate 0.05

Q4/Figure_learning_rate_0.5.png : A PNG file that plots the change of the model training loss over the 1000 iterations under learning rate 0.5

Q4/Figure_learning_rate_0.9.png : A PNG file that plots the change of the model training loss over the 1000 iterations under learning rate 0.9

Q8/Prediction_results.jsonl : A jsonl file that contains my final model’s prediction


Missing supplementary files
===========================
In this section, define and describe the additional/ auxilliary files that are not provided with the submission due to size constraints etc... with the reason

1) wiki-pages folder, the folder unzipped from wiki-pages.zip, should be put in the main directory (18065476_IRDM) before running the code, not provided due to size constraints

2) train.jsonl, should be put in the main directory (18065476_IRDM) before running the code, not provided due to size constraints

3) shared_task_dev.jsonl, should be put in the main directory (18065476_IRDM) before running the code, not provided due to size constraints

Code files
==========
In this section, define the source code files that are included in this submission with a description of the files 

Q1/Q1.py ： Code file for Q1

Q2/Q2.py ： Code file for Q2

Q3/Q3_unigram.py ： Code file for Q3 query-likelihood unigram language model

Q3/Q3_laplace.py ： Code file for Q3 Laplace Smoothing

Q3/Q3_jelinek_mercer.py ： Code file for Q3 Jelinek-Mercer Smoothing

Q3/Q3_dirichlet.py ： Code file for Q3 Dirichlet Smoothing

Q4/Q4.py ： Code file for Q4

Q5/Q5.py ： Code file for Q5

Q6/Q6.py ： Code file for Q6

Q8/Q8.py ： Code file for Q8


Running the code
================
In this section, define the important code files that are entry points to the code and describe how to run the code to reproduce results.

Before running the code, make sure all the missing supplementary files are added to the specified location.

To run the code, please make sure you are in the main directory (18065476_IRDM).

Also make sure you have installed TensorFlow, keras, gensim, matplotlib and numpy.

I use Anaconda Prompt to run the code, first go to the right directory which is 18065476_IRDM, 

then run "ipyhton" command to open IPython and copy the code to ipyhton to run the code.

Note that the running time for Q2 and Q3 is above one and half hour, for other questions the situation is similar.
