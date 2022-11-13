--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: book; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.book (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    image character varying(255) NOT NULL,
    author character varying(50) NOT NULL,
    "genreId" integer,
    "statusId" integer
);


--
-- Name: bookGenre; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."bookGenre" (
    id integer NOT NULL,
    genre character varying(50) NOT NULL
);


--
-- Name: bookGenre_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."bookGenre_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: bookGenre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."bookGenre_id_seq" OWNED BY public."bookGenre".id;


--
-- Name: book_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.book_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: book_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.book_id_seq OWNED BY public.book.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer,
    token text NOT NULL,
    "bookId" integer
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: status; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.status (
    id integer NOT NULL,
    status character varying(50) NOT NULL
);


--
-- Name: status_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.status_id_seq OWNED BY public.status.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    image character varying(255) NOT NULL,
    email character varying(50) NOT NULL,
    password character varying(100) NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: book id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book ALTER COLUMN id SET DEFAULT nextval('public.book_id_seq'::regclass);


--
-- Name: bookGenre id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."bookGenre" ALTER COLUMN id SET DEFAULT nextval('public."bookGenre_id_seq"'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: status id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.status ALTER COLUMN id SET DEFAULT nextval('public.status_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: book; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.book VALUES (1, 'Como eu era antes de você', 'https://cdn.maioresemelhores.com/imagens/mm-livros-9-cke.jpg', 'Jojo Moyes', 2, 3);
INSERT INTO public.book VALUES (2, 'Gritos no silêncio', 'https://grupoautentica.com.br/img/capas/x/1625-20180629114429.jpg', 'Angela Marsons', 3, 3);
INSERT INTO public.book VALUES (4, 'O terror sem face: Slender Man', 'https://a-static.mlcdn.com.br/800x560/livro-o-terror-sem-face-slender-man-editora-viseu/viseu/9788530007942/9d4f440c90762b42f9b877f2677312fe.jpg', 'J.J.Santos', 1, 4);
INSERT INTO public.book VALUES (5, 'O exorcista', 'https://lirp.cdn-website.com/174487e2/dms3rep/multi/opt/exorcista-640w.jpeg', 'Willian Peter Blatty', 1, 4);
INSERT INTO public.book VALUES (6, 'Cemitério Maldito', 'https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto/image-uploads/subbuzz-images/jpeg/aca8851aec361460ef2659d364a8ebdb.jpg', 'Stephen King', 1, 4);
INSERT INTO public.book VALUES (7, 'Bird Box', 'https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto/image-uploads/subbuzz-images/jpeg/4b700555e5dc47307a09f6c09c27bd8c.jpg', 'Josh Malerman', 3, 4);
INSERT INTO public.book VALUES (8, 'O Colecionador', 'https://cdn.maioresemelhores.com/imagens/maiores-e-melhores-livros-de-suspense-03-cke.jpg', 'Josh Malerman', 3, 4);
INSERT INTO public.book VALUES (9, 'O Destino: da terras Altas', 'https://1.bp.blogspot.com/-bf_qI-X9Z2c/XgaFxzPfT-I/AAAAAAAAf6c/SExKNKg9TDobthi7texT5xUt3YOAy-tXwCLcBGAsYHQ/s1600/destino-terras-altas-hannah-howell-os-murrays-romance-epoca-arqueiro-7-melhores-livros-2019-mademoisellelovesbooks.jpg', 'Hannah Howell', 2, 4);
INSERT INTO public.book VALUES (10, 'Um dia', 'https://www.guiadasemana.com.br/contentFiles/system/pictures/2015/2/128928/cropped/7444953gg.jpg', 'David Nicholls', 2, 4);
INSERT INTO public.book VALUES (11, 'A escolha', 'https://m.media-amazon.com/images/I/71Tn+WdqilL.jpg', 'Nicholas Sparks', 2, 4);
INSERT INTO public.book VALUES (12, 'O Guardião', 'https://www.minhavidaliteraria.com.br/wp-content/uploads/2015/02/O-Guardi%C3%A3o.png', 'Nicholas Sparks', 2, 3);
INSERT INTO public.book VALUES (13, 'No seu olhar', 'https://m.media-amazon.com/images/I/51C7mwl0bPL.jpg', 'Nicholas Sparks', 2, 4);
INSERT INTO public.book VALUES (14, 'Um homem de sorte', 'https://m.media-amazon.com/images/I/81B0fH03AHL.jpg', 'Nicholas Sparks', 2, 4);
INSERT INTO public.book VALUES (15, 'Uma longa jornada', 'https://www.editoraarqueiro.com.br/media/livros_livro/longa-jornada-uma_capa-web.jpg.170x255_q85_upscale.jpg', 'Nicholas Sparks', 2, 4);
INSERT INTO public.book VALUES (16, 'O melhor de mim', 'https://lirp.cdn-website.com/174487e2/dms3rep/multi/opt/o-melhor-de-mim-640w.jpeg', 'Nicholas Sparks', 2, 4);
INSERT INTO public.book VALUES (17, 'Um porto seguro', 'https://cdn.awsli.com.br/1000x1000/765/765972/produto/36113356/b585235d63.jpg', 'Nicholas Sparks', 2, 4);


--
-- Data for Name: bookGenre; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."bookGenre" VALUES (1, 'Terror');
INSERT INTO public."bookGenre" VALUES (2, 'Romance');
INSERT INTO public."bookGenre" VALUES (3, 'Suspense');


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 1, '7abb0b56-84f4-46b3-8fa9-4b82e8c7122d', NULL);
INSERT INTO public.sessions VALUES (2, 1, 'f1763fd2-da93-451b-9cba-3fae156ea9ee', NULL);


--
-- Data for Name: status; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.status VALUES (1, 'Bom');
INSERT INTO public.status VALUES (2, 'Ruim');
INSERT INTO public.status VALUES (3, 'Ótimo');
INSERT INTO public.status VALUES (4, 'Pretendo ler');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Rosa', 'https://static.anime21.blog.br/2018/05/Lala_Satalin_Deviluke.png', 'rosa@gmail.com', '$2b$12$A6hBpHeZzvdKb2iOkb7a5OESxGBB88LLOKgzLY6kgqWiRzUScIxc6');


--
-- Name: bookGenre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."bookGenre_id_seq"', 3, true);


--
-- Name: book_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.book_id_seq', 17, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 2, true);


--
-- Name: status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.status_id_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: bookGenre bookGenre_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."bookGenre"
    ADD CONSTRAINT "bookGenre_pkey" PRIMARY KEY (id);


--
-- Name: book book_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: status status_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: book book_genreId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT "book_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES public."bookGenre"(id);


--
-- Name: book book_statusId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT "book_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES public.status(id);


--
-- Name: sessions sessions_bookId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES public.book(id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

