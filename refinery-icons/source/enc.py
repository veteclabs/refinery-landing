import sys, os, glob
from PIL import Image
n, size = sys.argv[1], int(sys.argv[2])
fs = sorted(glob.glob(f'frames/{n}/*.png'))
ims = [Image.open(f).convert('RGBA') for f in fs]
if size != 512: ims = [i.resize((size, size), Image.LANCZOS) for i in ims]
dur = [17 if k % 3 != 2 else 16 for k in range(len(ims))]  # avg 16.67ms = 60fps
ims[0].save(f'webp/{size}/{n}.webp', save_all=True, append_images=ims[1:], duration=dur, loop=0, quality=78, alpha_quality=85, method=4, minimize_size=True, kmax=96)
