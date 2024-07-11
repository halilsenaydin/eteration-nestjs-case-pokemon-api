--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (Debian 16.3-1.pgdg120+1)
-- Dumped by pg_dump version 16.3 (Debian 16.3-1.pgdg120+1)

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

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: ability_of_char; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ability_of_char (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL,
    "createDateTime" timestamp with time zone DEFAULT now() NOT NULL,
    "lastChangedDateTime" timestamp with time zone DEFAULT now() NOT NULL,
    "abilityId" uuid NOT NULL,
    "charId" uuid NOT NULL
);


ALTER TABLE public.ability_of_char OWNER TO postgres;

--
-- Name: char; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."char" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL,
    "createDateTime" timestamp with time zone DEFAULT now() NOT NULL,
    "lastChangedDateTime" timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    weight integer NOT NULL,
    height integer NOT NULL,
    "isDefault" boolean NOT NULL
);


ALTER TABLE public."char" OWNER TO postgres;

--
-- Name: char_ability; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.char_ability (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL,
    "createDateTime" timestamp with time zone DEFAULT now() NOT NULL,
    "lastChangedDateTime" timestamp with time zone DEFAULT now() NOT NULL,
    "abilityName" text NOT NULL
);


ALTER TABLE public.char_ability OWNER TO postgres;

--
-- Name: char_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.char_type (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL,
    "createDateTime" timestamp with time zone DEFAULT now() NOT NULL,
    "lastChangedDateTime" timestamp with time zone DEFAULT now() NOT NULL,
    "typeName" text NOT NULL
);


ALTER TABLE public.char_type OWNER TO postgres;

--
-- Name: type_of_char; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.type_of_char (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL,
    "createDateTime" timestamp with time zone DEFAULT now() NOT NULL,
    "lastChangedDateTime" timestamp with time zone DEFAULT now() NOT NULL,
    "typeId" uuid NOT NULL,
    "charId" uuid NOT NULL
);


ALTER TABLE public.type_of_char OWNER TO postgres;

--
-- Data for Name: ability_of_char; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ability_of_char (id, "isActive", "createDateTime", "lastChangedDateTime", "abilityId", "charId") FROM stdin;
eb66ad84-88fa-4ec4-aee0-096c858e650b	t	2024-07-10 19:14:25.09337+00	2024-07-10 19:14:25.09337+00	7cd7705f-82e0-443c-ab55-23740f0c0e0a	72b08584-f317-4d29-a14e-b2dcb6ad3881
e5f5b59f-f051-4326-a0e4-48b71e5bd3fc	t	2024-07-10 19:14:25.09337+00	2024-07-10 19:14:25.09337+00	8e8ad4ea-61b8-455a-985e-a9c24f491625	72b08584-f317-4d29-a14e-b2dcb6ad3881
1e6742ec-a233-474b-bd21-a0bf85cf412a	t	2024-07-10 19:14:25.152214+00	2024-07-10 19:14:25.152214+00	7cd7705f-82e0-443c-ab55-23740f0c0e0a	936dff9e-7f78-4204-b222-89e1c027620f
621efe2d-41da-4314-97df-bc2a6acf25f9	t	2024-07-10 19:14:25.152214+00	2024-07-10 19:14:25.152214+00	8e8ad4ea-61b8-455a-985e-a9c24f491625	936dff9e-7f78-4204-b222-89e1c027620f
c1925d00-e6c6-43ab-b0f0-8ca333cfda42	t	2024-07-10 19:14:25.17132+00	2024-07-10 19:14:25.17132+00	7cd7705f-82e0-443c-ab55-23740f0c0e0a	d483d010-6a15-47a0-b3d0-f39fcc54bc3b
c0762aa1-07e2-4f21-bca7-b2ac2b7dd8b2	t	2024-07-10 19:14:25.17132+00	2024-07-10 19:14:25.17132+00	8e8ad4ea-61b8-455a-985e-a9c24f491625	d483d010-6a15-47a0-b3d0-f39fcc54bc3b
b3e3417b-969e-47db-ab92-b1475f045032	t	2024-07-10 19:14:25.182951+00	2024-07-10 19:14:25.182951+00	b6aa9ee8-ac5b-4388-9176-dcbce4778dac	704e4295-37ac-40b0-93fd-8462add84031
6e58377d-6b4c-4796-ae0a-259d3df71618	t	2024-07-10 19:14:25.182951+00	2024-07-10 19:14:25.182951+00	fd9ddb9b-8fa3-4776-847f-f6394813b4bb	704e4295-37ac-40b0-93fd-8462add84031
b2f6f331-5e72-4890-8328-d16463db3ae8	t	2024-07-10 19:14:25.205317+00	2024-07-10 19:14:25.205317+00	b6aa9ee8-ac5b-4388-9176-dcbce4778dac	c3fa27ce-aee3-407d-a831-01024beb6640
d3566f3c-4c40-4dde-9966-160331a58ddc	t	2024-07-10 19:14:25.205317+00	2024-07-10 19:14:25.205317+00	fd9ddb9b-8fa3-4776-847f-f6394813b4bb	c3fa27ce-aee3-407d-a831-01024beb6640
555e62bf-a697-4e5c-9919-7e3f8eabf1ed	t	2024-07-10 19:14:25.219185+00	2024-07-10 19:14:25.219185+00	b6aa9ee8-ac5b-4388-9176-dcbce4778dac	dc12797a-545f-4d2d-a483-2173ed6c469b
656acb7c-cf4b-47ea-a698-0f6d7f4d05af	t	2024-07-10 19:14:25.219185+00	2024-07-10 19:14:25.219185+00	fd9ddb9b-8fa3-4776-847f-f6394813b4bb	dc12797a-545f-4d2d-a483-2173ed6c469b
11f630a8-3f06-4a2f-9bd3-d7ead27037ea	t	2024-07-10 19:14:25.252373+00	2024-07-10 19:14:25.252373+00	d0e60c3b-81ff-4dd5-94ce-35f8991dee9d	60f57ec9-7b63-4caa-aa7d-966fa495e65f
5e5c76f3-c00e-467b-9bff-b25a3fc4dc9c	t	2024-07-10 19:14:25.252373+00	2024-07-10 19:14:25.252373+00	981bc0c0-bdc6-4709-9cff-99fecbea96a8	60f57ec9-7b63-4caa-aa7d-966fa495e65f
33267ab2-70b4-41ff-9926-f75c66027baf	t	2024-07-10 19:14:25.259204+00	2024-07-10 19:14:25.259204+00	d0e60c3b-81ff-4dd5-94ce-35f8991dee9d	e26b7a72-3290-46c9-87f5-305f7b407a36
4fe26114-fe64-46ac-a906-d102d0e789cd	t	2024-07-10 19:14:25.259204+00	2024-07-10 19:14:25.259204+00	981bc0c0-bdc6-4709-9cff-99fecbea96a8	e26b7a72-3290-46c9-87f5-305f7b407a36
b81ff9c8-4f03-48a4-8788-baef0e3dc4cc	t	2024-07-10 19:14:25.26297+00	2024-07-10 19:14:25.26297+00	d0e60c3b-81ff-4dd5-94ce-35f8991dee9d	d4cc2b24-dd2e-4a56-a2cc-b50c7138b339
030def0e-dcf8-4ad8-b404-d05183573e51	t	2024-07-10 19:14:25.26297+00	2024-07-10 19:14:25.26297+00	981bc0c0-bdc6-4709-9cff-99fecbea96a8	d4cc2b24-dd2e-4a56-a2cc-b50c7138b339
7b3bf289-1e73-4681-9800-e67f51612960	t	2024-07-10 19:14:25.266467+00	2024-07-10 19:14:25.266467+00	a3ea026e-9c1a-4bec-92ee-396dfcd3e541	51a224b4-ff3e-48e5-98b7-160ee25425a3
d8ba9f4d-4143-4883-85e2-47d7dd68de2c	t	2024-07-10 19:14:25.266467+00	2024-07-10 19:14:25.266467+00	0328bf74-9ab7-4b9d-8c0f-4e0bdf25bd35	51a224b4-ff3e-48e5-98b7-160ee25425a3
\.


--
-- Data for Name: char; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."char" (id, "isActive", "createDateTime", "lastChangedDateTime", name, weight, height, "isDefault") FROM stdin;
72b08584-f317-4d29-a14e-b2dcb6ad3881	t	2024-07-10 19:14:25.09337+00	2024-07-11 07:08:10.035103+00	bulbasaur	69	7	t
936dff9e-7f78-4204-b222-89e1c027620f	t	2024-07-10 19:14:25.152214+00	2024-07-11 07:08:10.082538+00	ivysaur	130	10	t
d483d010-6a15-47a0-b3d0-f39fcc54bc3b	t	2024-07-10 19:14:25.17132+00	2024-07-11 07:08:10.093553+00	venusaur	1000	20	t
704e4295-37ac-40b0-93fd-8462add84031	t	2024-07-10 19:14:25.182951+00	2024-07-11 07:08:10.106527+00	charmander	85	6	t
c3fa27ce-aee3-407d-a831-01024beb6640	t	2024-07-10 19:14:25.205317+00	2024-07-11 07:08:10.11567+00	charmeleon	190	11	t
dc12797a-545f-4d2d-a483-2173ed6c469b	t	2024-07-10 19:14:25.219185+00	2024-07-11 07:08:10.124423+00	charizard	905	17	t
60f57ec9-7b63-4caa-aa7d-966fa495e65f	t	2024-07-10 19:14:25.252373+00	2024-07-11 07:08:10.131947+00	squirtle	90	5	t
e26b7a72-3290-46c9-87f5-305f7b407a36	t	2024-07-10 19:14:25.259204+00	2024-07-11 07:08:10.13951+00	wartortle	225	10	t
d4cc2b24-dd2e-4a56-a2cc-b50c7138b339	t	2024-07-10 19:14:25.26297+00	2024-07-11 07:08:10.145107+00	blastoise	855	16	t
51a224b4-ff3e-48e5-98b7-160ee25425a3	t	2024-07-10 19:14:25.266467+00	2024-07-11 07:08:10.150374+00	caterpie	29	3	t
\.


--
-- Data for Name: char_ability; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.char_ability (id, "isActive", "createDateTime", "lastChangedDateTime", "abilityName") FROM stdin;
7cd7705f-82e0-443c-ab55-23740f0c0e0a	t	2024-07-10 19:14:25.139526+00	2024-07-10 19:14:25.139526+00	overgrow
8e8ad4ea-61b8-455a-985e-a9c24f491625	t	2024-07-10 19:14:25.142511+00	2024-07-10 19:14:25.142511+00	chlorophyll
b6aa9ee8-ac5b-4388-9176-dcbce4778dac	t	2024-07-10 19:14:25.191663+00	2024-07-10 19:14:25.191663+00	blaze
fd9ddb9b-8fa3-4776-847f-f6394813b4bb	t	2024-07-10 19:14:25.197173+00	2024-07-10 19:14:25.197173+00	solar-power
d0e60c3b-81ff-4dd5-94ce-35f8991dee9d	t	2024-07-10 19:14:25.255517+00	2024-07-10 19:14:25.255517+00	torrent
981bc0c0-bdc6-4709-9cff-99fecbea96a8	t	2024-07-10 19:14:25.256774+00	2024-07-10 19:14:25.256774+00	rain-dish
a3ea026e-9c1a-4bec-92ee-396dfcd3e541	t	2024-07-10 19:14:25.26921+00	2024-07-10 19:14:25.26921+00	shield-dust
0328bf74-9ab7-4b9d-8c0f-4e0bdf25bd35	t	2024-07-10 19:14:25.270514+00	2024-07-10 19:14:25.270514+00	run-away
\.


--
-- Data for Name: char_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.char_type (id, "isActive", "createDateTime", "lastChangedDateTime", "typeName") FROM stdin;
b3888bd2-0575-4405-81f5-d44a21ba41b8	t	2024-07-10 19:14:25.127829+00	2024-07-10 19:14:25.127829+00	grass
600102b3-a889-47b3-9d09-73382958b140	t	2024-07-10 19:14:25.133264+00	2024-07-10 19:14:25.133264+00	poison
02c12094-b662-4470-ada7-4257c117c229	t	2024-07-10 19:14:25.187052+00	2024-07-10 19:14:25.187052+00	fire
004586f6-9caf-4aed-87bf-44bea08b9bdf	t	2024-07-10 19:14:25.223276+00	2024-07-10 19:14:25.223276+00	flying
ac9ce771-483f-4418-91b9-f69f6c9e1b7e	t	2024-07-10 19:14:25.254036+00	2024-07-10 19:14:25.254036+00	water
d0bb0ed2-685a-4086-bfb5-8622339c2bcd	t	2024-07-10 19:14:25.268002+00	2024-07-10 19:14:25.268002+00	bug
30308a1f-2698-44b6-8677-8dd9544ffe80	t	2024-07-11 06:28:15.309935+00	2024-07-11 06:28:15.309935+00	test-type
\.


--
-- Data for Name: type_of_char; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.type_of_char (id, "isActive", "createDateTime", "lastChangedDateTime", "typeId", "charId") FROM stdin;
46a8240b-e7ba-497f-a4bb-58508a2fd4b4	t	2024-07-10 19:14:25.09337+00	2024-07-10 19:14:25.09337+00	b3888bd2-0575-4405-81f5-d44a21ba41b8	72b08584-f317-4d29-a14e-b2dcb6ad3881
409ef716-f1d0-4674-ba09-bac106e6ac5c	t	2024-07-10 19:14:25.09337+00	2024-07-10 19:14:25.09337+00	600102b3-a889-47b3-9d09-73382958b140	72b08584-f317-4d29-a14e-b2dcb6ad3881
ba934a65-2aea-4a1f-afb8-d5306daae638	t	2024-07-10 19:14:25.152214+00	2024-07-10 19:14:25.152214+00	b3888bd2-0575-4405-81f5-d44a21ba41b8	936dff9e-7f78-4204-b222-89e1c027620f
e9fe0f91-c96a-4bc7-ae21-bd5ec7ad2012	t	2024-07-10 19:14:25.152214+00	2024-07-10 19:14:25.152214+00	600102b3-a889-47b3-9d09-73382958b140	936dff9e-7f78-4204-b222-89e1c027620f
11997ab6-0e68-4f90-86b7-2475eea4c4c7	t	2024-07-10 19:14:25.17132+00	2024-07-10 19:14:25.17132+00	b3888bd2-0575-4405-81f5-d44a21ba41b8	d483d010-6a15-47a0-b3d0-f39fcc54bc3b
0150bd31-e64d-4cde-b335-b9a0866461c9	t	2024-07-10 19:14:25.17132+00	2024-07-10 19:14:25.17132+00	600102b3-a889-47b3-9d09-73382958b140	d483d010-6a15-47a0-b3d0-f39fcc54bc3b
62ed9e42-27ea-4d23-a9d7-31bda3afdfe6	t	2024-07-10 19:14:25.182951+00	2024-07-10 19:14:25.182951+00	02c12094-b662-4470-ada7-4257c117c229	704e4295-37ac-40b0-93fd-8462add84031
624aedd2-9b2a-43f3-9ae4-2d5bc3cb57c5	t	2024-07-10 19:14:25.205317+00	2024-07-10 19:14:25.205317+00	02c12094-b662-4470-ada7-4257c117c229	c3fa27ce-aee3-407d-a831-01024beb6640
be9b229a-cd02-4bbb-bcd1-c924acbabdfe	t	2024-07-10 19:14:25.219185+00	2024-07-10 19:14:25.219185+00	02c12094-b662-4470-ada7-4257c117c229	dc12797a-545f-4d2d-a483-2173ed6c469b
2e2b0a57-72fb-4936-b856-b8dfd9c6e9b5	t	2024-07-10 19:14:25.219185+00	2024-07-10 19:14:25.219185+00	004586f6-9caf-4aed-87bf-44bea08b9bdf	dc12797a-545f-4d2d-a483-2173ed6c469b
b8dce2af-7f21-4ed2-a162-f6d55146e7fd	t	2024-07-10 19:14:25.252373+00	2024-07-10 19:14:25.252373+00	ac9ce771-483f-4418-91b9-f69f6c9e1b7e	60f57ec9-7b63-4caa-aa7d-966fa495e65f
571fcdbb-a99f-4fd4-ae2e-f0329d93729b	t	2024-07-10 19:14:25.259204+00	2024-07-10 19:14:25.259204+00	ac9ce771-483f-4418-91b9-f69f6c9e1b7e	e26b7a72-3290-46c9-87f5-305f7b407a36
fff51df2-1bfb-42e8-bd3a-411b195f295f	t	2024-07-10 19:14:25.26297+00	2024-07-10 19:14:25.26297+00	ac9ce771-483f-4418-91b9-f69f6c9e1b7e	d4cc2b24-dd2e-4a56-a2cc-b50c7138b339
9758a511-7921-443b-8777-cd50b56980ae	t	2024-07-10 19:14:25.266467+00	2024-07-10 19:14:25.266467+00	d0bb0ed2-685a-4086-bfb5-8622339c2bcd	51a224b4-ff3e-48e5-98b7-160ee25425a3
\.


--
-- Name: char PK_0e679f78cd9fa5a731d248eabdc; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."char"
    ADD CONSTRAINT "PK_0e679f78cd9fa5a731d248eabdc" PRIMARY KEY (id);


--
-- Name: type_of_char PK_20d8add11625fb26a02e5e03ab3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_of_char
    ADD CONSTRAINT "PK_20d8add11625fb26a02e5e03ab3" PRIMARY KEY (id);


--
-- Name: ability_of_char PK_95ad5a7529093c6a076bc9e851d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ability_of_char
    ADD CONSTRAINT "PK_95ad5a7529093c6a076bc9e851d" PRIMARY KEY (id);


--
-- Name: char_type PK_e87f03a921bccec0284e84a32ff; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.char_type
    ADD CONSTRAINT "PK_e87f03a921bccec0284e84a32ff" PRIMARY KEY (id);


--
-- Name: char_ability PK_f56ac15ebf2047d35b84c56310e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.char_ability
    ADD CONSTRAINT "PK_f56ac15ebf2047d35b84c56310e" PRIMARY KEY (id);


--
-- Name: ability_of_char FK_66d13f991bac6f4155e371460fe; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ability_of_char
    ADD CONSTRAINT "FK_66d13f991bac6f4155e371460fe" FOREIGN KEY ("charId") REFERENCES public."char"(id);


--
-- Name: type_of_char FK_b2d643ab89f307087e5ea258d38; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_of_char
    ADD CONSTRAINT "FK_b2d643ab89f307087e5ea258d38" FOREIGN KEY ("charId") REFERENCES public."char"(id);


--
-- Name: type_of_char FK_cfc2dfe809508ab6f660de32b68; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_of_char
    ADD CONSTRAINT "FK_cfc2dfe809508ab6f660de32b68" FOREIGN KEY ("typeId") REFERENCES public.char_type(id);


--
-- Name: ability_of_char FK_fb2e1de01d3a38b098f69fb6aa5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ability_of_char
    ADD CONSTRAINT "FK_fb2e1de01d3a38b098f69fb6aa5" FOREIGN KEY ("abilityId") REFERENCES public.char_ability(id);


--
-- PostgreSQL database dump complete
--

