import glob
import json
# import collections

htm_files = glob.glob("*.htm")
glob.glob("*.htm")
data = {}
data['myfiles'] = []

for filenum in htm_files:
    file = open(filenum, 'r')
    all_lines = file.readlines()
    this_file = filenum[0] + filenum[1] + filenum[2] + filenum[3]
    title = (str.strip(all_lines[2]))
    author = (str.strip(all_lines[5]))
    str_a = str.strip(all_lines[11])
    str_b = str.strip(all_lines[12])
    str_c = str_a+" "+str_b
    firstline = (str_c.replace("<br>", ""))
    lnlen = str(((len(max(open(filenum, 'r'), key=len)))))

    # print("Const ")
    print("const "+this_file+" = {a: " + lnlen + "}")
    # files_lst = [
    #     ('fileName', this_file),
    #     # ('title', title),
    #     # ('author', author),
    #     # ('firstline', firstline),
    #     ('longestline', lnlen)
    # ]

    # files_lst = collections.OrderedDict(files_lst)
    # myfiles = (this_file, lnlen
    #     'fileName', this_file,
    # #     'title': title,
    # #     'author': author,
    # #     'firstline': firstline,
    #     'longestline', lnlen
    # )
#
#
    # print(*myfiles)
    # [fileName], files_dict[longestline]
#
